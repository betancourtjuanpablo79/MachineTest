import { Injectable } from "@angular/core";
import { ApiHttpService } from "./api-http.service";
import { BookModel } from "../_models/book-model";
import { Observable, map } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { RequestParameter } from "../_models/request-parameter";
import { AuthorModel } from "../_models/author-model";

@Injectable({
  providedIn: 'root'
})
export class ACsService {
  constructor(private http: ApiHttpService) { }

  filterBooksByAuthor(request: RequestParameter): Observable<BookModel[]>{
    return this.http
      .post(`/acs/filterBooksByAuthor`, request)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  filterAuthorWhoWrote(request: RequestParameter): Observable<AuthorModel[]>{
    return this.http
      .post(`/acs/filterAuthorWhoWrote`, request)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  filterAuthorWhoHaveNotWrote(request: RequestParameter): Observable<AuthorModel[]>{
    return this.http
      .post(`/acs/filterAuthorWhoHaveNotWrote`, request)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  filterAuthorVsBooks(request: RequestParameter): Observable<AuthorModel[]>{
    return this.http
      .post(`/acs/filterAuthorVsBooks`, request)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  filterByValue(request: RequestParameter): Observable<BookModel[]>{
    return this.http
      .post(`/acs/filterByValue`, request)
      .pipe(map((response: any) => {
        return response;
      }))
  }

}
