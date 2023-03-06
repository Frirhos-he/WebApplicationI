/* Exercise 1: Better Scores
_Goal: basic handling of JavaScript arrays_

Develop a small JavaScript program to manage the scores given to your user in a question-and-answer website (e.g., StackOverflow). Scores are integer numbers, and they may be negative. You should:
 
- Define an array with all the scores you received in chronological order. For the moment:
  - Embed the scores directly in the source code.
  - Ignore the question, answer, and date that generated the score.
- Duplicate the array, but:
  - Eliminate all negative scores (call `NN` the number of negative scores that are deleted).
  - Eliminate the two lowest-ranking scores.
  - Add `NN+2` new scores, at the end of the array, with a value equal to the (rounded) average of the existing scores.
- Print both arrays, comparing the scores before and after the "improvement," and showing the averages in both cases.
*/
'use strict';

const scores = [20, -5, -1, 100, -3, 30, 50];
const betterScores = [];
let NN = 0;
let totNumberValues;
let average = 0;


for (const s of scores){
    if( s > 0 ) {
        betterScores.push(s);
    }
}

NN = scores.length - betterScores.length;

betterScores.sort((a,b)=>a-b);
betterScores.shift();
betterScores.shift();

// to perform average
totNumberValues = betterScores.length;
for (const s of betterScores){
    average+=s;
}
average/= totNumberValues;
Math.round(average);

betterScores.push(average);
betterScores.push(average);
console.log(scores);
console.log(betterScores);