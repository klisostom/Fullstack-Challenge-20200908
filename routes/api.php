<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', [ProductsController::class, 'home']);
Route::post('auth/login', [AuthController::class, 'login']);

Route::group([
    'namespace' => 'API',
], function () {
    Route::group([
        // 'middleware' => ['apiJwt'],
    ], function () {
        Route::post('/products', [ProductsController::class, 'store']);
        Route::put('/products/{productId}', [ProductsController::class, 'update']);
        Route::delete('/products/{productId}', [ProductsController::class, 'destroy']);
        Route::get('/products/{productId}', [ProductsController::class, 'show']);
        Route::get('/products', [ProductsController::class, 'index']);

        Route::group([
            'prefix' => 'auth',
        ], function () {
            Route::post('logout', [AuthController::class, 'logout']);
            Route::post('refresh', [AuthController::class, 'refresh']);
            Route::post('me', [AuthController::class, 'me']);
            Route::post('reset', [AuthController::class, 'reset']);
        });
    });
});
