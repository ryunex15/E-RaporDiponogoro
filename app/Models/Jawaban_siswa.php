<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Jawaban_siswa extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    // Pastikan primary key tidak auto-increment
    public $incrementing = false;

    // Tentukan tipe data primary key
    protected $keyType = 'string'; // Atur ke 'string' jika primary key adalah string

    // Menentukan tabel yang digunakan jika tidak sesuai dengan nama model
    protected $table = 'jawaban_siswa';

    // Menentukan kolom yang dapat diisi secara massal
    protected $fillable = ['lampiran', 'komentar', 'tugas_id', 'peserta_didik_id', 'nilai'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    // Mendefinisikan relasi dengan model Tugas
    public function tugas()
    {
        return $this->belongsTo(Tugas::class, 'tugas_id', 'tugas_id');
    }

    // Mendefinisikan relasi dengan model PesertaDidik
    public function pesertaDidik()
    {
        return $this->belongsTo(Peserta_didik::class, 'peserta_didik_id', 'peserta_didik_id');
    }
}
