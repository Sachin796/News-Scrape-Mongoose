$("#scrapeButton").click(function() {
  // $( "#results tbody" ).empty();
  event.preventDefault();
  console.log("Clicked Scrape Button");
  $.getJSON("/api/scrape", function(data) {
    // Call our function to generate a table body
    console.log(data);
    location.reload();
  });
});
