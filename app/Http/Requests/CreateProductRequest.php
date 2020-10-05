<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'bail|required|string|max:190',
            'type' => 'bail|required|string|max:190',
            'description' => 'bail|required|string|max:190',
            'filename' => 'bail|required|string|max:190',
            'height' => 'bail|required|integer',
            'width' => 'bail|required|integer',
            'price' => 'bail|required|between:0,99.99',
            'rating' => 'bail|required|integer',
        ];
    }
}
