<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TopPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [TopPageController::class, 'index'])->name('index');
Route::post('/post', [TopPageController::class, 'post'])->name('post');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
