<?php

use Illuminate\Support\Facades\Route;
use Modules\PaymentManagement\Http\Controllers\PaymentManagementController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('paymentmanagements', PaymentManagementController::class)->names('paymentmanagement');
});
