<?php

use Illuminate\Support\Facades\Route;
use Modules\NotificationManagement\Http\Controllers\NotificationManagementController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('notificationmanagements', NotificationManagementController::class)->names('notificationmanagement');
});
