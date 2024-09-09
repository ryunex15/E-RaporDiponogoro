<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Str;

class Tugas extends Model
{
    use HasFactory;

    protected $table = 'tugas';

    protected $primaryKey = 'tugas_id';

    // Pastikan primary key tidak auto-increment
    public $incrementing = false;

    // Tentukan tipe data primary key
    protected $keyType = 'string'; // Atur ke 'string' jika primary key adalah string

    protected $fillable = [
        'deadline',
        'judul',
        'lampiran_document',
        'deskripsi',
        'topik_tugas_id',
        'pembelajaran_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    public function rombonganBelajar()
    {
        return $this->belongsTo(Pembelajaran::class, 'pembelajaran_id');
    }

    public function topikTugas()
    {
        return $this->belongsTo(TopikTugas::class, 'topik_tugas_id');
    }
};

