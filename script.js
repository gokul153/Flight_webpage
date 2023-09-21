
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
function check(){
    console.log("checking the details");
}
document.addEventListener('DOMContentLoaded',() =>{
    console.log("Function Invoked");
      const selectDrop = document.querySelector('#fromDirection');
      fetch('https://restcountries.com/v2/all')
  .then((response) => response.json())
  .then((data) => {
    console.log("Data loaded "+data); 
    // Iterate through the data and create an option for each country
    data.forEach((country) => {
      
      const option = document.createElement('option');
      option.text = country.name;
      option.value = country.alpha2Code; // You can use a unique identifier as the value
      countriesDropdown.appendChild(option);
    });
  })
  .catch((error) => console.error('Error fetching countries:', error));

});
function list_countries(){
    console.log("Function Invoked");
    fetch('https://restcountries.com/v2/all')
  .then((response) => response.json())
  .then((data) => {
    console.log("Data loaded "+data);
})
.catch((error) => console.error('Error fetching countries:', error));


}
nextButton.addEventListener("click", () => {
    console.log("Next Button is clicked");
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}