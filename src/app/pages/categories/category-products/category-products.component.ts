import { Component, OnInit } from '@angular/core';
import {ICategory} from "../../../Interfaces/ICategory";
import {IProduct} from "../../../Interfaces/IProduct";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit {
  public category: ICategory = null;
  public products: IProduct[] = [];
  public ImageBase: string = "https"
  constructor(
      private api: ApiService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProdByCat(params.categoryId).subscribe(res =>{
        if (res.success){

        }
      })
    });

  }

}
