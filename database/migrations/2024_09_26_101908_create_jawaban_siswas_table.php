<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jawaban_siswa', function (Blueprint $table) {
            $table->id();
            $table->string('lampiran');
            $table->string('komentar')->nullable();
            $table->uuid('tugas_id');
            $table->uuid('peserta_didik_id');
            $table->int('nilai');
            $table->timestamps();

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
        Schema::dropIfExists('jawaban_siswas');
    }
};
