<?php

use Illuminate\Support\Facades\Route;
use Modules\PropertyManagement\Http\Controllers\PropertyManagementController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('propertymanagements', PropertyManagementController::class)->names('propertymanagement');
});
