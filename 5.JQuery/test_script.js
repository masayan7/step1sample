//変数の宣言
var messages = ["おはよう", "こんにちは", "こんばんは", "おやすみ"];
//処理の繰り返し，
  $.each(messages, function(index, value) {
  $("body").append("<p>" + value + "</p>");
});

$("p").each(function(index, value) {
  console.log( $(value).text() );
});