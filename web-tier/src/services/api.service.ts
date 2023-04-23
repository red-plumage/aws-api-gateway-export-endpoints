import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import apiEndpoints from "../environments/api-gateway-endpoints.json";

@Injectable({
    providedIn: "root",
  })
export class ApiService {
    constructor(private readonly http: HttpClient) {
    }

    public get(): Observable<any> {
        return this.http.get(apiEndpoints.helloGET.GET).pipe();
    }

    public post(): Observable<any> {
        return this.http.post(apiEndpoints.helloPOST.POST, {}).pipe();
    }
}