<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKomentarTugasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('komentar_tugas', function (Blueprint $table) {
            $table->uuid('komentar_tugas_id')->primary();
            $table->uuid('tugas_id');
            $table->text('komentar');
            $table->uuid('peserta_didik_id');
            $table->uuid('guru_id');
            $table->timestamps();

            // Foreign keys
            $table->foreign('tugas_id')->references('tugas_id')->on('tugas')->onDelete('cascade');
            $table->foreign('peserta_didik_id')->references('peserta_didik_id')->on('peserta_didik')->onDelete('cascade');
            $table->foreign('guru_id')->references('guru_id')->on('guru')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('komentar_tugas');
    }
};
