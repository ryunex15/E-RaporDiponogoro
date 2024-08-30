<?php

namespace App\Http\Controllers;

use App\Models\NilaiTugas;
use Illuminate\Http\Request;

class NilaiTugasController extends Controller
{
    public function index()
    {
        // $nilaiTugas = NilaiTugas::all();
        // return response()->json($nilaiTugas);
    }

    public function store(Request $request)
    {
        // $validatedData = $request->validate([
        //     'id_tugas' => 'required|exists:tugas,id',
        //     'peserta_didik_id' => 'required|exists:peserta_didik,id',
        //     'nilai' => 'required|integer',
        // ]);

        // $nilaiTugas = NilaiTugas::create($validatedData);

        // return response()->json($nilaiTugas, 201);
    }

    public function show($id)
    {
        // $nilaiTugas = NilaiTugas::findOrFail($id);
        // return response()->json($nilaiTugas);
    }

    public function update(Request $request, $id)
    {
        // $validatedData = $request->validate([
        //     'id_tugas' => 'sometimes|exists:tugas,id',
        //     'peserta_didik_id' => 'sometimes|exists:peserta_didik,id',
        //     'nilai' => 'sometimes|integer',
        // ]);

        // $nilaiTugas = NilaiTugas::findOrFail($id);
        // $nilaiTugas->update($validatedData);

        // return response()->json($nilaiTugas);
    }

    public function destroy($id)
    {
        // $nilaiTugas = NilaiTugas::findOrFail($id);
        // $nilaiTugas->delete();

        // return response()->json(null, 204);
    }
}

