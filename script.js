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
    S: {
      palabras: ["Sapo", "Sopa", "sol","solo","Suma",],
      imagenes: ["dado.jpg", "delfin.jpg", "dia.jpg"],
      audios: ["dado.mp3", "delfin.mp3", "dia.mp3"],
    },
    L: {
      palabras: ["Loma", "Lima", "Lola", "Lupa", "Lomo"],
      imagenes: ["dado.jpg", "delfin.jpg", "dia.jpg"],
      audios: ["dado.mp3", "delfin.mp3", "dia.mp3"],
    },
    P: {
      palabras: ["Papá", "pila", "Pomo", "Puma", "Pito","Pipa"],
      imagenes: ["images_animadas/papa.jpg", "images_animadas/pila.jpg", "pomo.jpg", "puma.jpg", "pito.jpg", "pipa.jpg"],
      audios: ["Papa.mp3", "Pila.mp3", "Pomo.mp3"],
    },
    M: {
      palabras: ["Mamá", "Mimo", "Mima", "Momia","Misa","Masa"],
      imagenes: ["dado.jpg", "delfin.jpg", "dia.jpg"],
      audios: ["dado.mp3", "delfin.mp3", "dia.mp3"],
    },
  };
  
  let puntuacion = 0;
  document.getElementById("palabra").textContent = ""; // Inicializar como vacío
  let temporizadorIntervalo;
  let tiempoRestante = 60; // Tiempo inicial en segundos
  let temporizadorCorriendo = false; // Bandera para el temporizador
  
  // Botón Generar Palabra
  document.getElementById("generar-palabra").addEventListener("click", () => {
    const consonante = document.getElementById("consonante").value;
  
    if (!palabrasPorConsonante[consonante]) {
      alert("Por favor, selecciona una consonante válida.");
      return;
    }
  
    const { palabras, imagenes, audios } = palabrasPorConsonante[consonante];
    const index = Math.floor(Math.random() * palabras.length);
  
    const palabra = palabras[index];
    document.getElementById("palabra").textContent = palabra;
    document.getElementById("imagen-palabra").src = imagenes[index];
    document.getElementById("imagen-palabra").alt = palabra;
    document.getElementById("reproducir-audio").dataset.audio = audios[index];
  
    cargarJuego(palabra);
    desbloquearInteracciones();
  
    // Limpiar el contenido del textarea
    document.getElementById("area-escritura").value = ""; // Deja el textarea vacío
  
    // Solo iniciar el temporizador si no está corriendo
    if (!temporizadorCorriendo) {
      iniciarTemporizador();
    }
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
  
    // Verificar si hay una palabra generada y si el contenedor tiene letras
    if (!palabraCorrecta || letrasContenedor.length === 0) {
      alert("Primero debes generar una palabra antes de verificar.");
      return; // Detener ejecución si no hay palabra generada
    }
  
    const palabraActual = Array.from(letrasContenedor)
      .map((span) => span.textContent)
      .join("");
  
    if (palabraActual === palabraCorrecta) {
      puntuacion += 1; // Incrementar puntuación
      document.getElementById("puntuacion").textContent = `Puntuación: ${puntuacion}`;
      alert("¡Correcto! ¡Bien hecho!");
    } else {
      alert("Inténtalo de nuevo.");
    }
  });
  
  // Temporizador
  function iniciarTemporizador() {
    temporizadorCorriendo = true; // Marcar que el temporizador está corriendo
    document.getElementById("tiempo-restante").textContent = tiempoRestante;
    document.getElementById("mensaje-temporizador").textContent = "";
  
    // Iniciar el temporizador
    temporizadorIntervalo = setInterval(() => {
      tiempoRestante -= 1;
      document.getElementById("tiempo-restante").textContent = tiempoRestante;
  
      if (tiempoRestante <= 0) {
        clearInterval(temporizadorIntervalo); // Detener el temporizador
        document.getElementById("mensaje-temporizador").textContent = 
          `¡Tiempo agotado! Puntuación final: ${puntuacion}`;
        bloquearInteracciones(); // Bloquear las interacciones al finalizar
        temporizadorCorriendo = false; // Resetear la bandera
      }
    }, 1000);
  }
  
  function bloquearInteracciones() {
    // Bloquear botones e interacciones
    document.querySelectorAll("#letras-contenedor span").forEach((span) => {
      span.draggable = false;
    });
    document.getElementById("verificar-orden").disabled = true;
    document.getElementById("generar-palabra").disabled = true;
  }
  
  function desbloquearInteracciones() {
    // Desbloquear botones e interacciones
    document.querySelectorAll("#letras-contenedor span").forEach((span) => {
      span.draggable = true;
    });
    document.getElementById("verificar-orden").disabled = false;
    document.getElementById("generar-palabra").disabled = false;
  }
  