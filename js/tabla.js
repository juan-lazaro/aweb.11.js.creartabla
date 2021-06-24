function crearTabla() {
    //Obteniendo valores del formulario
    var filas = document.getElementById("filas").value; 
    var columnas = document.getElementById("columnas").value;
    var cargando = "Estamos creando su tabla, espere un momento.";
    alert(cargando);

    // Accediendo al body
    var body = document.getElementsByTagName("body")[0];

    // Creando <table> y <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var row = document.createElement("tr");
    var col = document.createElement("td");
    var center= document.createElement("center");

    // Incrustando la tabla en el body
    body.appendChild(tabla);
    // Incrustando dentro de la tabla el TableBody
    tabla.appendChild(tblBody);
    // Atributos para la tabla, dado caso: borde
    tabla.setAttribute("border", "5");
    //Centrando la tabla
    tabla.setAttribute("style", "margin: 0 auto;");

    //Filas
    for (var i = 1; i <= filas; i++) {
        //Colummnas
        var row = document.createElement("tr");//Creando etiqueta tr,fila
        tblBody.appendChild(row);//Apertura de filas

        for (var j = 1; j <= columnas; j++) {
            var col = document.createElement("td");//Creando eiqueta td,columna
            var textoCelda = document.createTextNode("F:" + i + ", C:" + j);//Creando Texto

            row.appendChild(col);//Incrustando <td> en los <tr>
            col.appendChild(textoCelda);//Insertando los msj en los tr o celdas
        }
    }
}