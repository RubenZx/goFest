function displayNone(section){
    document.querySelector('#localizacion').style.display = 'none';
    document.querySelector('#transporte').style.display = 'none';
    document.querySelector('#alojamiento').style.display = 'none';
    document.querySelector('#relacionadas').style.display = 'none';   
    document.querySelector(`#${section}`).style.display = 'flex';
}