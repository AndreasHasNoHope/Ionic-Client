import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ICategory} from "../../Interfaces/ICategory";
import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categories: ICategory[] = [];
  constructor(
      private api: ApiService,
      private alertController: AlertController
  ) { }

  ngOnInit() {
    this.api.getCategories().subscribe(res => {
      if (res.success) {
        this.categories = res.categories
      } else {
        this.presentAlert(res.msg)
      }

    });
  }
  async presentAlert(msg: string = "") {
    const alert = await this.alertController.create({
      header: 'Message',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
