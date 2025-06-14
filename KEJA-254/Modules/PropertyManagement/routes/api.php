<?php

use Illuminate\Support\Facades\Route;
use Modules\PropertyManagement\Http\Controllers\PropertyManagementController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('propertymanagements', PropertyManagementController::class)->names('propertymanagement');
});
