import { Component, Input } from '@angular/core';
import { AuthorModel } from 'src/app/_models/author-model';
import { Variables } from 'src/app/_models/global-variables';
import { LibraryModel } from 'src/app/_models/library-model';
import { RequestParameter } from 'src/app/_models/request-parameter';
import { ACsService } from 'src/app/_services/acs.services';

@Component({
  selector: 'app-authors-who-have-not-wrote',
  templateUrl: './authors-who-have-not-wrote.component.html',
  styleUrls: ['./authors-who-have-not-wrote.component.scss']
})
export class AuthorsWhoHaveNotWroteComponent {
  @Input() library : LibraryModel;
  authorsWhoHaveNotWrote : AuthorModel[] =[];

  constructor(private acsService : ACsService){};

  ngOnInit(): void {
    this.filterAuthorWhoHaveNotWrote();
  }

  filterAuthorWhoHaveNotWrote(){

    const request = new RequestParameter({ fileName: Variables.fileName});

    this.acsService.filterAuthorWhoHaveNotWrote(request)
      .pipe()
      .subscribe(data => {
        this.authorsWhoHaveNotWrote = data;
      })

    //Note: Alternative to filter without consume API
    //this.authorsWhoHaveNotWrote = this.library.authors.filter(author => this.library.associations.filter(ass => ass.authorId == author.id).length==0);
  }
}
