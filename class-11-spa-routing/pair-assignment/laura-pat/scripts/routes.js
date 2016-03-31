// TODO: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page.base('/');
page('/', articles);
page('/about', aboutController.index());

function articles() {
  console.log("inside articles");
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};


// TODO: What function do you call to activate page.js? Fire it off now, to execute
page();
