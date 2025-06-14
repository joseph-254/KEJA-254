<?php

use Illuminate\Support\Facades\Route;
use Modules\DashboardManagement\Http\Controllers\DashboardManagementController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('dashboardmanagements', DashboardManagementController::class)->names('dashboardmanagement');
});
