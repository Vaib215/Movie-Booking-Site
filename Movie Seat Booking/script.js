const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelected = document.querySelector("#movie");
let ticketPrice = +movieSelected.value;
populateUI();

// Update Total and Count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = ticketPrice * selectedSeatsCount;
}

// Save Movie Details
function setMovieData(movie) {
  localStorage.setItem("selectedMovieIndex", movie.selectedIndex);
  localStorage.setItem("selectedMoviePrice", movie.value);
}

// Populate UI with locally storage
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelected.selectedIndex = selectedMovieIndex;
  }
}

// Movie Select Event
movieSelected.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target);
  updateSelectedCount();
});

// Seat Click Event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// Initial Count and total set
updateSelectedCount();
