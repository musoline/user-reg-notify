<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'birthdate',
        'country_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'country_name',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }


    public function scopeVeryfied($query){
        return $query->whereNotNull("email_verified_at");
    }

    public function scopeRecent($query){
        $formatted_date = Carbon::now()->subMinutes(5)->toDateTimeString();
        return $query->where("created_at",">=",$formatted_date);
    }


    public function getCountryNameAttribute(): string | null
    {
        return Country::firstWhere('id', $this->country_id)->name;
    }
    public function sendEmailVerificationNotification()
    {
        $this->notify(new \App\Notifications\VerifyEmailQueued());
    }
}
