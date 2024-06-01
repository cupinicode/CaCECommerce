const data = JSON.parse(localStorage.getItem('producto'));

document.getElementById('nombre-producto').innerHTML = data.ProductTitle;
document.getElementById('precio-producto').innerHTML = parseInt(Math.random() * 80000 + 20000);
document.getElementById('imagen-producto').src = data.ImageURL;
const descripcion = document.getElementById('descripcion-producto');
for(key in data){
    let extraInfo = document.createElement('p');
    extraInfo.innerHTML = `${key}: ${data[key]}`;
    descripcion.appendChild(extraInfo);
}

