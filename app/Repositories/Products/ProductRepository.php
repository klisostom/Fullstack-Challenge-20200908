<?php

namespace App\Repositories\Products;

use App\Models\Products;
use App\Repositories\BaseRepository;

class ProductRepository extends BaseRepository
{
    // Constructor to bind model to repo
    public function __construct(Products $products)
    {
        parent::__construct($products);
    }

    public function all()
    {
        return parent::all();
    }

    public function show(int $productId)
    {
        $productExist = \App\Models\Products::find($productId);

        return ($productExist) ? parent::show($productId) : false;
    }

    public function delete(int $productId)
    {
        $productExist = \App\Models\Products::find($productId);

        return ($productExist) ? parent::delete($productId) : false;
    }

    public function create(array $dados)
    {
        return parent::create($dados);
    }

    public function update(array $data, int $id)
    {
        $productExist = \App\Models\Products::find($id);

        return ($productExist) ? parent::update($data, $id) : false;
    }
}
