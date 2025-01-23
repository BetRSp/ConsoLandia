const palabrasPorConsonante = {
     A: {
    palabras: ["Antonella", "Avión", "Abeja", "Araña", "Anillo", "Arcoíris", "Arbol", "Auto"],
    imagenes: ["images_animadas/Anto.png", "images_animadas/avion.png", "images_animadas/abeja.png", "images_animadas/araña.png", "images_animadas/anillo.png", "images_animadas/arcoiris.png","images_animadas/arbol.png", "images_animadas/auto.png"],
    audios: ["images_animadas/antonella.mp3", "images_animadas/avion.mp3", "images_animadas/abeja.mp3", "images_animadas/araña.mp3", "images_animadas/anillo.mp3","images_animadas/arcoiris.mp3", "images_animadas/arbol.mp3","images_animadas/auto.mp3"],
    }, 
    B: {
      palabras: ["Banana", "Barco", "Bola", "Bote", "Burro", "Ballena"],
      imagenes: ["images_animadas/banana.png", "images_animadas/barco.png", "images_animadas/bola.png", "images_animadas/bote.png", "images_animadas/burro.png", "images_animadas/ballena.png"],
      audios: ["images_animadas/banana.mp3", "images_animadas/barco.mp3", "images_animadas/bola.mp3", "images_animadas/bote.mp3", "images_animadas/burro.mp3", "images_animadas/ballena.mp3"],
    },
    C: {
      palabras: ["Casa", "Coche", "Cielo", "Camisa", "Cerdo", "Caracol"],
      imagenes: ["images_animadas/casa.png", "images_animadas/coche.png", "images_animadas/cielo.jpg", "images_animadas/camisa.png", "images_animadas/cerdo.png", "images_animadas/caracol.png"],
      audios: ["images_animadas/casa.mp3", "images_animadas/coche.mp3", "images_animadas/cielo.mp3", "images_animadas/camisa.mp3", "images_animadas/cerdo.mp3","images_animadas/caracol.mp3"],
    },
    D: {
      palabras: ["Dado", "Delfín", "Día", "Dedo", "Diente", "Diamante"],
      imagenes: ["images_animadas/dado.png", "images_animadas/delfin.png", "images_animadas/dia.jpg", "images_animadas/dedo.png", "images_animadas/diente.png","images_animadas/diamantes.png"],
      audios: ["images_animadas/dado.mp3", "images_animadas/delfin.mp3", "images_animadas/dia.mp3", "images_animadas/dedo.mp3", "images_animadas/diente.mp3", "images_animadas/diamante.mp3"],
    },
    E: {
      palabras: ["Elefante", "Enano", "Estrella", "Escalera", "Espejo", "Escoba", "Escudo"],
      imagenes: ["images_animadas/elefante.png", "images_animadas/enano.png", "images_animadas/estrella.png", "images_animadas/escalera.png", "images_animadas/espejo.png", "images_animadas/escoba.png", "images_animadas/escudo.png"],
      audios: ["images_animadas/elefante.mp3", "images_animadas/enano.mp3", "images_animadas/estrella.mp3", "images_animadas/escalera.mp3", "images_animadas/espejo.mp3", "images_animadas/escoba.mp3", "images_animadas/escudo.mp3"],
    },
    F: {
      palabras: ["Foca", "Faro", "Flor", "Fuego", "Falda", "Foco", "Fogata"],
      imagenes: ["images_animadas/foca.png", "images_animadas/faro.png", "images_animadas/flor.png", "images_animadas/fuego.png", "images_animadas/falda.png", "images_animadas/foco.png", "images_animadas/fogata.png"],
      audios: ["images_animadas/foca.mp3", "images_animadas/faro.mp3", "images_animadas/flor.mp3","images_animadas/fuego.mp3", "images_animadas/falda.mp3", "images_animadas/foco.mp3", "images_animadas/fogata.mp3"],
    },
    G: {
      palabras: ["Gato", "Gorila", "Galleta", "Guante", "Guitarra", "Gorro", "Grillo"],
      imagenes: ["images_animadas/gato.png", "images_animadas/gorrila.png", "images_animadas/galleta.png", "images_animadas/guante.png", "images_animadas/guitarra.png", "images_animadas/gorro.png", "images_animadas/grillo.png"],
      audios: ["images_animadas/gato.mp3", "images_animadas/gorila.mp3", "images_animadas/galleta.mp3", "images_animadas/guante.mp3", "images_animadas/guitarra.mp3", "images_animadas/gorro.mp3", "images_animadas/grillo.mp3"],
    },
    H: {
      palabras: ["Hielo", "Hueco", "Hormiga", "Hongo", "Hada", "Helado", "Hacha"],
      imagenes: ["images_animadas/hielo.png", "images_animadas/hueco.png", "images_animadas/hormiga.png", "images_animadas/hongo.png", "images_animadas/hada.png", "images_animadas/helado.png", "images_animadas/hacha.png"],
      audios: ["images_animadas/hielo.mp3", "images_animadas/hueco.mp3", "images_animadas/hormiga.mp3", "images_animadas/hongo.mp3", "images_animadas/hada.mp3", "images_animadas/helado.mp3", "images_animadas/hacha.mp3"],
    },
    I: {
      palabras: ["Indio", "Iglesia", "Iman", "Isla", "Iguana", "Invierno", "Iglú"],
      imagenes: ["images_animadas/indio.png", "images_animadas/iglesia.png", "images_animadas/iman.png", "images_animadas/isla.png", "images_animadas/iguana.png", "images_animadas/invierno.jpeg", "images_animadas/iglu.png"],
      audios: ["images_animadas/indio.mp3", "images_animadas/iglesia.mp3", "images_animadas/iman.mp3", "images_animadas/isla.mp3", "images_animadas/iguana.mp3", "images_animadas/invierno.mp3", "images_animadas/iglu.mp3"],
    },
    J: {
      palabras: ["Jardin", "Japón", "Juguetes", "Jirafa", "Joya", "Jugo", "Jabalí", "Juan Luis"],
      imagenes: ["images_animadas/jardin.png", "images_animadas/japon.png", "images_animadas/juguetes.png", "images_animadas/jirafa.png", "images_animadas/joya.png", "images_animadas/jugo.png", "images_animadas/jabali.png", "images_animadas/juancho.png"],
      audios: ["images_animadas/jardin.mp3", "images_animadas/japon.mp3", "images_animadas/juguetes.mp3", "images_animadas/jirafa.mp3", "images_animadas/joya.mp3", "images_animadas/jugo.mp3", "images_animadas/jabali.mp3", "images_animadas/juancho.mp3"],
    },
    K: {
      palabras: ["Karate", "Kilo", "Koala", "Kiosco", "KaraoKe", "Kwi", "Kétchup"],
      imagenes: ["images_animadas/karate.png", "images_animadas/kilo.png", "images_animadas/koala.png", "images_animadas/kiosco.png", "images_animadas/karaoke.jpeg", "images_animadas/kwi.png", "images_animadas/ketchup.png"],
      audios: ["images_animadas/karate.mp3", "images_animadas/kilo.mp3", "images_animadas/koala.mp3", "images_animadas/kiosco.mp3", "images_animadas/karaoke.mp3", "images_animadas/kwi.mp3", "images_animadas/ketchup.mp3"],
    },
    L: {
      palabras: ["Loma", "Lima", "Lola", "Lupa", "Lobo", "limón"],
      imagenes: ["images_animadas/loma.png", "images_animadas/lima.png", "images_animadas/lola.png", "images_animadas/lupa.png", "images_animadas/lobo.png", "images_animadas/limon.png"],
      audios: ["images_animadas/loma.mp3", "images_animadas/lima.mp3", "images_animadas/lola.mp3", "images_animadas/lupa.mp3", "images_animadas/lobo.mp3", "images_animadas/limon.mp3"],
    },
    M: {
      palabras: ["Mamá", "Mimo", "Mima", "Momia","Misa","Masa", "Matias"],
      imagenes: ["images_animadas/mama.png", "images_animadas/mimo.png", "images_animadas/mima.png","images_animadas/momia.png", "images_animadas/misa.png", "images_animadas/masa.png","images_animadas/matias.jpg.png"],
      audios: ["images_animadas/mama.mp3", "images_animadas/mimo.mp3", "images_animadas/mima.mp3", "images_animadas/momia.mp3", "images_animadas/misa.mp3", "images_animadas/masa.mp3", "images_animadas/matias.mp3"],
    },
    N: {
      palabras: ["Nido", "Nariz", "Noche", "Navidad", "Naranja","Niña", "Naipe"],
      imagenes: ["images_animadas/nido.png", "images_animadas/nariz.png", "images_animadas/noche.jpeg", "images_animadas/navidad.png", "images_animadas/naranja.png", "images_animadas/niña.png", "images_animadas/naipe.png"],
      audios: ["images_animadas/nido.mp3", "images_animadas/nariz.mp3", "images_animadas/noche.mp3", "images_animadas/navidad.mp3", "images_animadas/naranja.mp3", "images_animadas/niña.mp3", "images_animadas/naipe.mp3"],
    },
    Ñ: {
      palabras: ["Ñandú", "Ñoquis", "Ñoño", "Ñapa", "Ñame","Ñu", "Ñeque"],
      imagenes: ["images_animadas/ñandu.png", "images_animadas/ñoquis.png", "images_animadas/ñoño.png", "images_animadas/ñapa.png", "images_animadas/ñame.png", "images_animadas/ñu.png", "images_animadas/ñeque.png"],
      audios: ["images_animadas/ñandu.mp3", "images_animadas/ñoquis.mp3", "images_animadas/ñoño.mp3", "images_animadas/ñapa.mp3", "images_animadas/ñame.mp3", "images_animadas/ñu.mp3", "images_animadas/ñeque.mp3"],
    },
    O: {
      palabras: ["Oso", "Ojos", "Oreja", "Olas", "Olla", "Ocho", "Oveja", "Ovni"],
      imagenes: ["images_animadas/oso.png", "images_animadas/ojos.png", "images_animadas/oreja.png", "images_animadas/olas.png", "images_animadas/olla.png", "images_animadas/ocho.png", "images_animadas/oveja.png", "images_animadas/ovni.png"],
      audios: ["images_animadas/oso.mp3", "images_animadas/ojos.mp3", "images_animadas/oreja.mp3", "images_animadas/olas.mp3", "images_animadas/olla.mp3", "images_animadas/ocho.mp3", "images_animadas/oveja.mp3", "images_animadas/ovni.mp3"],
    },
    P: {
      palabras: ["Papá", "pila", "Pomo", "Puma", "Pito", "Pipa"],
      imagenes: ["images_animadas/papa.png", "images_animadas/pila.png", "images_animadas/pomo.png", "images_animadas/puma.png", "images_animadas/pito.png", "images_animadas/pipa.png"],
      audios: ["images_animadas/papa.mp3", "images_animadas/pila.mp3", "images_animadas/pomo.mp3", "images_animadas/puma.mp3", "images_animadas/pito.mp3", "images_animadas/pipa.mp3"],
    },
    Q: {
      palabras: ["Queso", "Química", "Querubín", "Quince", "Quemar", "Quebrar"],
      imagenes: ["images_animadas/queso.png", "images_animadas/quimica.png", "images_animadas/querubin.png", "images_animadas/quince.png", "images_animadas/quemar.png", "images_animadas/quebrar.png"],
      audios: ["images_animadas/queso.mp3", "images_animadas/quimica.mp3", "images_animadas/querubin.mp3", "images_animadas/quince.mp3", "images_animadas/quemar.mp3", "images_animadas/quebrar.mp3"],
    },
    R: {
      palabras: ["Ratón", "Reloj", "Robot", "Radio", "Rayo","Rana", "Reina"],
      imagenes: ["images_animadas/raton.png", "images_animadas/reloj.png", "images_animadas/robot.png", "images_animadas/radio.png", "images_animadas/rayo.png", "images_animadas/rana.png", "images_animadas/reina.png"],
      audios: ["images_animadas/raton.mp3", "images_animadas/reloj.mp3", "images_animadas/robot.mp3", "images_animadas/radio.mp3", "images_animadas/rayo.mp3", "images_animadas/rana.mp3", "images_animadas/reina.mp3"],
    },
    S: {
      palabras: ["Sapo", "Sopa", "sol","suelo","Suma", "Samuel"],
      imagenes: ["images_animadas/sapo.png", "images_animadas/sopa.png", "images_animadas/sol.png", "images_animadas/suelo.png", "images_animadas/suma.png", "images_animadas/samuel.jpg.png"],
      audios: ["images_animadas/sapo.mp3", "images_animadas/sopa.mp3", "images_animadas/sol.mp3", "images_animadas/suelo.mp3", "images_animadas/suma.mp3", "images_animadas/samuel.mp3"],
    },
    T: {
      palabras: ["Tetero", "Tomate", "Tiburón", "Tortuga", "Tambor", "Tenedor"],
      imagenes: ["images_animadas/tetero.png", "images_animadas/tomate.png", "images_animadas/tiburon.png", "images_animadas/tortuga.png", "images_animadas/tambor.png", "images_animadas/tenedor.png"],
      audios: ["images_animadas/tetero.mp3", "images_animadas/tomate.mp3", "images_animadas/tiburon.mp3", "images_animadas/tortuga.mp3", "images_animadas/tambor.mp3", "images_animadas/tenedor.mp3"],
    },
    u: {
      palabras: ["Uva", "Uñas", "Uno", "Unicornio", "Universo", "Uniforme", "Urraca"],
      imagenes: ["images_animadas/uva.png", "images_animadas/uñas.png", "images_animadas/uno.png", "images_animadas/unicornio.png", "images_animadas/universo.jpeg", "images_animadas/uniforme.png", "images_animadas/urraca.png"],
      audios: ["images_animadas/uva.mp3", "images_animadas/uñas.mp3", "images_animadas/uno.mp3", "images_animadas/unicornio.mp3", "images_animadas/universo.mp3", "images_animadas/uniforme.mp3","images_animadas/urraca.mp3"],
    },
    V: {
      palabras: ["Volcán", "Voleibol", "Vampiro", "Violín", "Vikingo", "Veinte", "Verano"],
      imagenes: ["images_animadas/volcan.png", "images_animadas/voleibol.png", "images_animadas/vampiro.png", "images_animadas/violin.png", "images_animadas/vikingo.png", "images_animadas/veinte.png", "images_animadas/verano.jpg"],
      audios: ["images_animadas/volcan.mp3", "images_animadas/voleibol.mp3", "images_animadas/vampiro.mp3", "images_animadas/violin.mp3", "images_animadas/vikingo.mp3", "images_animadas/veinte.mp3", "images_animadas/verano.mp3"],
    },
    W: {
      palabras: ["Waffle", "Web", "Wifi", "Whisky", "Waterpolo", "Walkman"],
      imagenes: ["images_animadas/wafle.png", "images_animadas/web.png", "images_animadas/wifi.png", "images_animadas/whisky.png", "images_animadas/waterpolo.png", "images_animadas/Walkman.png"],
      audios: ["images_animadas/waffle.mp3", "images_animadas/web.mp3", "images_animadas/wifi.mp3", "images_animadas/whisky.mp3", "images_animadas/waterpolo.mp3", "images_animadas/walkman.mp3"],
    },
    X: {
      palabras: ["Xilófono", "Xilófago", "Xenón", "Xiomara", "Xilócopo", "Xerófilo"],
      imagenes: ["images_animadas/xilofono.png", "images_animadas/xilofago.png", "images_animadas/xenon.png", "images_animadas/xiomara.png", "images_animadas/xilocopo.png", "images_animadas/xerofilo.png"],
      audios: ["images_animadas/xilofono.mp3", "images_animadas/xilofago.mp3", "images_animadas/xenon.mp3", "images_animadas/xiomara.mp3", "images_animadas/xilocopo.mp3", "images_animadas/xerofilo.mp3"],
    },
    Y: {
      palabras: ["Yate", "Yeso", "Yegua", "Yema", "Yogurt", "Yunque"],
      imagenes: ["images_animadas/yate.png", "images_animadas/yeso.png", "images_animadas/yegua.png", "images_animadas/yema.png", "images_animadas/yogurt.png", "images_animadas/yunque.png"],
      audios: ["images_animadas/yate.mp3", "images_animadas/yeso.mp3", "images_animadas/yegua.mp3", "images_animadas/yema.mp3", "images_animadas/yogurt.mp3", "images_animadas/yunque.mp3"],
    },
    Z: {
      palabras: ["Zorro", "Zombi", "Zorrillo", "Zoológico", "Zanahoria", "Zapatos"],
      imagenes: ["images_animadas/zorro.png", "images_animadas/zombies.png", "images_animadas/zorrillo.png", "images_animadas/zoologico.jpeg", "images_animadas/zanahoria.png", "images_animadas/zapatos.png"],
      audios: ["images_animadas/zorro.mp3", "images_animadas/zombie.mp3", "images_animadas/zorrillo.mp3", "images_animadas/zoologico.mp3", "images_animadas/zanahoria.mp3", "images_animadas/zapatos.mp3"],
    },
   
  };
  
  let puntuacion = 0;
  let palabraVerificada = false; 
  let palabraActual = ""; 
  let temporizadorIntervalo;
  let tiempoRestante = 60; 
  let temporizadorCorriendo = false; 
  

// Botón Generar Palabra
document.getElementById("generar-palabra").addEventListener("click", () => {
  const consonante = document.getElementById("consonante").value;

  if (!palabrasPorConsonante[consonante]) {
    mostrarModal("Por favor, selecciona una consonante válida.", "⚠️");
    return;
  }

  const { palabras, imagenes, audios } = palabrasPorConsonante[consonante];
  const index = Math.floor(Math.random() * palabras.length);

  const palabra = palabras[index]; 
  palabraActual = palabra; 
  document.getElementById("palabra").textContent = palabra;

  if (palabraActual) {
    document.getElementById("imagen-palabra").src = imagenes[index];
    document.getElementById("imagen-palabra").alt = palabra;
    document.getElementById("imagen-palabra").style.display = "block";
  } else {
    document.getElementById("imagen-palabra").style.display = "none";
  }

  document.getElementById("reproducir-audio").dataset.audio = audios[index];

  cargarJuego(palabra);
  desbloquearInteracciones();

  palabraVerificada = false; 


  // Limpiar el contenido del textarea
  document.getElementById("area-escritura").value = "";
  
    // Reanudar el temporizador si está pausado
    if (!temporizadorCorriendo && tiempoRestante > 0) {
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
  

  let letraArrastrada = null;
  
  function dragStart(e) {
    letraArrastrada = e.target; 
    e.target.classList.add("dragging");
  }
  
  function dragOver(e) {
    e.preventDefault(); // Permitir el evento de soltar
  }
  
  function drop(e) {
    e.preventDefault();
  
    const letraSoltada = e.target; 
  
    // Intercambiar letras
    if (letraArrastrada && letraArrastrada !== letraSoltada) {
      const temp = letraArrastrada.textContent;
      letraArrastrada.textContent = letraSoltada.textContent;
      letraSoltada.textContent = temp;
  
      letraArrastrada.classList.remove("dragging"); 
      letraArrastrada = null; 
    }
  }

  // Función para mostrar el modal con mensaje personalizado
  function mostrarModal(mensaje, emoji = "") {
    const modal = document.getElementById("modal-alerta");
    const mensajeModal = document.getElementById("mensaje-modal");
    const animacionFuegos = document.getElementById("animacion-fuegos");
    const audioCelebracion = document.getElementById("audio-celebracion");
  
    mensajeModal.innerHTML = `<span class="emoticono">${emoji}</span> ${mensaje}`;
    modal.style.display = "block";
  
    // Mostrar animación y reproducir audio para mensajes de éxito
    if (mensaje.includes("¡Correcto! ¡Bien hecho!")) {
      animacionFuegos.style.display = "block";
      audioCelebracion.play();
    } else {
      animacionFuegos.style.display = "none";
    }
  
    // Cerrar modal al hacer clic en la 'X'
    document.getElementById("cerrar-modal").onclick = () => {
      modal.style.display = "none";
      animacionFuegos.style.display = "none"; // Ocultar animación
      audioCelebracion.pause(); // Detener audio
      audioCelebracion.currentTime = 0; // Reiniciar audio
    };
  
    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        animacionFuegos.style.display = "none"; // Ocultar animación
        audioCelebracion.pause(); // Detener audio
        audioCelebracion.currentTime = 0; // Reiniciar audio
      }
    };
  }

 // Verificar Orden
 document.getElementById("verificar-orden").addEventListener("click", () => {
  const palabraCorrecta = document.getElementById("palabra").textContent.trim().toLowerCase(); 
  const letrasContenedor = Array.from(document.getElementById("letras-contenedor").children);
  const palabraOrdenada = letrasContenedor.map((span) => span.textContent).join("").toLowerCase(); 
  const textoEscrito = document.getElementById("area-escritura").value.trim().toLowerCase(); 

  // Función para eliminar acentos
  function eliminarTildes(cadena) {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
  }

  // Normalizar las palabras para eliminar tildes
  const palabraCorrectaSinTildes = eliminarTildes(palabraCorrecta);
  const palabraOrdenadaSinTildes = eliminarTildes(palabraOrdenada);
  const textoEscritoSinTildes = eliminarTildes(textoEscrito);

  console.log("Palabra Correcta (sin tildes):", palabraCorrectaSinTildes);
  console.log("Palabra Ordenada (sin tildes):", palabraOrdenadaSinTildes);
  console.log("Texto Escrito (sin tildes):", textoEscritoSinTildes);

  // Nueva validación para verificar si el textarea está vacío
  if (textoEscrito === "") {
    mostrarModal("Debes escribir la palabra generada antes de verificar.", "📝");
    return; 
  }

  if (palabraOrdenadaSinTildes === palabraCorrectaSinTildes && textoEscritoSinTildes === palabraCorrectaSinTildes) {
    if (!palabraVerificada) {
      puntuacion += 5;
      document.getElementById("puntuacion").textContent = `Puntuación: ${puntuacion}`;
      mostrarModal("¡Correcto! ¡Bien hecho! 🎉", "✅");
      palabraVerificada = true;
      pausarTemporizador();
    } else {
      mostrarModal("Esta palabra ya fue verificada.", "ℹ️");
    }
  } else if (textoEscritoSinTildes !== palabraCorrectaSinTildes) {
    mostrarModal("La palabra escrita no coincide con la generada. Inténtalo de nuevo.", "✍️");
  } else if (palabraOrdenadaSinTildes !== palabraCorrectaSinTildes) {
    mostrarModal("El orden de las letras no es correcto. Inténtalo de nuevo.", "🔠");
  }
});


//Función para reiniciar el juego
function reiniciarJuego() {
  tiempoRestante = 60; 
  puntuacion = 0; 
  palabraVerificada = false; 
  temporizadorCorriendo = false; 
  clearInterval(temporizadorIntervalo); 

  document.getElementById("puntuacion").textContent = `Puntuación: ${puntuacion}`;
  document.getElementById("mensaje-temporizador").textContent = "";
  document.getElementById("tiempo-restante").textContent = tiempoRestante;
  document.getElementById("palabra").textContent = ""; 
  document.getElementById("letras-contenedor").innerHTML = ""; 
  document.getElementById("area-escritura").value = ""; 
  document.getElementById("imagen-palabra").src = ""; 
  document.getElementById("imagen-palabra").alt = ""; 

  desbloquearInteracciones(); 
}

 // Temporizador
function iniciarTemporizador() {
  temporizadorCorriendo = true; 
  document.getElementById("tiempo-restante").textContent = tiempoRestante;
  document.getElementById("mensaje-temporizador").textContent = "";

  // Iniciar el temporizador
  temporizadorIntervalo = setInterval(() => {
    tiempoRestante -= 1;
    document.getElementById("tiempo-restante").textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
      clearInterval(temporizadorIntervalo); 
      document.getElementById("mensaje-temporizador").textContent =
        `¡Tiempo agotado! Puntuación final: ${puntuacion}`;
      bloquearInteracciones(); 
      temporizadorCorriendo = false; 
      mostrarModal("¡Tiempo agotado! ¿Quieres jugar de nuevo?  ", "⏰",);

      // Agregar opción para reiniciar el juego
      const reiniciarBtn = document.createElement("button");
      reiniciarBtn.textContent = "Reiniciar Juego";
      reiniciarBtn.style.marginTop = "10px";
      reiniciarBtn.onclick = () => {
        document.getElementById("modal-alerta").style.display = "none";
        reiniciarJuego();
      };
      document.getElementById("mensaje-modal").appendChild(reiniciarBtn);
    }
  }, 1000);
}
  
  function pausarTemporizador() {
    clearInterval(temporizadorIntervalo); 
    temporizadorCorriendo = false; 
  }
  
  function desbloquearInteracciones() {
    document.querySelectorAll("#letras-contenedor span").forEach((span) => {
      span.draggable = true;
    });
    document.getElementById("verificar-orden").disabled = false; 
    document.getElementById("generar-palabra").disabled = false; 
  }
  
  function bloquearInteracciones() {
    document.querySelectorAll("#letras-contenedor span").forEach((span) => {
      span.draggable = false;
    });
    document.getElementById("verificar-orden").disabled = true; 
    document.getElementById("generar-palabra").disabled = true; 
  }
 