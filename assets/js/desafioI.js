// Función asíncrona para obtener posts desde la API
async function fetchPosts() {
  try {
    console.log("Obteniendo posts desde la API...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("No se pudo obtener los datos :(");
    }

    // Respuesta a formato JSON
    const data = await response.json();
    console.log("Datos obtenidos con éxito:", data);
    return data;
  } catch (error) {
    // Manejar errores de obtener posts
    console.error("Error al obtener los datos:", error);
    throw error;
  }
}

// Función elementos de los post
function createPostElements(post) {
  const li = document.createElement("li");
  li.textContent = post.title;

  const p = document.createElement("p");
  p.textContent = post.body;

  li.appendChild(p);
  return li;
}

function showPosts(posts) {
  try {
    console.log("Mostrando en HTML...");

    const container = document.getElementById("post-data");
    const ul = document.createElement("ul");

    // Iterar
    posts.forEach((post, index) => {
      console.log(`Procesando post ${index + 1}: ${post.title}`);
      const li = createPostElements(post);
      ul.appendChild(li);
    });

    // Limpiar el contenedor antes de agregar los nuevos posts
    container.innerHTML = "";
    container.appendChild(ul);

    console.log("Posts mostrados correctamente");
  } catch (error) {
    console.error("Error al renderizar:", error);
  }
}
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  try {
    // Log para indicar que se está iniciando el proceso
    console.log("Iniciando obtención y vista de posts...");

    // Obtener info y mostrar en HTML
    const posts = await fetchPosts();
    showPosts(posts);

    console.log("Completado correctamente");
  } catch (error) {
    console.error("Error:", error);
  }
});
