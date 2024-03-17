var apiKey = "57e697cd3b35f700b959be1d5bfc5058"
const d = new Date();

document.getElementById("submitBtn").onclick = function() {
    var search = document.getElementById('search').value;
    if(search !== ""){
        getWeatherLocation(search);
    }else{
        alert("Please type something to search!");
    }
};

function getWeatherLocation(search) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {

                let res = JSON.parse(xmlhttp.response);
                console.log(res);

                document.getElementById("cloud").innerHTML = res.main.temp+ "&#176;C";
                document.getElementById("feels_like").innerHTML = res.main.feels_like+ "&#176;C";
                document.getElementById("temp_min").innerHTML = res.main.temp_min+ "&#176;C";
                document.getElementById("max_temp").innerHTML = res.main.temp_max+ "&#176;C";
                document.getElementById("pressure").innerHTML = res.main.pressure+ "m/s";
                document.getElementById("humidity").innerHTML = res.main.humidity+ "%";
                document.getElementById("temp").innerHTML = res.main.temp+ "&#176;C";
                document.getElementById("city").innerText = res.name;
                document.getElementById("date").innerText = d;


            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('City not found!');
            }
        }
    };

    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + search + "&appid=" + apiKey;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

