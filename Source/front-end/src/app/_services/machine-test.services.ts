import { Injectable } from "@angular/core";
import { ApiHttpService } from "./api-http.service";
import { BookModel } from "../_models/book-model";
import { Observable, map } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MachineTestService {
  constructor(private http: ApiHttpService) { }

  saveData(data: BookModel): Observable<any>{
    return this.http
      .post(`/machineTest/saveBook`, data)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  uploadFile(file : File):Observable<any>{
    const formData = new FormData();

    formData.append("file",file,file.name);

    const headers = new HttpHeaders().append('Content-Disposition','multipart/form-data');
    return this.http.post(`/machineTest/uploadFile`,formData, {headers});
  }
}
