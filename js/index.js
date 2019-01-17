$(document).ready(function() {

var colors=['https://cdnb.artstation.com/p/assets/images/images/003/733/761/large/mark-kirkpatrick-mk-landscape-01.jpg?1476919494', 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/b831199b42c9777cc8e6976e54c889a0/7d5d01ea862d26d0d81d43c1_rw_1920.jpg?h=ec5324965156ecbae9a2ebbb100e4d37', 'https://cdnb.artstation.com/p/assets/images/images/005/635/135/large/mark-kirkpatrick-041217-007.jpg?1492618858', 'https://hdqwalls.com/download/polygon-lake-sunset-minimalist-hl-1920x1080.jpg', 'http://i.imgur.com/kzXFZRi.jpg', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/de6f1a21337573.562ff7d07e305.png', 'https://cdna.artstation.com/p/assets/images/images/003/733/762/large/mark-kirkpatrick-mk-landscape-02.jpg?1476919283', 'https://cdna.artstation.com/p/assets/images/images/003/733/844/large/mark-kirkpatrick-mk-landscape-08.jpg?1476919911', 'https://cfye.com/content/uploads/2015/08/Mark_Kirkpatrick_002.jpg', 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-689686.jpg', 'https://i.imgur.com/toUziRj.jpg', 'https://cdnb.artstation.com/p/assets/images/images/005/635/137/large/mark-kirkpatrick-041717-009.jpg?1492618862', 'https://resi.ze-robot.com/dl/po/polygon-worlds-recolor-mark-kirkpatrick-4-3840%C3%972160.jpg'];

getNewColor();
getNewQuote();

  $("#getNewQuote").click(function() {
    getNewQuote();
    getNewColor();
  });
 

  function getNewColor() {
    var i = Math.floor(Math.random()*colors.length);
    $('#container').attr('style', 'background-image: url( "' + colors[i] + '")');
  };


function getNewQuote(){
  $.ajax({
       type: "POST",
       url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
       dataType: "json",
       success: function (response) {
         $(".quote").html(response[0].quote); 
         $(".author").html(response[0].author);
         $('#btn-twitter').attr('href', 'https://twitter.com/intent/tweet/?text=' + encodeURIComponent('"' + response[0].quote + '" ' + response[0].author));
       },
       beforeSend: setHeader
  });
    
  function setHeader(xhr) {
    xhr.setRequestHeader("X-Mashape-Key", "b8ZN6Jw7qimshOT3Lhq0QXofs4N9p1FMKJ4jsnub68Y4F6TSy7");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
  }
};  
  
});
