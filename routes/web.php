<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TopPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AuthenticatedSessionController::class, 'create']);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [TopPageController::class, 'index'])->name('dashboard');
    Route::get('/index', [TopPageController::class, 'index'])->name('index');
    Route::post('/post', [TopPageController::class, 'post'])->name('post');
    Route::post('/delete/{household}', [TopPageController::class, 'delete'])->name('delete');

    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('destroy');
    });
});

require __DIR__ . '/auth.php';
