import { Component, Input } from '@angular/core';
import { BookModel } from 'src/app/_models/book-model';
import { Variables } from 'src/app/_models/global-variables';
import { LibraryModel } from 'src/app/_models/library-model';
import { RequestParameter } from 'src/app/_models/request-parameter';
import { ACsService } from 'src/app/_services/acs.services';

@Component({
  selector: 'app-books-price',
  templateUrl: './books-price.component.html',
  styleUrls: ['./books-price.component.scss']
})
export class BooksPriceComponent {
  @Input() library : LibraryModel;
  booksPrice: BookModel[] =[];
  bookPrice: number;

  constructor(private acsService : ACsService){};

  ngOnInit(): void {
    this.bookPrice =100;
    this.filterByValue(this.bookPrice);
  }
  filterByValue (price : number){

    const request = new RequestParameter({price:price, fileName: Variables.fileName});

    this.acsService.filterByValue(request)
      .pipe()
      .subscribe(data => {
        this.booksPrice = data;
      })

    //Note: Alternative to filter without consume API
    //this.booksPrice = this.library.books.filter(book => book.price>price);
  }
}
