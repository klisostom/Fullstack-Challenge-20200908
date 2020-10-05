<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $lista = file_get_contents('.\storage\app\public\jsons\products.json');
        collect(json_decode($lista, true))->each(function ($item) {
            \App\Models\products::create([
                'title' => $item['title'],
                'type' => $item['type'],
                'description' => $item['description'],
                'filename' => $item['filename'],
                'height' => $item['height'],
                'width' => $item['width'],
                'price' => $item['price'],
                'rating' => $item['rating'],
            ]);
        });
    }
}
