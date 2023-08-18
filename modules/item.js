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

class Item {
  title = "";
  startTime = 0;
  stopTime = 0;
  duration = 0;
  render(parent) { } // renders widget HTML with buttons
  onEdit() {} // Edit button functionality
  onDelete() {} // Delete item functionality
  onStartTimer() {} // start time count for this item
  onPauseTimer() {} // pause time count for this item
  onStopTimer() {} // stop time count for this item
}

})();
	