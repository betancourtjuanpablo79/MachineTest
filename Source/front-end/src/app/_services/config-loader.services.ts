import {Inject, Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import { AppConfiguration } from '../_models/app-configuration';
import '../_helpers/extensions';


@Injectable({providedIn: 'root'})
export class ConfigLoaderService {

  public errorDetail = '';
  private httpClient: HttpClient;
  private config: AppConfiguration;


  constructor(handler: HttpBackend, @Inject(APP_BASE_HREF) private baseHref: string) {
    this.httpClient = new HttpClient(handler);
  }


  get get() {
    return this.config;
  }


  public loadConfig() {
    const configUrl = this.trimFirstSlashFromUrl(this.baseHref);
    //const configUrl = this.baseHref;

    return this.httpClient.get(`${configUrl}assets/appconfig.json`)
      .pipe(settings => settings)
      .toPromise()
      .then(settings => {
        this.config = settings as AppConfiguration;

      });
  }

  trimFirstSlashFromUrl(baseUrl: string) {
    if (baseUrl.isNullOrWhitespace()) {
      return null;
    } else if (baseUrl.length > 1 && baseUrl[0] === '/') {
      const url = baseUrl.substring(1, baseUrl.length);

      return `${url}/`;
    }

    return '';
  }

}
