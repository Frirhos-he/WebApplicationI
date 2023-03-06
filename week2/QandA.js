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
function Answer(response,respondentName,score,date){
    this.response = response;
    this.respondentName = respondentName;
    this.score = score;
    this.date = date;
}

function Question(questionerName,date,listOfAnswer){
    this.questionerName = questionerName;
    this.date = date;
    this.listOfAnswer = listOfAnswer;
    this.add = function(answer) {  // answer
        this.listOfAnswer.push(answer);
    };
    this.findAll = function(person){
        let listOfAnswerSameName=[];

        for (const answer of this.listOfAnswer){
            if(answer.respondentName == $person)
            
        }
        return t
    };
}

let question  = new Question("Boo",new Date(),[]);
let answer1   = new Answer("si","Bruno",20,new Date());
let answer2   = new Answer("si","Maria",22,new Date());
let answer3   = new Answer("no","Bruno",24,new Date());
let answer4   = new Answer("si","Bruno",26,new Date());

question.add(answer1);
question.add(answer2);
question.add(answer3);
question.add(answer4);

console.log(question);



