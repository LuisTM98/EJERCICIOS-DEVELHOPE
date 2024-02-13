/**
 * START: Follow the instructions below.
 */

// Make this `LanguagesType` interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the `languages` property should use a type variable.

interface Country<Type> {
    name: Type;
    languages: Type[];  //With this approach, the type of languages is an array of whatever type is specified on generic type.
}

const languagesObj1: Country<string> = {
    name: "New Zealand",
    languages: ["English", "Māori"]             // A single var declared as two string values? Changed to array of strings
};

console.log(languagesObj1.languages.join(", "));

const languagesObj2: Country<string> = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],       // Same as above
};

console.log(languagesObj2.languages.join(", "));    

// ----

export {};
