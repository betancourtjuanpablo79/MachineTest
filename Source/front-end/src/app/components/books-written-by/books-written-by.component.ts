import { Component, Input, OnInit } from '@angular/core';
import { AuthorModel } from 'src/app/_models/author-model';
import { BookModel } from 'src/app/_models/book-model';
import { Variables } from 'src/app/_models/global-variables';
import { LibraryModel } from 'src/app/_models/library-model';
import { RequestParameter } from 'src/app/_models/request-parameter';
import { ACsService } from 'src/app/_services/acs.services';


@Component({
  selector: 'app-books-written-by',
  templateUrl: './books-written-by.component.html',
  styleUrls: ['./books-written-by.component.scss']
})
export class BooksWrittenByComponent {
  @Input() library : LibraryModel;
  booksWrittenBy : BookModel[] = [];
  selectedAuthor: AuthorModel;

  constructor(private acsService : ACsService){};

  ngOnInit(): void {
    let authorResult = this.library.authors.filter(author => author.name=='Silver Couple');
    if(authorResult.length>0){
      this.selectedAuthor = authorResult[0];
    }


    this.filterBooksByAuthor('Silver Couple');

  }

  filterBooksByAuthor(authorName : string){

    const request = new RequestParameter({authorName:authorName, fileName: Variables.fileName});

    this.acsService.filterBooksByAuthor(request)
      .pipe()
      .subscribe(data => {
        this.booksWrittenBy = data;
      })

    // Note: Alternative to filter without consume the API
    // let authors = this.library.authors.filter(author => author.name == authorName);

    // if(authors.length>0){
    //   let authorId = authors[0].id;
    //   this.booksWrittenBy = this.library.books.filter(book => this.library.associations.filter(ass => ass.bookId == book.id && ass.authorId == authorId).length>0);
    // }
  }

  selectAuthor(){
    let author = this.selectedAuthor.name;
    this.filterBooksByAuthor(author);
  }
}
