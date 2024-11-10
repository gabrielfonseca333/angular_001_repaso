import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServicePersonas{

    constructor(private _http: HttpClient){}

    getPersonas():Observable<any>{
        let urlApiPersonas = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApiPersonas)
    }

}