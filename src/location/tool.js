function displayNone(section) {
  document.querySelector("#localizacion").style.display = "none";
  document.querySelector("#transporte").style.display = "none";
  document.querySelector("#alojamiento").style.display = "none";
  document.querySelector("#relacionadas").style.display = "none";
  document.querySelector(`#${section}`).style.display = "flex";
}

function mediaQuery(x) {
  if (x.matches) {
    let html = `
      <div class="sect-button">
        <button type="submit" class="button" onclick="displayNone('localizacion')">Localización</button>
        <button type="submit" class="button" onclick="displayNone('transporte')">Transporte</button>
      </div>
      <div class="sect-button">
        <button type="submit" class="button" onclick="displayNone('alojamiento')">Alojamiento</button>
        <button type="submit" class="button" onclick="displayNone('relacionadas')">Relacionadas</button>
      </div>
    `;
    document.getElementById("buttons").innerHTML = html;
  } else {
    let html = `
      <div class="sect-button">
        <button type="submit" class="button" onclick="displayNone('localizacion')">Localización</button>
        <button type="submit" class="button" onclick="displayNone('transporte')">Transporte</button>
        <button type="submit" class="button" onclick="displayNone('alojamiento')">Alojamiento</button>
        <button type="submit" class="button" onclick="displayNone('relacionadas')">Relacionadas</button>
      </div>
    `;
    document.getElementById("buttons").innerHTML = html;
  }
}
var x = window.matchMedia("(max-width: 680px)");
x.addListener(mediaQuery);
