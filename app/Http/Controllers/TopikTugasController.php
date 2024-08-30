<?php

namespace App\Http\Controllers;

use App\Models\TopikTugas;
use Illuminate\Http\Request;

class TopikTugasController extends Controller
{
    public function index()
    {
        $topikTugas = TopikTugas::all();
        return view('topik_tugas.index', compact('topikTugas'));
    }

    public function create()
    {
        return view('topik_tugas.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul_topik' => 'required|string|max:255',
        ]);

        TopikTugas::create($request->all());

        return redirect()->route('topik_tugas.index')
            ->with('success', 'Topik tugas berhasil ditambahkan.');
    }

    public function show(TopikTugas $topikTugas)
    {
        return view('topik_tugas.show', compact('topikTugas'));
    }

    public function edit(TopikTugas $topikTugas)
    {
        return view('topik_tugas.edit', compact('topikTugas'));
    }

    public function update(Request $request, TopikTugas $topikTugas)
    {
        $request->validate([
            'judul_topik' => 'required|string|max:255',
        ]);

        $topikTugas->update($request->all());

        return redirect()->route('topik_tugas.index')
            ->with('success', 'Topik tugas berhasil diperbarui.');
    }

    public function destroy(TopikTugas $topikTugas)
    {
        $topikTugas->delete();

        return redirect()->route('topik_tugas.index')
            ->with('success', 'Topik tugas berhasil dihapus.');
    }
}

