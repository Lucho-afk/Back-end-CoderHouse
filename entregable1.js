//casos de uso:
//CASO 1: poder agregar productos, esos productos no deben ingresar datos nulos, el id es autoincremental
//        los ids no se pueden repetir, el id esopcional se puede agregar un numero especifico sino sera autoincremental

//CASO 2: se necesita un getter para poder visualizar los productos

//CASO 3: se necesita pder buscar los productos por id en caso de no econtrarlo dar un mensaje al usuario

class ProductManager {
  constructor() {
    this.products = [];
  }

  getProductos() {
    return this.products;
  }

  getProductById(id) {
    return (
      this.products.find((producto) => producto.code == id) ??
      `No existe un producto con el ID:${id}`
    );
  }

  addProduct(
    nombreDelProducto,
    descripciónDelProducto,
    precio,
    rutaDeImagen,
    numeroDePiezasDisponibles,
    codigoIdentificador
  ) {
    let nuevoProducto = {
      title: nombreDelProducto,
      description: descripciónDelProducto,
      price: precio,
      thumbnail: rutaDeImagen,
      stock: numeroDePiezasDisponibles,
      code: codigoIdentificador,
    };
    if (
      nuevoProducto.title == null ||
      nuevoProducto.description == null ||
      nuevoProducto.price == null ||
      nuevoProducto.thumbnail == null ||
      nuevoProducto.stock == null
    ) {
      console.log("No se puede ingresar productos con datos vacios");
      return;
    }
    if (codigoIdentificador == null) {
      if (this.products.length == 0) {
        nuevoProducto.code = 1;
      } else {
        nuevoProducto.code = this.products[this.products.length - 1].code + 1;
      }
    } else {
      let repetido = this.products.findIndex(
        (producto) => producto.code == codigoIdentificador
      );
      if (repetido != -1) {
        console.log(
          `El producto que estas tratando de ingresar contiene us identificador repetido ID:${codigoIdentificador}`
        );
        return;
      }
      nuevoProducto.code = codigoIdentificador;
    }

    this.products.push(nuevoProducto);
    console.log(
      `El producto ${nuevoProducto.title} con ID: ${nuevoProducto.code} se agrego correctamente`
    );
  }
}

let pm = new ProductManager();
console.log("\n|--------------------caso de uso 1--------------------|\n");
//producto de index 1
pm.addProduct(
  "lays",
  "papas fritas",
  350,
  "http://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/779031000143111-327d3cc4d519e71bfc16270457539499-640-0.jpg",
  11
);

//producto de index 2
pm.addProduct(
  "cheetos",
  "chizitos",
  350,
  "https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/c/h/cheetos-queso-x-165grs.png",
  40
);

//producto de index 3
pm.addProduct(
  "doritos",
  "nachos",
  460,
  "http://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/doritos1-b041b77155f8e6e1b016220415349002-640-0.jpg",
  23
);

//producto de index 12, para ingresar un numero
pm.addProduct(
  "lays",
  "papas fritas",
  350,
  "http://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/779031000143111-327d3cc4d519e71bfc16270457539499-640-0.jpg",
  11,
  12
);

//producto vacio
pm.addProduct();
pm.addProduct("lays", "papas fritas", 350);

//producto repetido
pm.addProduct(
  "lays",
  "papas fritas",
  350,
  "http://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/779031000143111-327d3cc4d519e71bfc16270457539499-640-0.jpg",
  11,
  1
);

console.log("\n|--------------------caso de uso 2--------------------|\n");
console.log("Productos en sistema:");
console.log(pm.getProductos());

console.log("\n|--------------------caso de uso 3--------------------|\n");
console.log(pm.getProductById(1));
console.log(pm.getProductById(27));
