<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TopikTugas extends Model
{
    use HasFactory;

    protected $table = 'topik_tugas';

    protected $fillable = ['judul_topik'];
}

