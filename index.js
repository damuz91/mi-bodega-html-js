document.addEventListener('DOMContentLoaded', function() {
  console.log("Iniciando sistema de registro de productos");
  cargarBaseDeDatos()
});

function cargarBaseDeDatos(){
  // Comprobar que el localstorage es accessible
  if(localStorage === undefined){
    alert("No hay acceso a la base de datos")
    return
  }
  // Cargar base de datos
  var productos = localStorage.getItem('productos');
  if(productos === null){
    console.log("No hay productos en la base de datos")
    return
  }
  console.log(`Se encontraron ${productos.length} productos en la base de datos`)
  // Convertir string a array
  productos = JSON.parse(productos);
  // Agregar productos a la tabla
  var tabla = document.getElementById('productos');
  for(var i = 0; i < productos.length; i++){
    var fila = tabla.insertRow(-1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    celda1.innerHTML = productos[i].id;
    celda2.innerHTML = productos[i].nombre;
    celda3.innerHTML = productos[i].precio;
    celda4.innerHTML = "<a href='#' class='btn btn-danger' onclick='eliminarProducto(this)'>Eliminar</a>";
  }
}

function agregarProducto(){
  // Iniciar variables
  var idProducto = document.getElementById('id');
  var nombre = document.getElementById('producto');
  var precio = document.getElementById('precio');
  // Validar que no sean vacios
  if(idProducto == "" || nombre == "" || precio == ""){
    alert("No puede dejar campos vacios");
    return
  }

  // Agregar producto a la tabla
  var tabla = document.getElementById('productos');
  var fila = tabla.insertRow(-1);
  var celda1 = fila.insertCell(0);
  var celda2 = fila.insertCell(1);
  var celda3 = fila.insertCell(2);
  var celda4 = fila.insertCell(3);
  celda1.innerHTML = idProducto.value;
  celda2.innerHTML = nombre.value;
  celda3.innerHTML = precio.value;
  celda4.innerHTML = "<a href='#' class='btn btn-danger' onclick='eliminarProducto(this)'>Eliminar</a>";
  console.log("Se agregó un producto")

  // Guardar en la base de datos
  var productos = localStorage.getItem('productos');
  if(productos === null){
    productos = [];
  }
  else{
    productos = JSON.parse(productos);
  }
  productos.push({id: idProducto.value, nombre: nombre.value, precio: precio.value});
  localStorage.setItem('productos', JSON.stringify(productos));
  console.log("Se guardó un producto en la base de datos")

  // Limpiar campos
  idProducto.value = "";
  nombre.value = "";
  precio.value = "";
}

function eliminarProducto(producto){
  // Eliminar producto de la tabla
  var fila = producto.parentNode.parentNode;
  
  // Eliminar producto de la base de datos
  var productos = localStorage.getItem('productos');
  if(productos === null){
    productos = [];
  }
  else{
    productos = JSON.parse(productos);
  }
  var id = fila.cells[0].innerHTML;
  for(var i = 0; i < productos.length; i++){
    if(productos[i].id == id){
      productos.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('productos', JSON.stringify(productos));
  console.log("Se eliminó un producto de la base de datos")

  fila.parentNode.removeChild(fila);
  console.log("Se eliminó un producto de la tabla")
}