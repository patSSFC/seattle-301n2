(function(module) {
  var aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    // console.log("inside ABOUT");
    // $('.main-nav').on('click', '.tab', function(e) {
    //   $('.tab-content').hide();
    //   $('#' + $(this).data('content')).fadeIn();
    // });
    $('#articles').hide();
    $('#about').fadeIn();

    // $('.main-nav .tab:nth-child(2)').click();
  };

  module.aboutController = aboutController;
})(window);
