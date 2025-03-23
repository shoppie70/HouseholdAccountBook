<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * マイグレーションの実行。
     *
     * households テーブルは家計簿の取引情報を保存します。
     * 各データはカテゴリや支払い方法と紐付けられ、日付・金額・メモなどのフィールドを含みます。
     */
    public function up(): void
    {
        Schema::create('households', function (Blueprint $table) {
            $table->id(); // 主キー
            $table->date('date'); // 取引の日付
            $table->unsignedBigInteger('category_id'); // カテゴリID（外部キー）
            $table->unsignedBigInteger('payment_type_id'); // 支払い方法ID（外部キー）
            $table->integer('amount'); // 取引の金額
            $table->string('memo')->nullable(); // メモまたは説明（任意）
            $table->timestamps(); // 作成日時と更新日時

            // 外部キー制約
            $table->foreign('category_id')->references('id')->on('household_categories')->onDelete('cascade');
            $table->foreign('payment_type_id')->references('id')->on('payment_types')->onDelete('cascade');
        });
    }

    /**
     * マイグレーションのロールバック。
     *
     * households テーブルを削除します。
     */
    public function down(): void
    {
        Schema::dropIfExists('households');
    }
};
