<?php

use Illuminate\Support\Facades\Route;
use Modules\Configurations\Http\Controllers\ConfigurationsController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('configurations', ConfigurationsController::class)->names('configurations');
});
