<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jawaban_siswa', function (Blueprint $table) {
            $table->char('id', 36)->primary();
            $table->string('lampiran');
            $table->string('komentar')->nullable();
            $table->char('tugas_id', 36); // Pastikan ini CHAR(36)
            $table->char('peserta_didik_id', 36); // Juga CHAR(36)
            $table->integer('nilai');
            $table->timestamps();

            // Definisikan foreign key
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
        Schema::dropIfExists('jawaban_siswa');
    }
};
