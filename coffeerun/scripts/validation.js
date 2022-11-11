(function (window) {
  'use strict';
  var App = window.App || {};
  var validation = {
    isCompanyEmail: function (email){
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.validation = validation;
  window.App = App;
}) (window);
