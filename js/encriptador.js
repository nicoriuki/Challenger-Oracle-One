/* Todas las varibles */
const d = document,
      entrada = d.getElementById("entrada"),
      $error = d.getElementById("error"),
      mensaje = d.getElementById("mensaje"),
      e = "enter",
      i = "imes",
      a = "ai",
      o = "ober",
      u = "utaf",
      error = "Solo se puede ingresar minusculas y sin acentos";
let $input = entrada,
      pattern = "[^a-zñ \n]";
let regex = new RegExp(pattern);

function encrip() {
      let texto = entrada.value;
      if (!regex.exec(texto) == true) {
            mensaje.innerHTML = texto
                  .replace(/e/g, e)
                  .replace(/i/g, i)
                  .replace(/a/g, a)
                  .replace(/o/g, o)
                  .replace(/u/g, u);
      } else {
            mensaje.innerHTML = error;
      }
}
function desencrip() {
      let texto = entrada.value;
      if (!regex.exec(texto) == true) {
            mensaje.innerHTML = texto
                  .replaceAll(e, "e")
                  .replaceAll(i, "i")
                  .replaceAll(a, "a")
                  .replaceAll(u, "u")
                  .replaceAll(o, "o");
      } else {
             mensaje.innerHTML = error;
      }
}

function copiar() {
      mensaje.select();
      d.execCommand("copy");
}

d.addEventListener("keyup", (e) => {
      if (e.target.matches(".entrada")) {
            let regex = new RegExp(pattern);
            if (!regex.exec($input.value) == true) {
                  console.log("bien");
                  $error.classList.remove("activo");
                  $error.classList.add("no-activo");
            } else {
                  console.log("mal");
                  $error.classList.remove("no-activo");
                  $error.classList.add("activo");
            }
      }
});
