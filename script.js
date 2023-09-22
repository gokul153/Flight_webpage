
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
function check(){
    console.log("checking the details");
}


const contries = "https://countriesnow.space/api/v0.1/countries/codes";
const arrival = document.getElementById("arrival");
const departure = document.getElementById("departure");
const selectElement = document.getElementById("arrival");


window.onload = () => {
    console.log("Function on load");
    fetch(contries)
        .then(response => response.json()).then((response) => {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                let country = response.data[i].name;
                var option1 = document.createElement("option");
                var option2 = document.createElement("option");
                const option = document.createElement("option");
                option.text = country.text;
                
                option1.text = country;
                option2.text = country;

                console.log(option1.text);
                var sel1 = arrival.options[arrival.selectedIndex];
                arrival.add(option1, sel1);
                var sel2 = departure.options[departure.selectedIndex];
                departure.add(option2, sel2);
            }
        }).catch(error => console.log(error));
}