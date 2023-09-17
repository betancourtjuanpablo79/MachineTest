import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigLoaderService } from './config-loader.services';

@Injectable()
export class ApiHttpService {

  constructor(private http: HttpClient, private appConfig: ConfigLoaderService) { }

  public get(url: string, options?: any) {

    let baseUrl = this.normalizeUrl(url);
    return this.http.get(baseUrl, options);
  }
  public post(url: string, data: any, options?: any) {
    let baseUrl = this.normalizeUrl(url);
    return this.http.post(baseUrl, data, options);
  }


  normalizeUrl(url: string): string {

    let endpoint = this.appConfig.get.base_url;
    endpoint = `${endpoint}/api${url}`;
    return endpoint;
  }
}
