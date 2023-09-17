import { Component } from '@angular/core';
import * as XLSX from 'xlsx'
import { MessageService } from 'primeng/api';
import { MachineTestService } from './_services/machine-test.services';
import { BookModel } from './_models/book-model';
import { LibraryModel } from './_models/library-model';
import { AuthorModel } from './_models/author-model';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfigLoaderService } from './_services/config-loader.services';
import { UploadEvent } from 'primeng/fileupload';
import { Variables } from './_models/global-variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'MachineTest';
  excelData : any;
  library : LibraryModel;

  isShowing: boolean;
  fileList : string[] =[];
  validateUrl: string;


  constructor(private messageService: MessageService,
      private machineTestService: MachineTestService,
      private appConfig: ConfigLoaderService
    ) { }

  ngOnInit(): void {
    this.validateUrl = `${this.appConfig.get.base_url}/api/MachineTest/validateConnection`;
  }

  onSelect(event: any){

    this.isShowing = false;
    let file = event.files[0];

    let fileReader =  new FileReader();
    fileReader.readAsBinaryString(file);

    this.machineTestService.uploadFile(file).subscribe({

      next: (data) => {
          if(data.isSuccess){

            this.library = data.library;
            Variables.fileName = file.name;
            this.fileList.push(file.name);

            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded' });
            this.isShowing = true;
          }
          else{
            this.messageService.add({ severity: 'error', summary: 'Error', detail: `${data.message}` });
          }
        },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Error uploading file.', detail: `Please confirm the API is running on ${this.appConfig.get.base_url}, or change on assets/appconfig.json` });
        this.isShowing = false;
      }
    }
    );

  }

}
