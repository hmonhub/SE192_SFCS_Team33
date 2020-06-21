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
            default:
                 this.domain_image = 'http://localhost:8000';
                 this.domain_api = 'http://localhost:8000/api/';
                 break;
        }
    }
}