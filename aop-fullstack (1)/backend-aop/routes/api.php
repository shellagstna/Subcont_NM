
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LaporanController;

Route::apiResource('laporan', LaporanController::class);
