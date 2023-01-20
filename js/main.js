class Producto{
  constructor(nombre,precio,cantidad){
    this.nombre=nombre;
    this.precio=parseFloat(precio);
    this.cantidad=cantidad;
    this.disponible=true;


  }
  sumarIva(){
    return this.precio * 1.21;

  }
  vender(){
    this.disponible=false;
  }
  precioSugerido(){
    return this.precio *1.21*1.25;
  }
}

var arrayProductos= [];
do{
  var comprobacion = prompt('Ingrese su producto o FIN para terminar');
  if(comprobacion==='fin'||comprobacion==="Fin"||comprobacion==="FIN"){
    break;
  }else{
nombreP = comprobacion;
var precioP=prompt('ingrese el precio del producto');
var cantidadP=prompt('ingrese la cantidad del producto');

arrayProductos.push(new Producto(nombreP,precioP,cantidadP));
  }
}
while (comprobacion !='fin'||comprobacion!="Fin"||comprobacion!="FIN")
alert(arrayProductos);

for (var producto of arrayProductos) {
document.write("<ul><li><h3>Nombre:" + producto.nombre + '</h3><li>');
document.write("<li><h3>Precio: " + producto.precio + '</h3><li>');
document.write("<li><h3>Cantidad: " + producto.cantidad + '</h3><li>');
document.write("<li><h3>Precio con IVA: " + producto.sumarIva() + '</h3></li></ul></br>');

alert(producto.nombre);
alert(producto.precio);
alert(producto.cantidad);
alert(producto.sumarIva());
}


var pocoStock = arrayProductos.filter(producto=>producto.cantidad<=5)
alert('productos con poco stock, comprar otra vez.')
console.log(pocoStock);
document.write("<h3> Lista de Productos con poco Stock (menos de 5 unidades)</h3>");

for (var producto of pocoStock){
  document.write("<ul><li><h3>Nombre:" + producto.nombre + "</h3></li>")
  document.write("<ul><li><h3>precio:" + producto.precio + "</h3></li>")
  
}  

var sinStock=arrayProductos.filter(producto.cantidad==0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin Stock (disponible=false):</h3>");

for (var producto of sinStock){
  document.write("<ul><li><h3>Nombre:" + producto.nombre + "</h3></li>")
  document.write("<ul><li><h3>precio:" + producto.precio + "</h3></li>")
  document.write("<ul><li><h3>cantidad:" + producto.cantidad + "</h3></li></ul></br>")
}

var Ingresado = prompt('Ingresar el producto que queremos buscar');
var productoIngresado = arrayProductos.filter(producto=> producto.nombre.includes(Ingresado))
console.log(productoIngresado);
document.write("<h3>Lista de Productos Ingresados para busqueda");

for (var producto of prodIngresado){
  document.write("<ul><li><h3>Nombre:" + producto.nombre + "</h3></li>")
  document.write("<ul><li><h3>Detalle:" + producto.precio + "</h3></li>")
  document.write("<ul><li><h3>Cantidad:" + producto.cantidad + "</h3></li></ul></br>")
}

var ordenadosCantidad = [];
ordenadosCantidad = arrayProductos.map(elemento=>elemento);
ordenadosCantidad.sort(function(a,b){
  return a.cantidad- b.cantidad;

});
console.log('Ordenados por cantidad Ascendente:');
console.log(ordenadosCantidad);
document.write("<h3>Lista de Productos ordenados por cantidad:</h3>");

for (var producto of ordenadosCantidad){
  document.write("<ul><li><h3>Nombre:" + producto.nombre + "</h3></li>")
  document.write("<ul><li><h3>precio:" + producto.precio + "</h3></li>")
  document.write("<ul><li><h3>Cantidad:" + producto.cantidad + "</h3></li></ul></br>");

}
var ordenadosPrecio =[];
ordenadosPrecio=arrayProductos.map(elemento=>elemento);
var ordenadosPrecio= arrayProductos;

ordenadosPrecio.sort(function(a,b){
  return a.precio - b.precio;
});
console.log('ordenados por precios ascendentes');
console.log(ordenadosPrecio);
document.write("<h3> Lista de productos ordenados por precio ascendiente </h3>")

for (var producto of ordenadosPrecio){
  document.write("<ul><li><h3>Nombre:" + producto.nombre + "</h3></li>")
  document.write("<ul><li><h3>precio:" + producto.precio + "</h3></li>")
  document.write("<ul><li><h3>Cantidad:" + producto.cantidad + "</h3></li></ul></br>");
}
