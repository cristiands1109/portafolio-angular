import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdxInterface } from '../interfaces/productosidx.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  producto: ProductoIdxInterface [] = [];
  productofil: ProductoIdxInterface [] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-44a5c.firebaseio.com/productos_idx.json').subscribe((res: ProductoIdxInterface []) => {
        /* console.log(res); */
        this.producto = res;
        setTimeout(() => {
          this.cargando = false;
          resolve();
        }, 1000);
      });
    });

  }

  getProducto(id: string) {

    return this.http.get(`https://angular-html-44a5c.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto(termino: string) {

    if (this.producto.length === 0) {
      // cargar productos
        this.cargarProductos().then( () => {
          // ejecutar despues de tener los producto
          // aplicar filtro
          this.productoFiltrado( termino );
        });
    } else {
      this.productoFiltrado( termino );
    }
  }

  private productoFiltrado(termino: string) {
    // console.log(this.producto);
    this.productofil = [];
    termino = termino.toLowerCase();
    this.producto.forEach( prod => {
      const tituloLower = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf (termino) >= 0 || tituloLower.indexOf (termino) >= 0) {
          this.productofil.push(prod);
      }
    });
  }
}
