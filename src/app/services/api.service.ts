import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IResponse} from "../Interfaces/IResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public base: string = environment.api;
  constructor(
      private http: HttpClient) { }

  public getCategories() {
    return this.http.get<IResponse>(this.base + "categories")

  }
  public getProdByCat(categoryId: string) {
    return this.http.get<IResponse>(this.base + "categories/" + categoryId)

  }
}
