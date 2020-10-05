<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        /* Porque a versão do mysql gratuita, fornecida pelo Heroku, é antiga.
         *  E deu erro na hora de fazer o migrate.
         */
        Schema::defaultStringLength(191);
    }
}
