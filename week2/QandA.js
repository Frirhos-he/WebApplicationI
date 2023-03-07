/*
Exercise 3: Q&A
Goal: managing a simple data structure as an array of objects.

Using JavaScript objects and functional programming methods, manage objects that contain information about a question and their answers.

Each answer will contain:

Response (text)
Respondent name
Score (integer number, positive or negative)
Date
Define a constructor function Answer to create one or more answers.

A question, instead, is made of:

Question (text)
Questioner name
Date
List of answers
Define a constructor function Question to represent a question. Implement the following methods to manipulate its answers:

add(answer) // pass a fully-constructed Answer object
findAll(name) // returns all the Answers of a given person
afterDate(date) // returns an array of Answers after the given date
listByDate() // returns an array of Answers, sorted by increasing date
listByScore() // idem, by decreasing score
Create an instance of Question with at least four Answers in it.
*/

'use strict'

const dayjs = require('dayjs');

const currentDate = dayjs('2023-03-07');
//console.log(currentDate);

// in this representation the month start from 0 on M but if represented in the string 
// format it will be represented in correct way
// on string Z is UTC time zone

//notice midnight is represented so that it shows the day before on string, but current day on proper field
/*
function Answer(text ,name ,score = 0,date ){  // it is better to put score at the end because once
    this.text = text;                          // called (boo,bruno,undefined,dajs) which is worse than
    this.name = name;                          //        (boo,bruno,dajs)-> automatically will put it
    this.score = score;
    this.date = date;
}
*/

function Answer(text ,name ,date ,score = 0 ){  // it is better to put score at the end because once
    this.text = text;                          // called (boo,bruno,undefined,dajs) which is worse than
    this.name = name;                          //        (boo,bruno,dajs)-> automatically will put it
    this.score = score;
    this.date = dayjs(date);
}

function Question(text ,name , date, answers){
    this.text = text;
    this.name = name;
    this.date = dayjs(date);
    this.answers = [];
  // ADDING METHODS

    this.add = (answer) => {  // answer
        this.answers.push(answer);
    };
    this.findAll = (name) => {
        const foundAnswers = [];
        for (const a of this.answers){
            if(a.name === name){
                this.foundAnswers.push(a);
            }
        }
        return foundAnswers;
    };
}
const question  = new Question("Is Js better than Python?", 'Bruno Palermo', '2023-02-07');

const firstAnswer   = new Answer("Yes","Luca", "2023-03-02");
const secondAnswer  = new Answer("Yes","Guido","2023-03-02");
const thirdAnswer   = new Answer("No","Luigi","2023-01-12");
const quadAnswer    = new Answer("Yes","Bruno","2023-01-01");

question.add(firstAnswer);
question.add(secondAnswer);
question.add(thirdAnswer);
question.add(quadAnswer);

console.log(question);
console.log(firstAnswer);

