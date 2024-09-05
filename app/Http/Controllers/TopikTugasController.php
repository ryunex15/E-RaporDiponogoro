<?php
namespace App\Http\Controllers;

use App\Models\TopikTugas;
use Illuminate\Http\Request;

class TopikTugasController extends Controller
{
    public function index()
    {
        $data = TopikTugas::all();
        return response()->json($data);
    }

    public function create()
    {
        return view('topik_tugas.create');
    }

    public function store(Request $request)
    {
       // Validate the request data
    $validated = $request->validate([
        'judul_topik' => 'required|string',
    ]);

    // Save the data to the database
    $topik = new TopikTugas();
    $topik->judul_topik = $validated['judul_topik'];
    $topik->save();

    $data = [
        'icon' => 'success',
        'title' => 'Berhasil!',
        'text' => 'Data berhasil disimpan',
    ];

    // Return a response
    return response()->json(['data' => $data], 201);
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