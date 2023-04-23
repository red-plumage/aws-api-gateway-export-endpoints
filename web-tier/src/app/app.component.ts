import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import apiEndpoints from "../environments/api-gateway-endpoints.json";


@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
        <h1> {{title}} </h1>
        <span style="display: block">{{ title }} app is running!</span>
    </div>
    <div style="text-align:center">
        <h3>Some requests to try out: </h3>
        <div>
            <div style="width: 500px; height: 150px; margin-left: auto; margin-right: auto;">
                <button type="button" style="width : 10em;" (click)="onHelloGETBtnClick()">
                    Hello GET
                </button>
                <div style="font-weight: bold;">{{getEndpoint}}</div>
                <div style="display: flex; justify-content: center; align-items: center; height: 100px;">{{getResponse}}</div>
            </div>
          
            <div style="width: 500px; height: 150px; margin-left: auto; margin-right: auto;">
              <button type="button" style="width : 10em;" (click)="onHelloPOSTBtnClick()">
                Hello POST
              </button>
              <div style="font-weight: bold;">{{postEndpoint}}</div>
              <div style="display: flex; justify-content: center; align-items: center; height: 100px;">{{postResponse}}</div>
            </div>
        </div>
    </div>
    
  `,
  styles: []
})

export class AppComponent {
  title = 'call-imported-endpoints';

  getEndpoint = apiEndpoints.helloGET.GET;
  postEndpoint = apiEndpoints.helloPOST.POST;

  getResponse = '{}';
  postResponse = '{}';

  public constructor(readonly apiService: ApiService) {
  }

  public onHelloGETBtnClick() {
    this.apiService.get().subscribe(a => {
      this.getResponse = JSON.stringify(a);
    });
  }

  public onHelloPOSTBtnClick() {
    this.apiService.post().subscribe(a => {
      this.postResponse = JSON.stringify(a);
    });
  }
}
