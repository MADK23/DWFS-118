function calcularMultiplos() {
    let num = parseInt(document.getElementById("numero").value);
    let m1 = parseInt(document.getElementById("multiplo1").value);
    let m2 = parseInt(document.getElementById("multiplo2").value);
    let m3 = parseInt(document.getElementById("multiplo3").value);
    let m4 = parseInt(document.getElementById("multiplo4").value);
    
    let imagenesDiv = document.getElementById("imagenes");
    imagenesDiv.innerHTML = "";

    if (isNaN(num)) {
        alert("Ingrese un número válido.");
        return;
    }

    let imagenes = [];

    if (num % m1 === 0 && num % m2 === 0) imagenes.push("1449-margartias_tres_400x400.jpg");
    if (num % m3 === 0 && num % m4 === 0) imagenes.push("rosa-reina-flores.jpg");
    if (num % m1 === 0 && num % m2 === 0 && num % m3 === 0 && num % m4 === 0) imagenes.push("viola-labradorica.jpg");

    if (imagenes.length === 0) {
        alert("El número no cumple ninguna condición.");
    } else {
        imagenes.forEach(src => {
            let img = document.createElement("img");
            img.src = src;
            img.width = 200;
            imagenesDiv.appendChild(img);
        });
    }
}