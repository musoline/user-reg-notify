<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [\App\Http\Controllers\Auth\RegisteredUserController::class,"Create"]);


Route::get('/users',[\App\Http\Controllers\UsersController::class,"index"])->middleware(["auth","verified"])->name("users");



require __DIR__ . '/auth.php';
