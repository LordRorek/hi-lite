document.documentElement.setAttribute("lang", "en");
document.documentElement.removeAttribute("class");

axe.run( function(err, results) {
  console.log( results.violations );
} );

function navtemp() {
  $("#nav").load("/templates/navtemp.html");
};

function foottemp() {
  $("#foot").load("/templates/foottemp.html");
};

function toggle_visibility() {
  var x = document.getElementById('x-icon');
  var m = document.getElementById('menu-icon');
  if (x.style.display == 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  if (m.style.display == 'none') {
    m.style.display = 'block';
  } else {
    m.style.display = 'none';
  }
}

function navClose() {
  var x = document.getElementById('x-icon');
  var m = document.getElementById('menu-icon');
  $(document).click(function(event) {
    var clickover = $(event.target);
    var $navbar = $('.navbar-collapse');
    var _opened = $navbar.hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      $navbar.collapse('hide');
      $(".navbar-toggler").toggleClass("active");
      x.style.display = 'none';
      m.style.display = 'block';
    }
  });
  $(document).ready(function() {
    $(".navbar-toggler").on("click", function() {
      $(this).toggleClass("active");
    });
  });
};

function initMap() {
  var center = {lat: 41.8781, lng: -87.6298};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center
  });

  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
}
