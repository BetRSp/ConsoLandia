const palabrasPorConsonante = {
    B: {
      palabras: ["Banana", "Barco", "Bola"],
      imagenes: ["banana.jpg", "barco.jpg", "bola.jpg"],
      audios: ["banana.mp3", "barco.mp3", "bola.mp3"],
    },
    C: {
      palabras: ["Casa", "Coche", "Cielo"],
      imagenes: ["casa.jpg", "coche.jpg", "cielo.jpg"],
      audios: ["casa.mp3", "coche.mp3", "cielo.mp3"],
    },
    D: {
      palabras: ["Dado", "Delfín", "Día"],
      imagenes: ["dado.jpg", "delfin.jpg", "dia.jpg"],
      audios: ["dado.mp3", "delfin.mp3", "dia.mp3"],
    },
  };
  
  let puntuacion = 0;
  document.getElementById("palabra").textContent = ""; // Inicializar como vacío
  let temporizadorIntervalo;
  let tiempoRestante = 59; // Tiempo inicial en segundos
  
  // Botón Generar Palabra
  document.getElementById("generar-palabra").addEventListener("click", () => {
    const consonante = document.getElementById("consonante").value;
  
    // Validar si la consonante es válida
    if (!palabrasPorConsonante[consonante]) {
      alert("Por favor, selecciona una consonante válida.");
      return;
    }
  
    const { palabras, imagenes, audios } = palabrasPorConsonante[consonante];
    const index = Math.floor(Math.random() * palabras.length);
  
    const palabra = palabras[index];
    document.getElementById("palabra").textContent = palabra; // Actualizamos la palabra
    document.getElementById("imagen-palabra").src = imagenes[index];
    document.getElementById("imagen-palabra").alt = palabra;
    document.getElementById("reproducir-audio").dataset.audio = audios[index];
  
    document.getElementById("area-escritura").value = "";

    cargarJuego(palabra);
    iniciarTemporizador();
    desbloquearInteracciones();
  });
  
  // Reproducir audio
  document.getElementById("reproducir-audio").addEventListener("click", () => {
    const audio = new Audio(document.getElementById("reproducir-audio").dataset.audio);
    audio.play();
  });
  
  // Cargar letras desordenadas
  function cargarJuego(palabra) {
    const contenedor = document.getElementById("letras-contenedor");
    contenedor.innerHTML = "";
   // Crear las letras desordenadas
   const letras = palabra.split("").sort(() => Math.random() - 0.5);
   letras.forEach((letra) => {
     const span = document.createElement("span");
     span.textContent = letra;
     span.draggable = true;
 
     // Agregar eventos para arrastrar y soltar
     span.addEventListener("dragstart", dragStart);
     span.addEventListener("dragover", dragOver);
     span.addEventListener("drop", drop);
 
     contenedor.appendChild(span);
   });
 }
 
 // Variable global para almacenar la letra arrastrada
 let letraArrastrada = null;
 
 function dragStart(e) {
   letraArrastrada = e.target; // Guardar el elemento arrastrado
   e.target.classList.add("dragging");
 }
 
 function dragOver(e) {
   e.preventDefault(); // Permitir el evento de soltar
 }
 
 function drop(e) {
   e.preventDefault();
 
   const letraSoltada = e.target; // Elemento sobre el que se suelta
 
   // Intercambiar letras
   if (letraArrastrada && letraArrastrada !== letraSoltada) {
     const temp = letraArrastrada.textContent;
     letraArrastrada.textContent = letraSoltada.textContent;
     letraSoltada.textContent = temp;
 
     letraArrastrada.classList.remove("dragging"); // Eliminar la clase de arrastrar
     letraArrastrada = null; // Resetear
   }
 }
  
  // Verificar Orden
  document.getElementById("verificar-orden").addEventListener("click", () => {
    const palabraCorrecta = document.getElementById("palabra").textContent.trim();
    const letrasContenedor = document.getElementById("letras-contenedor").children;
  
    if (!palabraCorrecta || letrasContenedor.length === 0) {
      alert("Primero debes generar una palabra.");
      return;
    }
  
    const palabraActual = Array.from(letrasContenedor)
      .map((span) => span.textContent)
      .join("");
  
    if (palabraActual === palabraCorrecta) {
      alert("¡Correcto! ¡Bien hecho!");
      puntuacion += 1;
      clearInterval(temporizadorIntervalo); // Detener el temporizador
    } else {
      alert("Inténtalo de nuevo.");
    }
  
    document.getElementById("puntuacion").textContent = `Puntuación: ${puntuacion}`;
  });
  
  // Temporizador
  function iniciarTemporizador() {
    tiempoRestante = 59; // Resetear tiempo
    document.getElementById("tiempo-restante").textContent = tiempoRestante;
    document.getElementById("mensaje-temporizador").textContent = "";
  
    clearInterval(temporizadorIntervalo);
  
    temporizadorIntervalo = setInterval(() => {
      tiempoRestante -= 1;
      document.getElementById("tiempo-restante").textContent = tiempoRestante;
  
      if (tiempoRestante <= 0) {
        clearInterval(temporizadorIntervalo);
        document.getElementById("mensaje-temporizador").textContent = "¡Tiempo agotado! Inténtalo de nuevo.";
        bloquearInteracciones();
      }
    }, 1000);
  }
  
  function bloquearInteracciones() {
    document.querySelectorAll("#letras-contenedor span").forEach((span) => {
      span.draggable = false;
    });
    document.getElementById("verificar-orden").disabled = true;
  }
  
  function desbloquearInteracciones() {
    document.querySelectorAll("#letras-contenedor span").forEach((span) => {
      span.draggable = true;
    });
    document.getElementById("verificar-orden").disabled = false;
  }
  