$("button").on("click", function() {
  var randomNumber = Math.floor(Math.random() * 5 + 1);
  
  switch (randomNumber) {
    case 1:
      $(".q1").html("“I'm selfish, impatient and a little insecure.<br> I make mistakes, I am out of control and at times hard to handle. <br>But if you can't handle me at my worst, <br>then you sure as hell don't deserve me at my best.  ");
      $(".author").html("<em>- Marilyn Monroe</em>");
      break;
    case 2:
      $(".q1").html("“Two things are infinite: the universe and human stupidity;<br> and I'm not sure about the universe.");
      $(".author").html("<em>― Albert Einstein</em>");
      break;
    case 3:
      $(".q1").html("“Be who you are and say what you feel,<br> because those who mind don't matter, and those who matter don't mind.”");
      $(".author").html("<em>― Bernard M. Baruch</em>");

      break;
    case 4:
      $(".q1").html("“You've gotta dance like there's nobody watching,<br>Love like you'll never be hurt,<br>Sing like there's nobody listening,<br>And love like it's heaven on earth.”");
      $(".author").html("<em>― William W. Purkey</em>");

      break;
    case 5:
      $(".q1").html("“Be the change that you wish to see in the world.”");
      $(".author").html("<em>― Mahatma Gandhi</em");
      break;








    default:

  }
});
