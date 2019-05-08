function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')


  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al deslizador
  deslizador_rojo = document.getElementById('deslizador_rojo')
  deslizador_verde = document.getElementById('deslizador_verde')
  deslizador_azul = document.getElementById('deslizador_azul')
  grey_button = document.getElementById('grey')






  //-- Valor del deslizador
  range_value_rojo = document.getElementById('range_value_rojo')
  range_value_verde = document.getElementById('range_value_verde')
  range_value_azul = document.getElementById('range_value_azul')


  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Funcion de retrollamada del deslizador
  deslizador_rojo.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_rojo.innerHTML = deslizador_rojo.value

    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgDataRojo = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgDataRojo.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador_rojo.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgDataRojo, 0, 0);
  }


    //////////verde//////////////
    ////////////////////////////
  deslizador_verde.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_verde.innerHTML = deslizador_verde.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgDataVerde = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgDataVerde.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador_verde.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+1] > umbral)
        data[i+1] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgDataVerde, 0, 0);
  }

  deslizador_azul.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_azul.innerHTML = deslizador_azul.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgDataAzul = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgDataAzul.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador_azul.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+2] > umbral)
        data[i+2] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgDataAzul, 0, 0);
  }

  grey_button.onclick=()=>{
    var imgDataGrhalf = ctx.getImageData(0, canvas.height/2, canvas.width, canvas.height);
    //-- Obtener el array con todos los píxeles
    var data = imgDataGrhalf.data;
    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      var r = data[i];
      var g = data[i+1];
      var b = data[i+2];
      var v = 0.2126*r + 0.7152*g + 0.0722*b;
      data[i] = data[i+1] = data[i+2] = v
      }
ctx.putImageData(imgDataGrhalf, 0, canvas.height/2);
}





}
