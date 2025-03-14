function verificarMultiplo() {
            
    let num = parseInt(document.getElementById("numero").value);
    let imagen = document.getElementById("imagen");
    
    
    if (isNaN(num)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }
    
    
    if (num % 3 === 0 && num % 5 === 0 && num % 6 === 0 && num % 7 === 0) {
        imagen.src = "viola-labradorica.jpg";
    } 
    
    else if (num % 3 === 0 && num % 5 === 0) {
        imagen.src = "1449-margartias_tres_400x400.jpg"; 
    } 
    
    else if (num % 6 === 0 && num % 7 === 0) {
        imagen.src = "rosa-reina-flores.jpg"; 
    } 

    else {
        alert(`BRUTO`)
    }

    
    imagen.style.display = "block";
}