import { AuthorModel } from "./author-model";

export class BookModel {
  id:   number;
  name: string;
  price: number;

  public constructor(init?: Partial<BookModel>) {
    Object.assign(this, init);

  }
}
