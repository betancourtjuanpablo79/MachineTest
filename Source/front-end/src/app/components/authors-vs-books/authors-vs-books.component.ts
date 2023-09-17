import { Component, Input } from '@angular/core';
import { AuthorModel } from 'src/app/_models/author-model';
import { Variables } from 'src/app/_models/global-variables';
import { LibraryModel } from 'src/app/_models/library-model';
import { RequestParameter } from 'src/app/_models/request-parameter';
import { ACsService } from 'src/app/_services/acs.services';

@Component({
  selector: 'app-authors-vs-books',
  templateUrl: './authors-vs-books.component.html',
  styleUrls: ['./authors-vs-books.component.scss']
})
export class AuthorsVsBooksComponent {
  @Input() library : LibraryModel;
  authorsVsBooks: AuthorModel[]=[];

  constructor(private acsService : ACsService){};

  ngOnInit(): void {
    this.filterAuthorVsBooks();
  }

  filterAuthorVsBooks(){

    const request = new RequestParameter({ fileName: Variables.fileName});

    this.acsService.filterAuthorVsBooks(request)
      .pipe()
      .subscribe(data => {
        this.authorsVsBooks = data;

        this.authorsVsBooks.forEach(author => {

          let books = this.library.books.filter(book => this.library.associations.filter(ass => ass.bookId==book.id && ass.authorId==author.id).length>0 );
          author.books = books.map(ma => ma.name).join(", ");
          author.qty = books.length;
        })
      })

    //Note: Alternative to filter without consume the API
    //this.authorsVsBooks = [...this.library.authors];
    // this.authorsVsBooks.forEach(author => {

    //   let books = this.library.books.filter(book => this.library.associations.filter(ass => ass.bookId==book.id && ass.authorId==author.id).length>0 );
    //   author.books = books.map(ma => ma.name).join(", ");
    //   author.qty = books.length;
    // })

  }
}
