"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Nicole Garay
   Date:   2/4/20
   
   Filename: hg_report.js
	
*/
//all of this entails putting item information from the array depending on the product chosen
var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg'/>";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>" + itemSummary;

//displays the gameReports in the article element of the html
document.getElementsByTagName("article")[0].innerHTML = gameReport;
var ratingsSum = 0;
var ratingsCount = ratings.length;
for (var i = 0; i < ratings.length; i++) {
   ratingsSum += ratings[i];
}

//calculates the rating average
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Review</h1>";
//adds the rating under the h1 Customer Review header
ratingReport += "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

//inserts 3 newest reviews into the html page
for (var i = 0; i < 3; i++) {
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";
   for (var j = 0; j < ratings[i]; j++) {   
      ratingReport += "<img src='hg_star.png'/>";
   }
   ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
   

   //puts all the information into the aside element on the html, that way they are on the right.
   document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
}