<?php
namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Pembelajaran;
use Illuminate\Http\Request;
use App\Models\Peserta_didik;
use App\Models\Anggota_rombel;
use App\Http\Controllers\TopikTugas;

class TopikTugasController extends Controller
{
    public function index()
    {
        $pembelajaran_id = request()->pembelajaran_id;
        $pembelajaran = Pembelajaran::where("pembelajaran_id", $pembelajaran_id)->first();
        $id_mapel = $pembelajaran->mata_pelajaran_id;
        $topik = TopikTugas::where("pembelajaran_id", $pembelajaran_id)->get();

        $data = [
            "topik"=> $topik,
            "id_mapel"=> $id_mapel,
        ];
        return response()->json($data);
    }

    public function getTopikTugasByPembelajaran($id)
    {
        $topikTugas = TopikTugas::where('pembelajaran_id', $id)->get();
        return response()->json($topikTugas);
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
        'pembelajaran_id' => 'required|string',
    ]);

    // Save the data to the database
    $topik = new TopikTugas();
    $topik->judul_topik = $validated['judul_topik'];
    $topik->pembelajaran_id = $validated['pembelajaran_id'];
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

    public function destroy($id)
    {
        // Find the TopikTugas by ID
        $topikTugas = TopikTugas::find($id);
        
        if (!$topikTugas) {
            return response()->json([
                'message' => 'Topik Tugas not found'
            ], 404);
        }
        
        // Delete the TopikTugas
        $topikTugas->delete();
        
        return response()->json([
            'message' => 'Topik Tugas deleted successfully'
        ], 200);
    }

    public function getPd(){
          // Ambil pembelajaran_id dari request
    $pembelajaran_id = request()->input('pembelajaran_id');

    // Ambil data pembelajaran berdasarkan pembelajaran_id
    $pembelajaran = Pembelajaran::where('pembelajaran_id', $pembelajaran_id)->first();

    // ambil guru yang mengampu mapel
    $guru_id = $pembelajaran->guru_id;

    $guru = Guru::where('guru_id', $guru_id)->first();

    

    if (!$pembelajaran) {
        return response()->json(['message' => 'Pembelajaran not found'], 404);
    }

    // Ambil rombongan_belajar_id dari pembelajaran
    $rombongan_belajar_id = $pembelajaran->rombongan_belajar_id;

    // Ambil anggota_rombel yang memiliki rombongan_belajar_id yang sesuai
    $anggotaRombel = Anggota_rombel::where('rombongan_belajar_id', $rombongan_belajar_id)->get();

    // Ambil peserta didik_ids dari anggota_rombel
    $pesertaDidikIds = $anggotaRombel->pluck('peserta_didik_id');

    // Ambil data peserta didik berdasarkan peserta_didik_ids
    $pesertaDidik = Peserta_didik::whereIn('peserta_didik_id', $pesertaDidikIds)->orderBy('nama', 'ASC')->get();
    

    // Menggabungkan semua data dalam array
    $data = [
        'guru' => $guru,
        'pembelajaran' => $pembelajaran,
        'anggota_rombel' => $anggotaRombel,
        'peserta_didik' => $pesertaDidik,
    ];

    // Mengembalikan response JSON dengan data
    return response()->json($data, 200);
    }
}