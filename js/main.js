$(document).ready(function(){
  $(".menu").bind("click", function() {
    if ($(".overlay").hasClass("hide")) {
      $(".overlay").removeClass("hide");
      $(".menu").hide();
      $(".close").show();
    }
  });
  $(".overlay").bind("click", function() {
    $(this).addClass("hide");
    $(".menu").show();
    $(".close").hide();
  });

  $(".close").bind("click", function() {
    $(".overlay").addClass("hide");
    $(".menu").show();
    $(".close").hide();
  });

  function goToByScroll(id) {
    id = id.replace("-link", "");
    $("html, body").animate({
      scrollTop: $("#"+id).offset().top - 85
    }, 500);
  };

  $("h1 span").click(function(e) {
    e.preventDefault();
    $(".overlay").addClass("hide");
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });

  $(".overlay > ul > li > a").click(function(e) {
    e.preventDefault();
    goToByScroll(this.id);
  });

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
       $("header").removeClass("active");
    }
  });

  $(".arrow-down").click(function(e) {
    e.preventDefault();
    var winHeight = $(window).height();
    $("html, body").animate({
      scrollTop: winHeight},
    500);
  });

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    loop: true,
  });

  mapboxgl.accessToken = 'pk.eyJ1IjoidmVzcGVydGluZXMiLCJhIjoiY2o4b3U2dWJzMDd1MDJ4bnR4cmtldjdzdSJ9.pbThOkKRGk1Lwo7dIDH2Iw';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/vespertines/cjbc70f0z27ud2rs25pz3ify2', // stylesheet location
    center: [-86.15, 11.475], // starting position [lng, lat]
    zoom: 11 // starting zoom
  });

  var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1046493,
            11.4536959,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Sardina (aka Beginners Bay)",
          "description": "A great all-rounder which is ideal for beginners. Beautiful spilling waves spread across 3 spots. Be aware of the rocks. All tides.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1027933,
            11.4519293,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "El Tumbo Verde",
          "description": "aka 'el Frente'. You can find 2-3 waves here, including a solid wedge - when it's working.  Be aware of the rocks. Mid-high tide.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1083079,
            11.4558199,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "La Costita",
          "description": "aka 'Popoyo'. The most well-known surf spot in the area. Point break. House of the locals. All tides.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1101533,
            11.4528756,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Las Burras ",
          "description": "aka 'The Outer Reef'.  World-class. The biggest barrel offering in Nicaragua. Can hold swell to around 25ft / 8 metres. Pro's often spotted out here.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0893393,
            11.4438956,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Jiquelite",
          "description": "aka 'Santana'.  A really fun beach break with a wedge. Perfect for more advanced surfers.  Mid-high tide.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0846615,
            11.4331274,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Rosada",
          "description": "A beautiful but shallow left. Watch out for the rocks. Works only at low tide.  Access via the rocks from Jiquelite.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0626888,
            11.4107066,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Panga Drops",
          "description": "Point break with smooth, big waves. Strong rip-tide.  All tides. Access by boat.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0582256,
            11.4073412,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Colorado",
          "description": "An amazing beach break that's popular for the deep barrels. Mid-high tide. Access via the rocks from Gigante.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1187363,
            11.4642109,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Guasacate ",
          "description": "A white water spot with sandy bottom that's good for beginners.  Some solid waves break further out for the more advanced. Mid-high tide.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1348939,
            11.4726857,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "El Norte de Guasacate",
          "description": "World-class beach break. Perfect spot for barrels. Low-mid tide.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1141229,
            11.4620238,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "La Bocana",
          "description": "aka 'The River mouth'. A solid beach break with a long, flat sandy bottom which creates a perfect waves in the river.  Great for beginners and groms. Mid-high tide.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1712646,
            11.5158548,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "La Bocana Astillero ",
          "description": "A remote beach break that's great for more advanced surfers. Mid-high tide.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1740971,
            11.5181255,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "El Peñon",
          "description": "aka 'Lances Left'. Long and forgiving wave. Perfect for intermediate to more advanced. Low-mid tide. Access by boat or walking from Astillero.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1952114,
            11.5344409,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Chococente",
          "description": "Very quiet and fun beach break. Good for advanced. Mid-high tide. Access by boat or driving to Chococente.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.2209606,
            11.5549599,
            0
          ]
        },
        "properties": {
          "type": "surf",
          "name": "Vera Cruz",
          "description": "aka 'Playground'. This point break has a perfect left. Ideal for intermediate to more advanced. All tides. Access by boat or driving.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1010659,
            11.4533173,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Camping Luna",
          "description": "A beautiful, budget friendly option only 50 metres from the beach and in walking distance to many of the best surf spots. Prices from $6 per night.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1019886,
            11.4530019,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Cafe con Leche",
          "description": "Canadian run hotel on the beach with a swimming pool and family meal offering in the evening. Prices from $25 per night.",
          "link": "https://www.cafeconlechenica.com/",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0919839,
            11.4477284,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Garden Grove Surf",
          "description": "One of our favourite spots, steps from the beach. Self catering casitas available on a daily, weekly or monthly basis. Prices from $25 per night.",
          "link": "https://www.facebook.com/Gardengrovesurf/",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.095106,
            11.4491953,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Suyo Cabanas",
          "description": "Stunning cabanas on the beach with self-catering facilities. Contact them directly for prices.",
          "link": "http://hotelsuyo.com/",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.103335,
            11.4533752,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Magnific Rock Hotel",
          "description": "Hotel with a variety of accommodation options, restaurant and bar with stunning views.",
          "link": "https://magnificrock.com/sleep",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0915387,
            11.4476496,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Buena Onda Beach Resort",
          "description": "Swiss owned and run resort offering accommodation for a range of budgets. Swimming pool, skate ramp and bar.",
          "link": "http://www.buenaondaresort.com",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1274695,
            11.4735163,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Hotel Popoyo",
          "description": "A beautiful hotel, great for families and close to the North break in Guasacate. Prices from $50 per night.",
          "link": "http://www.hotelpopoyo.com/",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0918283,
            11.4488641,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Tropic Popoyo",
          "description": "Beautiful cabanas each with private bathroom, kitchen and double bed. Prices from $55 per night.",
          "link": "https://www.facebook.com/tropicpopoyo/",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0892427,
            11.4447999,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Villa Jiquelite",
          "description": "Local hostel in front of Jiquelite beach break. Sweet spot to watch the surf and sunset with a beer.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0994029,
            11.4515665,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "Sirena Surf House",
          "description": "A small and relaxed house offering rooms with ocean views from your bed.",
          "link": "https://www.facebook.com/sirenasurfhouse/",
          "website": "Visit website",
          "image": "img/marker-website.png"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1166334,
            11.480319,
            0
          ]
        },
        "properties": {
          "type": "stay",
          "name": "La Jolla",
          "description": "A resort set in the hills outside Guasacate. Stunning ocean views. Higher end budget.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1045098,
            11.4525813,
            0
          ]
        },
        "properties": {
          "type": "explore",
          "name": "Punta Sardina",
          "description": "An enchanting rock formation. Walkable at low tide. A beautiful spot for the sunset. Watch out for the big sets rolling in!",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0864425,
            11.441477,
            0
          ]
        },
        "properties": {
          "type": "explore",
          "name": "Santana Tide Pools",
          "description": "A place to relax out of the waves and white water. Lots of ocean life can be spotted here.  Best at low tide.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1384344,
            11.4754825,
            0
          ]
        },
        "properties": {
          "type": "explore",
          "name": "San Martin Tide Pools",
          "description": "We don't want to say too much about this place. If you find it, it'll speak for itself.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1637759,
            11.5130583,
            0
          ]
        },
        "properties": {
          "type": "explore",
          "name": "El Astillero",
          "description": "An old school fishing village with daily markets offering the freshest catch.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.1955651,
            11.5387544,
            0
          ]
        },
        "properties": {
          "type": "explore",
          "name": "Chacocente",
          "description": "National Wildlife Refuge set in a dry, tropical forest. Best for turtle spotting.",
          "link": "",
          "website": "",
          "image": ""
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -86.0968602,
            11.4732639,
            0
          ]
        },
        "properties": {
          "type": "explore",
          "name": "Aguas Termales",
          "description": "The hot springs make for a worthwhile visit on cooler evenings to relax your muscles after a long surf session.",
          "link": "",
          "website": "",
          "image": ""
        }
      }
    ]
  };

  var bounds = new mapboxgl.LngLatBounds();
  geojson.features.forEach(function(marker) {
    bounds.extend(marker.geometry.coordinates);
    var el = document.createElement('div');
    if (marker.properties.type == "surf") {
      el.className = 'marker marker-surf';
    } else if (marker.properties.type == "stay") {
      el.className = 'marker marker-stay';
    } else if (marker.properties.type == "explore") {
      el.className = 'marker marker-explore';
    };
    el.style.backgroundImage = 'url(img/marker.png)';
    var popup = new mapboxgl.Popup()
        .setHTML('<div class="popup-content"><h3>'+marker.properties.name+'</h3><p>'+marker.properties.description+'</p></div><div class="popup-bottom"><a href="'+marker.properties.link+'" target="_blank">'+marker.properties.website+'</a><img src='+marker.properties.image+'></div>');
    el.addEventListener('click', function() {
      $(".marker").removeClass("selected");
      map.flyTo({center: marker.geometry.coordinates});
      new mapboxgl.Popup()
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
      el.classList.add("selected");
    });
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
  });

  $(".locations ul li").click(function(e) {
    e.preventDefault();
    var type = $(this).data("type");
    $(".mapboxgl-popup").hide();
    $(".marker").hide();
    $(".locations ul").removeClass();
    $(".locations ul").addClass(type+"-selected");
    $(".marker-"+type).show();
  });

  $("#location-mobile").change(function() {
    var value = $("#location-mobile option:selected").text();
    var type = $(this).val();
    $(".location-mobile span").html(value);
    $(".marker").hide();
    $(".marker-"+type).show();
  });

  map.fitBounds(bounds, {
      padding: 50
  });

  if ($(window).width() < 960) {
    map.dragPan.disable();
  }

  $(".map").on('touchstart', function (e) {
    if (e.touches.length > 1)
        map.dragPan.enable();
  });

  map.scrollZoom.disable();
  map.addControl(new mapboxgl.NavigationControl());
});
