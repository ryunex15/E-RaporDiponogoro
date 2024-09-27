<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jawaban_siswa;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class JawabanTugasController extends Controller
{
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
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('uploads'); // adjust path as needed
        }

        // Buat entri baru di tabel Jawaban_siswa
        $jawabanSiswa = Jawaban_siswa::create([
            'tugas_id' => $request->tugas_id,
            'lampiran' => $path ?? null,
            'komentar' => $request->komentar,
            'peserta_didik_id' => $peserta_didik_id, // assuming you're tracking the logged-in student
        ]);

        return response()->json(['message' => 'Tugas berhasil dikirim!', 'data' => $jawabanSiswa], 201);
    }
}
