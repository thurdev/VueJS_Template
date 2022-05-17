/**
 * Request is an abstract class to make HTTTP/HTTPS requests
 * @constructor
*/

import * as endpoints from './endpoints';

export class Request {
    constructor({url, parameters, body, method, headers} = { url: '', parameters: '', body: {}, method: '', headers: {} }){
        this.url = url || '';
        this.baseUrl = '';
        this.parameters = parameters || '';
        this.body = body || null;
        this.method = method || '';
        this.headers = new Headers();
        this.authentication = null;
        this.endpoints = endpoints;

        if(headers) this._setupHeaders();
    }

    setBaseUrl(url){
        this.baseUrl = url;
    }

    setUrl(url){
        this.url = url;
    }

    setParameters(parameters){
        this.parameters = parameters;
    }

    setBody(body){
        this.body = body;
    }

    setHeaders(...headers){
        this._setupHeaders(headers);
    }

    setMethod(method){
        this.method = method;
    }

    setAuthentication({type, username, password, token} = {type: 'Basic', username: '', password: '', token: ''}){
        this.authentication = {
            type,
            username,
            password,
            token
        }
    }

    _setupAuth(){
        if(this.authentication){
            var auth = "";
            if(this.authentication.token) auth = 'Bearer ' + this.authentication.token;
            else if(this.authentication.username && this.authentication.password) auth = `Basic ${this.authentication.username}:${this.authentication.password}`
            return this.headers.append('Authorization', auth);
        }   
    }

    _setupHeaders(headers = []){
        if(headers.length > 0){
            headers.forEach((header) => {
                for(var headerName in header){
                    this.headers.append(headerName, header[headerName]);
                }
            })
        }
    }

    send({json} = { json: true }){
        return new Promise((resolve, reject) => {
            var requestOptions = {
                method: this.method,
                headers: this.headers,
                redirect: 'follow'
            };

            if(json){
                if(Object.entries(this.body).length > 0){
                    requestOptions.body = JSON.stringify(this.body);
                }
            }else{
                requestOptions.body = this.body;
            }

            this._setupAuth();
    
            this._setupHeaders();

            fetch(this.baseUrl + this.url + this.parameters, requestOptions)
            .then(response => response.text())
            .then(result => {
                try{
                    resolve(JSON.parse(result));
                }catch{
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        })
    }
}

export default Request;