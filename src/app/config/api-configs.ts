import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable(
    { providedIn: 'root' }
)
export class ApiConfig {
    public domain_image: string;
    public domain_api: string;

    constructor(@Inject(DOCUMENT) private document: Document) { 
        switch (this.document.location.host) {
            //case 'beta.hbt.skt-tech.com':
            //    this.domain_image = 'https://hbt.skt-tech.com';
            //    this.domain_api = 'https://hbt.skt-tech.com/apiv2/';
            //   break;
            //case 'uat.hbt.skt-tech.com':
            //    this.domain_image = 'https://uat.hanambus.skt-tech.com';
            //    this.domain_api = 'https://uat.hanambus.skt-tech.com/apiv2/';
            //    break;
            //default:
            //    this.domain_image = 'https://dev.skt-tech.com';
            //    this.domain_api = 'https://dev.skt-tech.com/apiv2/';
            //    break;
            default:
                 this.domain_image = 'http://localhost:8000';
                 this.domain_api = 'http://localhost:8000/api/';
                 break;
        }
    }
}