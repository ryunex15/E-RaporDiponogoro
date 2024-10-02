<?php

namespace App\Http\Controllers;

use App\Models\Tugas;
use Illuminate\Http\Request;
use App\Models\Jawaban_siswa;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class JawabanTugasController extends Controller
{
    public function index(Request $request)
    {



        // // Optionally, fetch related data (e.g., answers from Jawaban_siswa)
        $jawabanSiswa = Jawaban_siswa::where('tugas_id', $request->id_tugas)->with('pesertaDidik')->get();

        return response()->json($jawabanSiswa);

    }
    public function store(Request $request)
    {
        $peserta_didik_id = Auth::user()->peserta_didik_id;

        // Validasi input
        $validator = Validator::make($request->all(), [
            'tugas_id' => 'required',
            'file' => 'required|file|mimes:pdf,docx,jpg,jpeg,png|max:2048',
            'komentar' => 'nullable|required|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Simpan file
        $filePath = null;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filePath = $file->store('tugas', 'public');
        }

        // Cek apakah sudah ada jawaban dengan peserta_didik_id dan tugas_id yang sama
        $existingJawaban = Jawaban_siswa::where('peserta_didik_id', $peserta_didik_id)
            ->where('tugas_id', $request->tugas_id)
            ->first();

        if (!$existingJawaban) {
            // Jika belum ada data, buat jawaban baru
            $jawabanSiswa = Jawaban_siswa::create([
                'tugas_id' => $request->tugas_id,
                'lampiran' => $filePath ?? null,
                'komentar' => $request->komentar,
                'peserta_didik_id' => $peserta_didik_id,
                'nilai' => 0,
            ]);

            return response()->json(['message' => 'Tugas berhasil dikirim!', 'data' => $jawabanSiswa], 201);
        } else {
            // Jika sudah ada jawaban untuk tugas ini, kembalikan error
            return response()->json(['message' => 'Jawaban sudah pernah ditambahkan.'], 409);
        }
    }

    public function getJawabanTugas($tugas_id)
    {
        // Ambil tugas_id dari query parameter
        // $tugas_id = $request->query('tugas_id');
        // return $tugas_id;

        // Validasi tugas_id
        if (!$tugas_id) {
            return response()->json(['message' => 'tugas_id tidak diberikan'], 400);
        }

        // Ambil peserta_didik_id dari pengguna yang sedang autentikasi
        $peserta_didik_id = auth()->user()->peserta_didik_id;

        // Ambil jawaban tugas berdasarkan tugas_id dan peserta_didik_id
        $jawaban = Jawaban_siswa::where('tugas_id', $tugas_id)
                    ->where('peserta_didik_id', $peserta_didik_id)
                    ->first();

        if ($jawaban) {
            return response()->json(['data' => $jawaban], 200);
        } else {
            return response()->json(['message' => 'Jawaban tugas tidak ditemukan'], 404);
        }
    }



    public function update(Request $request)
    {
        // Validasi input nilai
        
        $validator = Validator::make($request->all(), [
            'tugas_id' => 'required', // Tugas ID harus ada
            'detail_jawaban_id' => 'required', // Tugas ID harus ada
            'peserta_didik_id' => 'required',
            'nilai' => 'required|integer|min:0|max:100', // Sesuaikan range nilai sesuai kebutuhan
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        // Cari jawaban siswa berdasarkan peserta_didik_id dan tugas_id
        $jawabanSiswa = Jawaban_siswa::where('peserta_didik_id', $request->peserta_didik_id)
        ->where('tugas_id', $request->tugas_id)
        ->where('id', $request->detail_jawaban_id)
        ->first();
        // return $jawabanSiswa;
        
        // Jika jawaban tidak ditemukan, kembalikan pesan error
        if (!$jawabanSiswa) {
            return response()->json(['message' => 'Jawaban tidak ditemukan'], 404);
        }

        // Perbarui kolom nilai
        $jawabanSiswa->nilai = $request->nilai;
        $jawabanSiswa->save();

        return response()->json(['message' => 'Nilai berhasil diperbarui', 'data' => $jawabanSiswa], 200);
    }


}
