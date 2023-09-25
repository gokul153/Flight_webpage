
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;



const contries = "https://countriesnow.space/api/v0.1/countries/codes";


const arrival = document.getElementById("arrival");
const departure = document.getElementById("departure");
function isDateThreeWeeksAfterToday(dateToCheck) {
    // Get the current date
    const currentDate = new Date();

    // Calculate a new date that is three weeks (21 days) ahead of today
    const threeWeeksLater = new Date(currentDate);
    threeWeeksLater.setDate(currentDate.getDate() + 21);

    // Convert the input date to a Date object if it's not already
    const inputDate = new Date(dateToCheck);

    // Compare the input date with the calculated date
    if (inputDate > threeWeeksLater) {
        return true;

    } 
    else{
        return false;
    }
}
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

                
                var sel1 = arrival.options[arrival.selectedIndex];
                
                arrival.add(option1, sel1);
                var sel2 = departure.options[departure.selectedIndex];
               
                departure.add(option2, sel2);
            }
        }).catch(error => console.log(error));
}
function checkDateValidity() {
    
const selectElement = document.getElementById("arrival");
const selectElement_departure = document.getElementById("departure");
const selectedIndex = selectElement.selectedIndex;
const selectedIndex_departure = selectElement_departure.selectedIndex;
console.log("index is"+selectedIndex);
    console.log("check validity started");
    const selectedOptionValue = selectElement.options[selectedIndex].value;
    const selectedOptionText = selectElement.options[selectedIndex].text;
    const selectedOptionText_departure = selectElement.options[selectedIndex_departure].text;
    console.log(selectedOptionText);
    const dateInput = document.getElementById("dateInput").value;
    const inputDate = new Date(dateInput);
    const today = new Date();
    const ticketCount = document.getElementById("ticketCount").value;
    if (!departure || !arrival || !dateInput || !ticketCount) {
        document.getElementById("result").innerText = "Please fill out all fields.";
    } 
    else if (isNaN(inputDate.getTime())) {
        document.getElementById("result").innerText = "Invalid date format.";
    } 
    else if (inputDate < today) {
        document.getElementById("result").innerText = "The selected date is a previous date from today.";
        console.log("old date detected");
        alert("Enter Proper date");
    
    
    
    }
    else if(isDateThreeWeeksAfterToday(inputDate))
    {
        alert("The date is more than three weeks after today Booking not possible.");
    }
    else if(selectedOptionText==selectedOptionText_departure){
     alert("Departure And Arrival cannot be same");
    }
     else {
        console.log("Currect details verified");
        const details = `
                    Departure: ${selectedOptionText_departure}
                    Arrival: ${selectedOptionText}
                    Date: ${dateInput}
                    Ticket Count: ${ticketCount}
                `;
                document.getElementById("result").innerText = "Details:\n" + details;
                alert(details);
                const confirmationMessage = "Do you want to continue?";
                const userResponse = confirm(confirmationMessage);
    
                // Check the user's response
                if (userResponse) {
                    alert("You clicked 'Yes.'"); // Replace this with your desired action for 'Yes.'
                } else {
                    alert("You clicked 'No.'"); // Replace this with your desired action for 'No.'
                }
                alert
    }
}