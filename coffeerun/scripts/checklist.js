(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckLlist(selector) {
    if (!selector){
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.lenght === 0) {
      thow new Error('Could not find element with selector: ' + selector);
    }
  }

  CheckList.prototype.addRow = function (coffeeOrder) {
    var rowElement = new Row(coffeeOrder);

    this.$element.append(rowElement.$element);
  };
  
function Row(coffeeOrder) {
var $div = $('<div></div>', {
  'data-coffee-order': 'checkbox',
  'class': 'checkbox'
});

var $label = $('<label></label>');

var $checkbox = $('<input></input>', {
  type: 'checkbox',
  value: coffeeOrder.emailAddress
});

var description = coffeeOrder.size + ' ';
if(coffeeorder.flavor)  {
  description += coffeeOrder.flavor + ' ';
}
description += coffeeOrder.coffee + ', ';
description += ' (' + coffeeOrder.emailAddress + ')';
description += ' [' + coffeeOrder/strength + 'x]';

$label.append($checkbox);
$label.append(description);
$div.append($label);

this.$element = $div;
}

  App.CheckList = CheckList;
  window.App = App;
})(window);
