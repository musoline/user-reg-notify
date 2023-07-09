<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class CreateUserRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [

                'name' => 'required|string|min:5',
                'email' => 'required|string|email|max:255|unique:'.User::class,
                'country_id'=> 'required|exists:countries,id',
                'birthdate'=>'required|before:18 years ago',
                'password' => [[
                    "required",
                    "string",
                    "min:8",
                    "regex:(.*?[A-Z]){2,})((.*?[a-z]){2,})([@$!%*#?&])/"
                ], Rules\Password::defaults(),]
        ];
    }
}
