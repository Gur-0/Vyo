// NAVEGAR

const irFooter = document.querySelector("#irFooter");
const footer = document.querySelector("#footer");
irFooter.addEventListener('click', function() {
  footer.scrollIntoView({behavior: "smooth"});
}); 

const irComentarios = document.querySelector("#IrC");
const CajitaComentarios = document.querySelector(".comentario");

irComentarios.addEventListener("click", function() {
  CajitaComentarios.scrollIntoView({ behavior: "smooth" });
});


// AGREGADO DE INFO

const botonLlevInfo = document.querySelector("#pregunta");
const botonDaInfo = document.querySelectorAll(".infoVino");

botonLlevInfo.addEventListener("click", function () {
  console.log("botón pregunta clickeado");
  
  for (let i = 0; i < botonDaInfo.length; i++) {
    botonDaInfo[i].classList.add("iluminado");
    
    setTimeout(() => {
      botonDaInfo[i].classList.remove("iluminado");
    }, 1000);
  }
});

// INFO VINO ROJO

let vinoActual = null;

const infoRojo = document.querySelector("#Rojo");
const caja = document.querySelector(".data");
console.log("infoRojo");
console.log("caja");

let vinoRojo = document.createElement("p");

vinoRojo.innerHTML = "El vino tinto es caracterizado por su color único, vacilando entre colores como el rojo oscuro y azulado violáceo; a partir de estos colores podemos saber diferentes propiedades del vino que estamos tomando. Por ejemplo, si el color es un rojo oscuro, significa que tanto su densidad como la concentración de tanino es baja, se caracteriza por un sabor frutal.";
console.log(vinoRojo);
console.log(vinoRojo.isConnected);


infoRojo.addEventListener('click', function () {
  if (vinoActual && vinoActual !== vinoRojo) {
    caja.removeChild(vinoActual);
  };
  if (!vinoRojo.isConnected) {
  caja.appendChild(vinoRojo);
  console.log(vinoRojo.isConnected);
  dat.textContent = "Vino tinto";
  vinoActual = vinoRojo;
  };
});

// INFO VINO BLANCO

const infoBlanco = document.querySelector("#blanco");
console.log(infoBlanco);

let vinoBlanco = document.createElement("p");
vinoBlanco.innerHTML = "Se cree que el orígen del vino blanco data en la antigua civilización mesopotámica, aunque se puede decir con mayor seguridad que la antigua Persia y Egipto la han estado elaborando y bebiendo. En el antiguo Egipto el vino en generalmente era una bebdida que solo aquellos de alta clase, como el mismo Faraón, podían beber, incluso esta bebida era usada como ofrenda a los Dioses o eran enterradas en la tumba del  noble.";
console.log(vinoBlanco);
console.log(vinoBlanco.isConnected);

infoBlanco.addEventListener('click', function () {
  if (vinoActual && vinoActual !== vinoBlanco) {
    caja.removeChild(vinoActual);
  };
  if (!vinoBlanco.isConnected) {
  caja.appendChild(vinoBlanco);
  console.log(vinoRojo.isConnected);
  dat.textContent = "Vino blanco";
  vinoActual = vinoBlanco;
  };
});

// INFO VINO ROSA
const infoRosa = document.querySelector("#rosa");
let vinoRosa = document.createElement("p");
vinoRosa.innerHTML = "Se dice que los primeros vinos rosados se elaboraron por los griegos, quienes diluían el vino tinto con agua por una práctica mitológica. Más adelante la popularidad del vino rosado se extendió entre los años 1960 y 1970, especialmente en países como Portugal y España, ya que los consideraban como vinos románticos.";

infoRosa.addEventListener('click', function () {
  if (vinoActual && vinoActual !== vinoRosa) {
    caja.removeChild(vinoActual);
  };
  if (!vinoRosa.isConnected) {
  caja.appendChild(vinoRosa);
  console.log(vinoRosa.isConnected);
  dat.textContent = "Vino rosa";
  vinoActual = vinoRosa;
  };
});


// INFO VINO ESPUMOSO
const infoEspumoso = document.querySelector("#espumoso");
let vinoEspumoso = document.createElement("p");
vinoEspumoso.innerHTML = "El vino espumoso se diferncia de los demás vinos debido a que atraviesa una segunda fermentación, lo que produce esas burbujas en la bebida, dando como resultado una bebida refrescante.";

infoEspumoso.addEventListener('click', function () {
  if (vinoActual && vinoActual !== vinoEspumoso) {
    caja.removeChild(vinoActual);
  };
  if (!vinoEspumoso.isConnected) {
  caja.appendChild(vinoEspumoso);
  console.log(vinoEspumoso.isConnected);
  dat.textContent = "Vino espumoso";
  vinoActual = vinoEspumoso;
  };
});


// CARRITO


const productos = document.querySelectorAll(".producto");
const miLista = document.querySelector("#lista");
const botonAgregar = document.querySelectorAll(".agregar");
const botonVaciar = document.querySelector("#vaciar");
const total = document.querySelector(".totalPrecio");

let precioTotal = 0;

// Recorrer los botones de agregar
for (let i = 0; i < botonAgregar.length; i++) {
  botonAgregar[i].addEventListener("click", function () {
    const nombreProducto = productos[i].querySelector("h4").textContent;
    const precioProducto = parseFloat(
      productos[i].querySelector("p").textContent.replace("$", "")
    );

    // Crear el ítem del carrito
    const nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = `${nombreProducto} - $${precioProducto}`;
    miLista.appendChild(nuevoItem);

    // Botón eliminar individual
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "x";
    botonEliminar.classList.add("botonX");
    nuevoItem.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", () => {
      miLista.removeChild(nuevoItem);
      int(precioTotal);
      console.log(precioTotal);
      precioTotal -= precioProducto;
      total.textContent = `$${precioTotal}`;
    });

    // Actualizar total
    precioTotal += precioProducto;
    total.textContent = `$${precioTotal}`;
  });
}

// Vaciar carrito
botonVaciar.addEventListener('click', function () {
  miLista.innerHTML = "";
  precioTotal = 0;
  total.textContent = `$${precioTotal}`;
});

// PAGO

const botonPago = document.querySelector("#pago");

botonPago.addEventListener('click', function () {
  console.log(miLista);
  let dineroIngresado = parseInt(prompt("Ingrese el dinero usará para realizar la compra:"));
  console.log(`Usted ha ingresado: ${dineroIngresado}`);
  console.log("Se está verificando el pago...");
  const miPago = new Promise(function(resolve, reject) {
    setTimeout(function () {
      if(dineroIngresado < precioTotal){
        reject("Lo sentimos, la cantidad ingresada es menor que el precio total.");
        alert("El pago ha sido rechazado");
      } else if(dineroIngresado > precioTotal) {
        reject("Usted está pagando más de lo que debe.");
        alert("El pago ha sido rechazado.");
        console.log("MAS DINERO");
      } else if(dineroIngresado = precioTotal) {
        resolve("¡La compra se ha realizado con éxito!");
        alert("El pago ha sido realizado.");
        console.log("¡La compra se ha realizado con éxito!");
      };
    }, 2000);
  });
});

const input = document.querySelector("#com");
const botonEnviar = document.querySelector("#submit");
const cajaComentario = document.querySelector("#listaComentario");

  botonEnviar.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto) {
      const nuevoComentario = document.createElement("p");
      nuevoComentario.textContent = texto;
      cajaComentario.appendChild(nuevoComentario);
      input.value = ""; // limpiar el textarea
    } else {
      alert("Por favor, escribe algo antes de enviar.");
    }
  });

// FOOTER

const insta = document.querySelector("#instagram");
console.log(insta);
insta.addEventListener('click', function () {
  alert("Lo sentimos, nuestra página de instagram no está en funcionamiento ahora mismo, vuelva más tarde");
});
const twitter = document.querySelector("#Twitter");
twitter.addEventListener('click', function () {
  alert("Lo sentimos, nuestra página de twitter no está en funcionamiento ahora mismo, vuelva más tarde");
});
const facebook = document.querySelector("#Facebook");
facebook.addEventListener('click', function () {
  alert("Lo sentimos, nuestra página de facebook no está en funcionamiento ahora mismo, vuelva más tarde");
});