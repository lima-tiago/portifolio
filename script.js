AOS.init({
  duration: 1200,
})

// Endpoint do Instagram
var accessToken = "7829094679.1677ed0.9bd7e34b3eed4e27a00bbb346a5a2dcb";
var limit = 1;
function insta() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/users/self/media/recent/?access_token="+ accessToken +"",
    success: function(data) {
      $("#user").append('<img src="'+data.data[0].user.profile_picture+'" alt="">'+'<a href="'+data.data[0].link+'">'+data.data[0].user.username+'</a>')
      $("#post").append('<li class="insta"><a href="'+ data.data[0].link+'" target="_blank"><img src="'+data.data[0].images.standard_resolution.url+'"></li></a>')
    }
  });
}
insta();
