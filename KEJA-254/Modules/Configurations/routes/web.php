<?php

use Illuminate\Support\Facades\Route;
use Modules\Configurations\Http\Controllers\ConfigurationsController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('configurations', ConfigurationsController::class)->names('configurations');
});
