import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ConfigLoaderService} from './_services/config-loader.services';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import {ApiHttpService} from './_services/api-http.service'
import { CardModule } from 'primeng/card';
import { BooksWrittenByComponent } from './components/books-written-by/books-written-by.component';
import { AuthorsWhoWroteComponent } from './components/authors-who-wrote/authors-who-wrote.component';
import { AuthorsWhoHaveNotWroteComponent } from './components/authors-who-have-not-wrote/authors-who-have-not-wrote.component';
import { AuthorsVsBooksComponent } from './components/authors-vs-books/authors-vs-books.component';
import { BooksPriceComponent } from './components/books-price/books-price.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksWrittenByComponent,
    AuthorsWhoWroteComponent,
    AuthorsWhoHaveNotWroteComponent,
    AuthorsVsBooksComponent,
    BooksPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputNumberModule,
    MessageModule,
    MessagesModule,
    TableModule,
    ToastModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useFactory: CaseInsensitiveBaseHrefFactory, deps: [PlatformLocation]},
    {provide: APP_INITIALIZER, useFactory: appConfigurationFactory, deps: [ConfigLoaderService], multi: true},
    ApiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function appConfigurationFactory(configsLoaderService: ConfigLoaderService) {
  return (): Promise<any> => configsLoaderService.loadConfig();
}

function CaseInsensitiveBaseHrefFactory(platformLocation: PlatformLocation): string {
  const path = platformLocation.pathname;
  const baseHrefFromDOM = platformLocation.getBaseHrefFromDOM();

  const baseHref = baseHrefFromDOM.replace(/(^\/*|\/*$)/g, '');

  const caseInSensitiveBaseHrefRegexp = new RegExp(`^\/*${baseHref}`, 'i');
  const matchedBaseHref = path.match(caseInSensitiveBaseHrefRegexp);

 if (matchedBaseHref) {
    const remainingPath = path.slice(matchedBaseHref[0].length);
    const isValidMatch = !remainingPath || !!remainingPath.match(/^[\/\s]/);
    return isValidMatch ? matchedBaseHref[0] : baseHrefFromDOM;
  }
  return baseHrefFromDOM;
}
