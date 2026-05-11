function getBathValue() {

    var uiBathrooms =
    document.getElementsByName("uiBathrooms");

    for(var i = 0; i < uiBathrooms.length; i++) {

        if(uiBathrooms[i].checked) {

            return parseInt(uiBathrooms[i].value);
        }
    }

    return -1;
}


function getBHKValue() {

    var uiBHK =
    document.getElementsByName("uiBHK");

    for(var i = 0; i < uiBHK.length; i++) {

        if(uiBHK[i].checked) {

            return parseInt(uiBHK[i].value);
        }
    }

    return -1;
}


function onClickedEstimatePrice() {

    var sqft =
    document.getElementById("uiSqft");

    var bhk = getBHKValue();

    var bathrooms = getBathValue();

    var location =
    document.getElementById("uiLocations");

    var estPrice =
    document.getElementById("uiEstimatedPrice");

    var url =
    "http://127.0.0.1:5000/predict_home_price";

    $.post(url, {

        total_sqft: parseFloat(sqft.value),

        bhk: bhk,

        bath: bathrooms,

        location: location.value

    },

    function(data, status) {

        estPrice.innerHTML =
        "<h2>₹ " +
        data.estimated_price.toString() +
        " Lakhs</h2>";

    });
}


function onPageLoad() {

    var url =
    "http://127.0.0.1:5000/get_location_names";

    $.get(url, function(data, status) {

        if(data) {

            var locations = data.locations;

            $('#uiLocations').empty();

            for(var i in locations) {

                var opt =
                new Option(locations[i]);

                $('#uiLocations').append(opt);
            }
        }
    });
}


function toggleChat(){

    let chatbot =
    document.getElementById("chatbot");

    if(chatbot.style.display === "block"){

        chatbot.style.display = "none";
    }

    else{

        chatbot.style.display = "block";
    }
}


function sendMessage(){

    let input =
    document.getElementById("userMessage");

    let message = input.value;

    if(message.trim() === ""){
        return;
    }

    let chatBody =
    document.getElementById("chatBody");

    chatBody.innerHTML +=
    `<div class="user-message">${message}</div>`;

    input.value = "";

    fetch("http://127.0.0.1:5000/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })

    })

    .then(response => response.json())

    .then(data => {

        chatBody.innerHTML +=
        `<div class="bot-message">${data.reply}</div>`;

        chatBody.scrollTop =
        chatBody.scrollHeight;

    })

    .catch(error => {

        console.log(error);

        chatBody.innerHTML +=
        `<div class="bot-message">
            Server Error ❌
        </div>`;
    });
}


window.onload = onPageLoad;