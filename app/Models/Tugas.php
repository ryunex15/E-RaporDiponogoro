<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $table = 'tugas';

    protected $fillable = [
        'deadline',
        'judul',
        'lampiran_document',
        'pembelajaran_id',
        'deskripsi',
        'id_topik_tugas',
    ];

    public function rombonganBelajar()
    {
        return $this->belongsTo(Pembelajaran::class, 'pembelajaran_id');
    }

    public function topikTugas()
    {
        return $this->belongsTo(TopikTugas::class, 'id_topik_tugas');
    }
};

