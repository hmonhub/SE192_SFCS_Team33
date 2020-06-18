import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthStorage } from '../helpers/auth-storage';

@Injectable()
export class HttpConfigService {
    private _httpOptions = {
        headers: {},
        params: null
    }

    constructor(
        private http: HttpClient,
        private authStorage: AuthStorage,
    ) {
        this.initHttpHeader();
    }

    initHttpHeader() {
        let currentUser = this.authStorage.getCurrentUser();
        if (currentUser == null) {
            this._httpOptions.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': '',
            });
        }
        else {
            this._httpOptions.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + currentUser.token,
            });
        }
    }

    httpGet(url) {
        return this.http.get(url, this._httpOptions);
    }

    httpGetWithParams(url, params) {
        this._httpOptions.params = new HttpParams();
        for (var param of params) {
            this._httpOptions.params = this._httpOptions.params.append(param.key, param.value);
        }

        return this.http.get(url, this._httpOptions);
    }

    httpPost(url, body) {
        return this.http.post(url, body, this._httpOptions);
    }

    httpPut(url, body) {
        return this.http.put(url, body, this._httpOptions);
    }

    httpOptions(url) {
        return this.http.options(url, this._httpOptions);
    }
}