"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Prevent the array from being modified.
// Use the generic interface type `ReadonlyArray`: ReadonlyArray<type>
// This will cause a type error. Remove the code that now has a type error.
var languages = ["Mongolian", "French", "Basque", "Thai"];
// languages[2] = "Hausa";   //Commented out, no longer does anything
console.log(languages);
// Prevent the array from being modified.
// Use the readonly modifier and the array literal type syntax: readonly type[]
// This will cause a type error. Remove the code that now has a type error.
var currencies = ["NZD", "THB", "NGN", "EUR", "COP", "INR"];
// currencies.reverse();    //Commented out, no longer does anything
console.log(currencies);
