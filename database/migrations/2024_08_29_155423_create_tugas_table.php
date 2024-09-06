<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTugasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tugas', function (Blueprint $table) {
            $table->uuid('tugas_id')->primary();
            $table->date('deadline');
            $table->string('judul');
            $table->string('lampiran_document')->nullable();
            $table->text('deskripsi');
            $table->uuid('topik_tugas_id');
            $table->timestamps();

            // Foreign keys
            $table->foreign('topik_tugas_id')->references('topik_tugas_id')->on('topik_tugas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tugas');
    }
};

