<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNilaiTugasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nilai_tugas', function (Blueprint $table) {
            $table->uuid('nilai_tugas_id')->primary();
            $table->uuid('tugas_id');
            $table->uuid('peserta_didik_id');
            $table->integer('nilai');
            $table->timestamps();

            // Foreign keys
            $table->foreign('tugas_id')->references('tugas_id')->on('tugas')->onDelete('cascade');
            $table->foreign('peserta_didik_id')->references('peserta_didik_id')->on('peserta_didik')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nilai_tugas');
    }
};
