<?php

namespace App\Http\Controllers;

use App\Models\Tugas;
use Illuminate\Http\Request;

class TugasController extends Controller
{
    public function index()
    {

    }

    public function create()
    {
        // return view('tugas.create');
    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'deadline' => 'required|date',
        //     'judul' => 'required|string|max:255',
        //     'lampiran_document' => 'nullable|string|max:255',
        //     'id_rombongan_belajar' => 'required|exists:rombongan_belajar,id',
        //     'deskripsi' => 'required|string',
        //     'id_topik_tugas' => 'required|exists:topik_tugas,id',
        // ]);

        // Tugas::create($request->all());

        // return redirect()->route('tugas.index')
        //     ->with('success', 'Tugas berhasil ditambahkan.');
    }

    public function show(Tugas $tugas)
    {
        // return view('tugas.show', compact('tugas'));
    }

    public function edit(Tugas $tugas)
    {
        // return view('tugas.edit', compact('tugas'));
    }

    public function update(Request $request, Tugas $tugas)
    {
        // $request->validate([
        //     'deadline' => 'required|date',
        //     'judul' => 'required|string|max:255',
        //     'lampiran_document' => 'nullable|string|max:255',
        //     'id_rombongan_belajar' => 'required|exists:rombongan_belajar,id',
        //     'deskripsi' => 'required|string',
        //     'id_topik_tugas' => 'required|exists:topik_tugas,id',
        // ]);

        // $tugas->update($request->all());

        // return redirect()->route('tugas.index')
        //     ->with('success', 'Tugas berhasil diperbarui.');
    }

    public function destroy(Tugas $tugas)
    {
        // $tugas->delete();

        // return redirect()->route('tugas.index')
        //     ->with('success', 'Tugas berhasil dihapus.');
    }
};

