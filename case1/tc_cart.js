"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Nicole Garay
   Date:   2/3/20
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0;
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

for(var i = 0; i < item.length; i++){
   cartHTML += "<tr> <td><img src='tc_item.png' alt='" + item[i] +  "' /></td>";
   cartHTML += "<td>" + itemDescriptions[i]; + "</td>";
   cartHTML += "<td>" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
}
