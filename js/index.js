$(document).ready(function() {

var colors=['https://cdnb.artstation.com/p/assets/images/images/003/733/761/large/mark-kirkpatrick-mk-landscape-01.jpg?1476919494', 'https://s3.pixers.pics/pixers/700/FO/74/80/02/86/700_FO74800286_6cb0c0a2a88b7979c9eb53ff69cb0ed9.jpg', 'https://wallup.net/wp-content/uploads/2018/03/19/572952-Mark_Kirkpatrick-landscape-illustration-mountains-minimalism-low_poly-748x421.jpg', 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/b831199b42c9777cc8e6976e54c889a0/7d5d01ea862d26d0d81d43c1_rw_1920.jpg?h=ec5324965156ecbae9a2ebbb100e4d37', 'https://cdnb.artstation.com/p/assets/images/images/005/635/135/large/mark-kirkpatrick-041217-007.jpg?1492618858', 'https://hdqwalls.com/download/polygon-lake-sunset-minimalist-hl-1920x1080.jpg', 'http://i.imgur.com/kzXFZRi.jpg', 'http://pandapanther.com/wp-content/uploads/2011/01/14.jpg', 'https://i.ytimg.com/vi/de7I3n2KVn4/maxresdefault.jpg', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/de6f1a21337573.562ff7d07e305.png'];

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