import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  products: any[] = [];
  totalPages = 0;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    const tempProduct: any = await this.http.get('http://myshopdev.azurewebsites.net/api/product?pageSize=12&pageNumber=0').toPromise();
    console.log(tempProduct);
    for (const l of tempProduct.products){
      this.products.push(l);
    }
    this.totalPages = tempProduct.totalRecordCount / 12;
  }

  markWishlist(){

  }

}
