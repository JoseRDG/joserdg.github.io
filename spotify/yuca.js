// URL del CSV publicado desde Google Sheets (reemplaza con el tuyo)
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQqvVQPKVpMt-PB4XE9PLFxyPwkbAQhFEIBI19frJNBsIOy1tl6nPjpEZ7BipdB4roeoofZCetNR8L1/pub?gid=0&single=true&output=csv";

let canciones = [];

// Normaliza texto (quita acentos y pasa a minúsculas)
function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// Cargar datos desde Google Sheets (CSV) con PapaParse
Papa.parse(SHEET_URL, {
  download: true,
  header: true,
  complete: function(results) {
    canciones = results.data.map(row => ({
      nombres: row.nombres.split(",").map(n => n.trim()), // soporta varios nombres
      artista: row.artista,
      cancion: row.cancion,
      link: row.link
    }));
    console.log("Canciones cargadas:", canciones);
  }
});

// Evento de búsqueda
input.addEventListener("input", () => {
  const query = normalizarTexto(input.value.trim());
  resultsDiv.innerHTML = "";

  if (query.length === 0) return;

  const resultados = canciones.filter(c =>
    c.nombres.some(nombre => normalizarTexto(nombre).startsWith(query))
  );

  if (resultados.length === 0) {
    resultsDiv.innerHTML = `
      <div class="result">
        <div class="result-header">
          <strong class="lato-bold color-1">Sin coincidencias</strong>
        </div>
        <div class="result-body">
          <p>No encontramos coincidencias 😢</p>
        </div>
      </div>
    `;
    return;
  }

  resultados.forEach(r => {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");

    resultDiv.innerHTML = `
      <div class="result-header">
        <p><strong class="lato-bold color-1">Coincidencia encontrada:</strong></p>
        <p>${r.nombres.join(", ")}</p>
      </div>
      <div class="result-body">
        <p class="result-body-cancion"><strong class="lato-bold color-1">Canción:</strong></p>
        <p class="lato-regular result-body-mar-bo">${r.cancion}</p>
        <p class="result-body-artista"><strong class="lato-bold color-1">Artista:</strong></p>
        <p class="lato-regular result-body-mar-bo">${r.artista}</p>        
      </div>
      <div class="result-footer">
        <a href="${r.link}" target="_blank" class="spotify-btn lato-regular" title="Escuchar ${r.cancion} en Spotify">Escuchar en Spotify</a>
        <p class="lato-regular result-body-mar-bo txt-small">*Abrir desde la app para ir directo a la playlist</p>  
      </div>
    `;

    resultsDiv.appendChild(resultDiv);
  });
});