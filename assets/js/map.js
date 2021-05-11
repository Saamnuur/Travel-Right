//England Map//

//Inisialising Map//
//Partially obtained from google and Google Maps topic page//

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 52.35551,
            lng: -1.17431
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        name: "London",
        lat: 51.50735,
        lng: -0.12775,
        description: "The capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
        imgSrc: "assets/images/beaches/bath-travelzoo.jpg",
    }, {
        name: "Bath",
        lat: 51.38106,
        lng: -2.35901,
        description: "Bath is the largest city in the county of Somerset, England, known for and named after its Roman-built baths. In 2011, the population was 88,859. Bath is in the valley of the River Avon, 97 miles west of London and 11 miles southeast of Bristol. The city became a World Heritage site in 1987.",
        imgSrc: "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"

    }, {
        name: "Cornwall",
        lat: 50.26604,
        lng: -5.05271,
        description: "Cornwall is a county on England’s rugged southwestern tip. It forms a peninsula encompassing wild moorland and hundreds of sandy beaches, culminating at the promontory Land’s End. The south coast, dubbed the Cornish Riviera, is home to picturesque harbour villages such as Fowey and Falmouth. The north coast is lined with towering cliffs and seaside resorts like Newquay, known for surfing.",
        imgSrc: "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"


    }, {
        name: "York",
        lat: 53.95996,
        lng: -1.08729,
        description: "York is a walled city in northeast England that was founded by the ancient Romans. Its huge 13th-century Gothic cathedral, York Minster, has medieval stained glass and 2 functioning bell towers. The City Walls form a walkway on both sides of the River Ouse. The Monk Bar gate houses an exhibition tracing the life of 15th-century Plantagenet King Richard III.",
        imgSrc: "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"

    },



    ];

    var markers = locations.map(function (location, i) {
        const marker = new google.maps.Marker({
            position: {
                lat: location.lat,
                lng: location.lng,
            },
            label: labels[i % labels.length]
        });
        attachDescriptionWindow(map, marker, location);
        return marker;
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

}



// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachDescriptionWindow(map, marker, location) {
    //location.descruption, location.imageUrl
    const infowindow = new google.maps.InfoWindow({
        content: `<div><img src="${location.imageUrl}" /> ${location.description}</div>`,
    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}

//Sliding Image from w3schools//

function initComparisons() {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /* Once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function: */
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /* Get the width and height of the img element */
        w = img.offsetWidth;
        h = img.offsetHeight;
        /* Set the width of the img element to 50%: */
        img.style.width = (w / 2) + "px";
        /* Create slider: */
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /* Insert slider */
        img.parentElement.insertBefore(slider, img);
        /* Position the slider in the middle: */
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /* Execute a function when the mouse button is pressed: */
        slider.addEventListener("mousedown", slideReady);
        /* And another function when the mouse button is released: */
        window.addEventListener("mouseup", slideFinish);
        /* Or touched (for touch screens: */
        slider.addEventListener("touchstart", slideReady);
        /* And released (for touch screens: */
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
            /* Prevent any other actions that may occur when moving over the image: */
            e.preventDefault();
            /* The slider is now clicked and ready to move: */
            clicked = 1;
            /* Execute a function when the slider is moved: */
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /* The slider is no longer clicked: */
            clicked = 0;
        }
        function slideMove(e) {
            var pos;
            /* If the slider is no longer clicked, exit this function: */
            if (clicked == 0) return false;
            /* Get the cursor's x position: */
            pos = getCursorPos(e)
            /* Prevent the slider from being positioned outside the image: */
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /* Execute a function that will resize the overlay image according to the cursor: */
            slide(pos);
        }
        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /* Get the x positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x coordinate, relative to the image: */
            x = e.pageX - a.left;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /* Resize the image: */
            img.style.width = x + "px";
            /* Position the slider: */
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
};

initComparisons();