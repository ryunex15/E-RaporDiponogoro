<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KomentarTugas extends Model
{
    use HasFactory;

    protected $table = 'komentar_tugas';

    protected $fillable = [
        'id_tugas',
        'komentar',
        'peserta_didik_id',
        'guru_id',
    ];

    public function tugas()
    {
        return $this->belongsTo(Tugas::class, 'id_tugas');
    }

    public function pesertaDidik()
    {
        return $this->belongsTo(Peserta_didik::class, 'peserta_didik_id');
    }

    public function guru()
    {
        return $this->belongsTo(Guru::class, 'guru_id');
    }
};

