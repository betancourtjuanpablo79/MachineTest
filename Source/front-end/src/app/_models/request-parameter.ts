export class RequestParameter {
  bookName:   string;
  authorName: string;
  price: number;
  fileName: string;

  public constructor(init?: Partial<RequestParameter>) {
    Object.assign(this, init);

  }
}
