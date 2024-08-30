<?php

namespace App\Http\Controllers;

use App\Models\KomentarTugas;
use Illuminate\Http\Request;

class KomentarTugasController extends Controller
{
    public function index()
    {
        // $komentarTugas = KomentarTugas::all();
        // return response()->json($komentarTugas);
    }

    public function store(Request $request)
    {
        // $validatedData = $request->validate([
        //     'id_tugas' => 'required|exists:tugas,id',
        //     'komentar' => 'required|string',
        //     'peserta_didik_id' => 'required|exists:peserta_didik,id',
        //     'guru_id' => 'required|exists:guru,id',
        // ]);

        // $komentarTugas = KomentarTugas::create($validatedData);

        // return response()->json($komentarTugas, 201);
    }

    public function show($id)
    {
        // $komentarTugas = KomentarTugas::findOrFail($id);
        // return response()->json($komentarTugas);
    }

    public function update(Request $request, $id)
    {
        // $validatedData = $request->validate([
        //     'id_tugas' => 'sometimes|exists:tugas,id',
        //     'komentar' => 'sometimes|string',
        //     'peserta_didik_id' => 'sometimes|exists:peserta_didik,id',
        //     'guru_id' => 'sometimes|exists:guru,id',
        // ]);

        // $komentarTugas = KomentarTugas::findOrFail($id);
        // $komentarTugas->update($validatedData);

        // return response()->json($komentarTugas);
    }

    public function destroy($id)
    {
        // $komentarTugas = KomentarTugas::findOrFail($id);
        // $komentarTugas->delete();

        // return response()->json(null, 204);
    }
};
