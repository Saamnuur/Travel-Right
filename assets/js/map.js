//England Map//

//Locations//



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

    var markers = locations.map(function(location, i) {
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