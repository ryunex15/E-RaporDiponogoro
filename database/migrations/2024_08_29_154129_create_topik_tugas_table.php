<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTopikTugasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('topik_tugas', function (Blueprint $table) {
            $table->uuid('topik_tugas_id')->primary();
            $table->string('judul_topik');
            $table->uuid('pembelajaran_id');
            $table->timestamps();

            $table->foreign('pembelajaran_id')->references('pembelajaran_id')->on('pembelajaran')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('topik_tugas');
    }
};
