$(document).ready(function(){
  $('.slider').slider({full_width: true});

  $(".button-collapse").sideNav();

  $('#signup').on('submit', function (event) {
    var zip = $("#zipcode").val();
    if (zip.length != 0){
        if (zip.length != 5){
            alert("Zipcode should be only five digits");
            return false;
        }
        if (isNaN(zip)){
            alert("Zipcode should consist of only numbers");
            return false;
        }
    }
  });
});