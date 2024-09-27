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
            'tugas_id' => 'required', // assuming 'tugas' is your tasks table
            'file' => 'required|file|mimes:pdf,docx,jpg,jpeg,png|max:2048', // adjust file types and size as needed
            'komentar' => 'nullable|required|string|max:500', // adjust max length as needed
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Simpan file
        $filePath = null; // Initialize filePath
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filePath = $file->store('tugas', 'public'); // Simpan di folder 'public/uploads'
        }

        // Buat entri baru di tabel Jawaban_siswa
        $jawabanSiswa = Jawaban_siswa::create([
            'tugas_id' => $request->tugas_id,
            'lampiran' => $filePath ?? null,
            'komentar' => $request->komentar,
            'peserta_didik_id' => $peserta_didik_id, // assuming you're tracking the logged-in student
        ]);

        return response()->json(['message' => 'Tugas berhasil dikirim!', 'data' => $jawabanSiswa], 201);
    }

    public function update(Request $request)
    {
        // Validasi input nilai
        $validator = Validator::make($request->all(), [
            'tugas_id' => 'required', // Tugas ID harus ada
            'peserta_didik_id' => 'required',
            'nilai' => 'required|integer|min:0|max:100', // Sesuaikan range nilai sesuai kebutuhan
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Cari jawaban siswa berdasarkan peserta_didik_id dan tugas_id
        $jawabanSiswa = Jawaban_siswa::where('peserta_didik_id', $request->peserta_didik_id)
            ->where('tugas_id', $request->tugas_id)
            ->first();

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
