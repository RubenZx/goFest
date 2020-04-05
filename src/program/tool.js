function displayNone(section) {
    document.querySelector("#day25").style.display = "none";
    document.querySelector("#day26").style.display = "none";
    document.querySelector("#day27").style.display = "none";
    document.querySelector(`#${section}`).style.display = "flex";
  }