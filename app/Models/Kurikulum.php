<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kurikulum extends Model
{
	use HasFactory;
	public $incrementing = false;
	protected $table = 'kurikulum';
	protected $primaryKey = 'kurikulum_id';
	protected $guarded = [];
}
