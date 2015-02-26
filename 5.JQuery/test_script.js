var messages = ["おはよう", "こんにちは", "こんばんは", "おやすみ"];
$.each(messages, function(index, value) {
  $("body").append("<p>" + value + "</p>");
});

$("p").each(function(index, value) {
  console.log( $(value).text() );
});