const mtn1 = document.getElementById("mtn1");
const mtn2 = document.getElementById("mtn2");
const climbPic = document.getElementById("climb-pic");
const schedule1 = document.getElementById("schedule1");
const schedule2 = document.getElementById("schedule2");

mtn1.addEventListener("click", showMtn1);
mtn2.addEventListener("click", showMtn2);

function showMtn1(e) {
  // change hero image
  climbPic.classList.add("hero-climb1");
  climbPic.classList.remove("hero-climb2");

  // highlight the active button
  mtn1.classList.add("climb__tab-nav--active");
  mtn2.classList.remove("climb__tab-nav--active");

  // display the appropriate schedule
  schedule1.style.display = "block";
  schedule2.style.display = "none";
  e.preventDefault();
}

function showMtn2(e) {
  climbPic.classList.add("hero-climb2");
  climbPic.classList.remove("hero-climb1");

  mtn2.classList.add("climb__tab-nav--active");
  mtn1.classList.remove("climb__tab-nav--active");

  schedule2.style.display = "block";
  schedule1.style.display = "none";
  e.preventDefault();
}
