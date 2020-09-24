/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$(document).ready(function(){
  $(".moj-cookie-settings--success").hide();

  /// Fake hiding the cookie banner
  $(".cookie-banner__button-accept button").click(function(){
    $(".app-cookie-banner").hide();
  });

  $("#save-cookie-prefs").click(function(){
    $(window).scrollTop(0);
    $(".app-cookie-banner").hide();
    $(".moj-cookie-settings--success").show();
  });

})

$(document).ready(function(){

  $('.miller-columns li a').on('click', function () {
      $(this).parent().toggleClass('expanded').siblings().removeClass('expanded');
      // alert ('testing');
      return false;
  });

  $(".miller-columns li:has(ul)").addClass("has-children");

})

$(document).ready(function(){
    $("a.govuk-button").click(function(){
        var radioValue = $("[type='radio']:checked").val();

        /// Is it the local force?

        if(radioValue == "local-force"){
          window.location.href = "/forces-mockups/v1/offender/";
        }
        if(radioValue == "other-england-force"){
          window.location.href = "/forces-mockups/v1/england/forces/index";
        }
        if(radioValue == "scotland-force"){
          window.location.href = "/forces-mockups/v1/scotland/forces/";
        }
        if(radioValue == "wales-force"){
          window.location.href = "/forces-mockups/v1/wales/forces/";
        }
        if(radioValue == "british-transport-police"){
          window.location.href = "/forces-mockups/v1/offender/";
        }

        /// Pick English area

        if(radioValue == "crime-police-north-west"){
          window.location.href = "/forces-mockups/v1/england/forces/north-west";
        }
        if(radioValue == "crime-police-north-east"){
          window.location.href = "/forces-mockups/v1/england/forces/north-east";
        }
        if(radioValue == "crime-police-east-midlands"){
          window.location.href = "/forces-mockups/v1/england/forces/east-midlands";
        }
        if(radioValue == "crime-police-eastern"){
          window.location.href = "/forces-mockups/v1/england/forces/eastern";
        }
        if(radioValue == "crime-police-london"){
          window.location.href = "/forces-mockups/v1/england/forces/london";
        }
        if(radioValue == "crime-police-south-east"){
          window.location.href = "/forces-mockups/v1/england/forces/south-east";
        }
        if(radioValue == "crime-police-south-west"){
          window.location.href = "/forces-mockups/v1/england/forces/south-west";
        }
        if(radioValue == "crime-police-west-midlands"){
          window.location.href = "/forces-mockups/v1/england/forces/west-midlands";
        }
        if(radioValue == "crime-police-dont-know"){
          window.location.href = "/forces-mockups/v1/england/forces/all";
        }
    });
});
