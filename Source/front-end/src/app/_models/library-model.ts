import { AuthorModel } from "./author-model";
import { BookAuthorAssociationModel } from "./book-author-association-model";
import { BookModel } from "./book-model";

export class LibraryModel {
  books:   BookModel[];
  authors: AuthorModel[];
  associations: BookAuthorAssociationModel[];

  public constructor(init?: Partial<LibraryModel>) {
    Object.assign(this, init);
    this.authors = [];
    this.books =[];
    this.associations =[];
  }
}
