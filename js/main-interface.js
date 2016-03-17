$(document).ready(function(){
  $("#dino-ipsum-form").submit(function(event){
    event.preventDefault();
    var paragraphNumber = $("#paragraphNumber").val();
    var wordCount = $("#wordCount").val();
    $(".dino-text").text("");

    $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphNumber + "&words=" + wordCount).then(function(response) {
      $(".dino-text").append(response);
    });
  });
  $("#dino-reset").click(function(){
    $(".dino-text").text("");
  });
});
