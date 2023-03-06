/*# Exercise 2: My Users' List
_Goal: basic handling of JavaScript strings_

Develop a small JS program to manage the list of users in a Q&A website.

- Define the names of users as a comma-separated list.
 - For instance: "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti, Eros Fani"
- Parse the string and create an array containing one name per array position.
 - Beware: no extra spaces should be present.
- Create a second array by computing the acronyms of the people as the initial letters of the name. Acronyms should be in all-capital letters.
 - For example, Luigi De Russis -> LDR.
- Print the resulting list of acronyms and the full names.
 - Extra: in alphabetical order of acronym. */

let user = ["Luigi De Russis", "Luca Mannella", "Fulvio Corno", "Juan Pablo Saenz Moreno", "Enrico Masala", "Antonio Servetti", "Eros Fani"];
let acronyms = [];
let bufferValue = [];
let stringValue;

for ( const s of user ){

    for (const l of s ){
        if( l != ' ' && l === l.toUpperCase()){
            bufferValue.push(l);
        }
    }
    stringValue = bufferValue.join("");
    acronyms.push(stringValue);
    bufferValue=[];
}

acronyms.sort();
console.log(acronyms, user);


