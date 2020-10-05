<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateProductRequest;
use App\Repositories\Products\ProductRepository;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    protected $repository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->repository = $productRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $message = $this->repository->all();

        return response()->json($message, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProductRequest $request)
    {
        $message = $this->repository->create($request->all());

        return ($message) ? response()->json($message, 201) : response()->json('Internal Server Error.', 500);
    }

    /**
     * Display the specified resource.
     *
     * @param mixed $productId
     *
     * @return \Illuminate\Http\Response
     */
    public function show($productId)
    {
        $message = $this->repository->show($productId);

        return ($message) ? response()->json($message, 200) : response()->json('Produto não existe.', 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param mixed $productId
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $productId)
    {
        $message = $this->repository->update($request->all(), $productId);

        return ($message) ? response()->json('success', 200) : response()->json('Produto não existe.', 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param mixed $productId
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($productId)
    {
        $message = $this->repository->delete($productId);

        return ($message) ? response('', 204) : response()->json('Produto não existe.', 404);
    }

    /** Home @return void*/
    public function home()
    {
        $message = 'REST WebAPI Challenge 20200908 Running';

        return response()->json($message, 200);
    }
}
