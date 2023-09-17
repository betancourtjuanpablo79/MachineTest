import { Component, Input } from '@angular/core';
import { AuthorModel } from 'src/app/_models/author-model';
import { BookModel } from 'src/app/_models/book-model';
import { Variables } from 'src/app/_models/global-variables';
import { LibraryModel } from 'src/app/_models/library-model';
import { RequestParameter } from 'src/app/_models/request-parameter';
import { ACsService } from 'src/app/_services/acs.services';

@Component({
  selector: 'app-authors-who-wrote',
  templateUrl: './authors-who-wrote.component.html',
  styleUrls: ['./authors-who-wrote.component.scss']
})
export class AuthorsWhoWroteComponent {
  @Input() library : LibraryModel;
  authorsWhoWrote : AuthorModel[] =[];
  selectedBook: BookModel;

  constructor(private acsService : ACsService){};

  ngOnInit(): void {
    let bookResult = this.library.books.filter(book => book.name=='City Crime');
    if(bookResult.length>0){
      this.selectedBook = bookResult[0];
    }
    this.filterAuthorWhoWrote('City Crime');
  }
  filterAuthorWhoWrote(bookName : string){

    const request = new RequestParameter({bookName:bookName, fileName: Variables.fileName});

    this.acsService.filterAuthorWhoWrote(request)
      .pipe()
      .subscribe(data => {
        this.authorsWhoWrote = data;
      })

    //Note: Alternative to filter without consume API
    // let books = this.library.books.filter(book => book.name == bookName);

    // if(books.length>0){
    //   let bookId = books[0].id;
    //   this.authorsWhoWrote = this.library.authors.filter(author => this.library.associations.filter(ass => ass.authorId == author.id && ass.bookId == bookId).length>0);
    // }
  }

  selectBook(){
    let book = this.selectedBook.name;
    this.filterAuthorWhoWrote(book);
  }
}
