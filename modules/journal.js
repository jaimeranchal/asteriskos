/*\
title: $:/plugins/jaimeranchal/asteriskos/journal.js
type: application/javascript
module-type: startup

Startup 

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

class Journal {
  items = [];
  render(parent) { } // renders widget HTML with buttons
  onEdit() {} // Edit button functionality
  onAddItem() {} // Add item functionality
  save() {} // save journal items to a db/JSON file (maybe not needed)
  read() {} // read previously stored data from db/JSON file
}

})();
	