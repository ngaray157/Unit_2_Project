"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Nicole Garay
   Date:   2/5/20
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

//this calculates the total amount of the donations
var donationTotal = 0;
//this calculates the donation total
donors.forEach(calcSum);

var summaryTable = "<table>";
summaryTable += "<tr><th>Donors</th><td>" + donors.length + "</td></tr>";
//donationTotal.LocaleString displays the amount of donations with a thousands separator in the report
summaryTable += "<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>";

//this displays the summaryTable variable iinside the div with the id "donationSummary" 
document.getElementById("donationSummary").innerHTML = summaryTable;

//the report will show a list of donors who contributed $1000 or more
var majorDonors = donors.filter(findMajorDonors);
//this sorts the major donors list in to descending order
majorDonors += donors.sort(donorSortDescending);

//this will store the HTML code for the table of major donors 
var donorTable = "<table>";
//this creates the table within the donorTable variable
donorTable += "<caption>Major Donors</caption>";
donorTable += "<tr>";
donorTable += "<th>Donation</th><th>Donor ID</th>";
donorTable += "<th>Date</th><th>Name</th><th>Address</th>";
donorTable += "<th>Phone</th><th>E-mail</th>";
//creates HTML code for each donor row
majorDonors += donors.forEach(writeDonorRow);
donorTable += "</table>";
//displays everything created in the donorTable variable in the div with id "donorTable"
document.getElementById("donorTable").innerHTML = donorTable;


//------END OF PROJECT CODE ABOVE------



//------CALLBACK FUNCTIONS DOWN BELOW------

function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

