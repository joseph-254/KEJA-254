<?php

use Illuminate\Support\Facades\Route;
use Modules\DashboardManagement\Http\Controllers\DashboardManagementController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('dashboardmanagements', DashboardManagementController::class)->names('dashboardmanagement');
});
