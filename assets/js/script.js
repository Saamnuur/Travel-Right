//Nav Bar//

//Obtained from W3Schools with some tweeking//

// When clicked you can toggle between hiding and showing the dropdown content //
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if clicked
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



//Form submission//
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        emailjs.sendForm("service_7epps9q", "template_hdvhudn", this).then(function(response) {
            console.log("SUCCESS!", response);
        }, function(error) {
            console.log('FAILED...', error);
        });
    });
};

document.getElementById("contact-form").onsubmit = function() {myFunction()};

function myFunction() {
  alert("The form was submitted");
}

