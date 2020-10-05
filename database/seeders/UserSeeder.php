<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\User::insert([
            'name' => 'teste',
            'email' => 'teste@gmail.com',
            'password' => Hash::make('senha'),
        ]);
    }
}
