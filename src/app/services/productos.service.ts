import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdxInterface } from '../interfaces/productosidx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  producto: ProductoIdxInterface [] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {
    this.http.get('https://angular-html-44a5c.firebaseio.com/productos_idx.json').subscribe((res: ProductoIdxInterface []) => {
      console.log(res);
      this.producto = res;
      setTimeout(() => {
        this.cargando = false;
      }, 1000);
    });
  }
}
