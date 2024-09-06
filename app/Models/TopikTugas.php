<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TopikTugas extends Model
{
    use HasFactory;
    protected $table = 'topik_tugas';

    // Nama kolom primary key
    protected $primaryKey = 'topik_tugas_id'; // Ganti dengan nama kolom primary key Anda

    // Pastikan primary key tidak auto-increment
    public $incrementing = false;

    // Tentukan tipe data primary key
    protected $keyType = 'string'; // Atur ke 'string' jika primary key adalah string


    // Mengatur model untuk menggunakan UUID
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    protected $fillable = ['judul_topik'];
}