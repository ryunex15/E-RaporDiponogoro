<?php

namespace App\Http\Controllers;

use App\Models\TopikTugas;
use App\Models\Tugas;
use Illuminate\Http\Request;
use Str;

class TugasController extends Controller
{
    public function index()
    {
        $pembelajaran_id = request()->pembelajaran_id;

        // Ambil data tugas
        $tugas = Tugas::where('pembelajaran_id', $pembelajaran_id)->with('topikTugas')->get();

        // // Ambil data topik terkait
        // $topik = TopikTugas::where('pembelajaran_id', $pembelajaran_id)->get();

        // // Gabungkan data topik ke dalam data tugas
        // $tugas->each(function ($item) use ($topik) {
        //     // Cari topik yang sesuai dengan tugas
        //     $matchingTopik = $topik->firstWhere('id', $item->topik_id);
        //     $item->judul_topik = $matchingTopik ? $matchingTopik->judul_topik : 'Topik Tidak Ditemukan'; // Menambahkan judul topik ke setiap tugas
        // });

        $data = [
            "tugas" => $tugas,
        ];
        return response()->json($data);

    }

    public function create()
    {
        return view('tugas.create'); // Tampilkan form untuk membuat tugas baru
    }

    // public function store(Request $request)
    // {
    //     $request->validate([ // Validasi input
    //         'deadline' => 'required|date',
    //         'judul' => 'required|string|max:255',
    //         'lampiran_document' => 'nullable|string|max:255',
    //         'id_rombongan_belajar' => 'required|exists:rombongan_belajar,id',
    //         'deskripsi' => 'required|string',
    //         'id_topik_tugas' => 'required|exists:topik_tugas,id',
    //     ]);

    //     Tugas::create($request->all()); // Simpan data tugas baru

    //     return redirect()->route('tugas.index')
    //         ->with('success', 'Tugas berhasil ditambahkan.'); // Redirect dengan pesan sukses
    // }


    public function store(Request $request)
    {
        try {
            // Validasi input
            $validated = $request->validate([
                'topik' => 'required|uuid', // Assuming 'topik' is a UUID
                'judul' => 'required|string|max:255', // Change 'nama_mata_pelajaran' to 'judul'
                'deskripsi' => 'required|string', // This remains the same
                'deadline' => 'required|date', // Change 'deadlineDate' to 'deadline'
                // 'file' => 'required|file|mimes:pdf,doc,docx|max:2048', // File validation
                'file' => 'required', // File validation
                'pembelajaran_id' => 'required', // File validation
            ]);

            // Menyimpan file
            $filePath = null; // Initialize filePath
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $filePath = $file->store('uploads', 'public'); // Simpan di folder 'public/uploads'
            }

            // Menyimpan data pembelajaran
            $tugas = Tugas::create([
                // 'tugas_id' => Str::uuid(), // Tambahkan UUID secara manual
                'topik_tugas_id' => $validated['topik'], // Assuming this is the correct field
                'judul' => $validated['judul'], // Use 'judul' instead of 'nama_mata_pelajaran'
                'deskripsi' => $validated['deskripsi'],
                'deadline' => $validated['deadline'], // Use 'deadline' directly
                'lampiran_document' => $filePath,
                'pembelajaran_id' => $validated['pembelajaran_id'],
            ]);

            return response()->json([
                'message' => 'Pembelajaran berhasil ditambahkan',
                'data' => $tugas
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            // Jika validasi gagal, kirimkan respons error dengan pesan dan status 422
            return response()->json([
                'message' => 'Validasi gagal',
                'errors' => $e->errors(), // Mengirimkan detail validasi yang gagal
            ], 422);

        } catch (\Exception $e) {
            // Tangani semua jenis error lainnya
            return response()->json([
                'message' => 'Terjadi kesalahan saat menyimpan data',
                'error' => $e->getMessage(), // Menampilkan pesan error
            ], 500);
        }
    }



    public function show(Tugas $tugas)
    {
        return view('tugas.show', compact('tugas')); // Tampilkan detail tugas
    }

    public function edit(Tugas $tugas)
    {
        return view('tugas.edit', compact('tugas')); // Tampilkan form untuk mengedit tugas
    }

    public function update(Request $request, Tugas $tugas)
    {
        $request->validate([ // Validasi input
            'deadline' => 'required|date',
            'judul' => 'required|string|max:255',
            'lampiran_document' => 'nullable|string|max:255',
            'id_rombongan_belajar' => 'required|exists:rombongan_belajar,id',
            'deskripsi' => 'required|string',
            'id_topik_tugas' => 'required|exists:topik_tugas,id',
        ]);

        $tugas->update($request->all()); // Perbarui data tugas

        return redirect()->route('tugas.index')
            ->with('success', 'Tugas berhasil diperbarui.'); // Redirect dengan pesan sukses
    }

    public function destroy(Tugas $tugas)
    {
        $tugas->delete(); // Hapus tugas

        return redirect()->route('tugas.index')
            ->with('success', 'Tugas berhasil dihapus.'); // Redirect dengan pesan sukses
    }
}
;

