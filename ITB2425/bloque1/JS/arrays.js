function init() {
  console.log("Hola");
  arrayPares = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4];
  array = ["Rodriguez", "8", 9, "5", 4, "Clara"];
  console.log("pepe");
  añadirAlDom("result1", sumarPares(arrayPares));
  array2(array)
  añadirAlDom("result2", hacerMedia(array));

  
}

function añadirAlDom(id, resultado) {
  const container = document.getElementById(id);
  let p = document.createElement("p");
  container.appendChild(p);
  p.textContent = resultado;
  p.setAttribute("class", "result");
}

function sumarPares(array) {
  let resultado = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      resultado += array[i];
    }
  }
  return resultado;
}

// ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara']) → Clara,Rodriguez,8,9,5,4,6.5

function array2(arr2) {
  let ultimoElemento = arr2.pop();
  arr2.unshift(ultimoElemento);
  return arr2;
}

function hacerMedia(arr2) {
  let media = 0;
  let suma = 0;
  for (let i = 2; i < arr2.length; i++) {
    if (!isNaN(arr2[i])) {
      media += parseInt(arr2[i]);
      suma++;
    }
  }
  media /= suma;
  arr2.push(media);
  return arr2;
}
