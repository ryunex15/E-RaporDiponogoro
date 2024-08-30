<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NilaiTugas extends Model
{
    use HasFactory;

    protected $table = 'nilai_tugas';

    protected $fillable = [
        'id_tugas',
        'peserta_didik_id',
        'nilai',
    ];

    public function tugas()
    {
        return $this->belongsTo(Tugas::class, 'id_tugas');
    }

    public function pesertaDidik()
    {
        return $this->belongsTo(Peserta_didik::class, 'peserta_didik_id');
    }
};

