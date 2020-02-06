"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Nicole Garay
   Date:   2/5/20
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// this report variable stores the raceTitle array within the h1 in the HTML
var reportHTML = "<h1>" + raceTitle + "</h1>";

//loops through the content of the race array
for (var i = 0; i < race.length; i++) {
   //this variable stores the amount of votes for each race in it, starting at 0
   var totalVotes = 0;
   //calculates sum of votes in its array
   votes[i].forEach(calcSum);
   reportHTML += "<table>";
   //stores the index of the race array within the caption element of the HTML
   reportHTML += "<caption>" + race[i] + "</caption>";
   reportHTML += "<tr><th>Candidate</th><th>Votes</th></tr>";
   //calls the candidateRows function
   reportHTML += candidateRows(i, totalVotes);
   reportHTML += "</table>";
}
//displays all of reportHTML into the section element within the HTML
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

//this function is going to write individual table rows for each candidate
function candidateRows(raceNum, totalVotes) {
   //this will contain the HTML code for the table row
   var rowHTML = "";
   //loop goes from 0 to 2 in steps of 1 unit
   for (var j = 0; j <= 2; j++) {
      var candidateName = candidate[raceNum][j]; //multidimensional arrays
      var candidateParty = party[raceNum][j];
      var candidateVotes = votes[raceNum][j];
      //calls the calcPercent function which calcs the percent votes / votes sum
      var candidatePercent = calcPercent(candidateVotes, totalVotes);
      rowHTML += "<tr>";
      rowHTML += "<td>" + candidateName + "(" + candidateParty + ")" + "</td>";
      //toLocaleString displays votes with thousands separators, toFixed sets percents to 1 decimal place
      rowHTML += "<td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")" + "</td>";
      for (var k = 0; k < candidatePercent; k++) {
         rowHTML += createBar(candidateParty); 
      }
      rowHTML += "</tr>";
   }
   return rowHTML;
}


//------END OF PERSONAL CODE------





//------CALLBACK FUNCTIONS FROM PROJECT------



/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100 * value / sum);
}

function createBar(partyType) {
   var barHTML = "";
   switch(partyType){
   case "D":
      barHTML += "<td class='dem'></td>";
      break;
   case "R": 
      barHTML += "<td class='rep'></td>";
      break;
   case "I": 
      barHTML += "<td class='ind'></td>";
      break;
   }
   return barHTML;
}