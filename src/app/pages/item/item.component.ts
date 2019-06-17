import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDes } from '../../interfaces/productodes.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  productoDes: ProductoDes;
  id: string;
  constructor( private route: ActivatedRoute, public _ps: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this._ps.getProducto(parametros['id']).subscribe((producto: ProductoDes) => {
        this.id = parametros['id'];
        this.productoDes = producto;
      });
    });
  }

}
