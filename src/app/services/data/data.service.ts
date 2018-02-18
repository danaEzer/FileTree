import { Folder } from './../../models/models';
import { Injectable } from '@angular/core';
import { folders } from '../../data/server';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreActionService } from '../reducers/store-action/store-action.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  serverPath = './data/';
  constructor(private storeActionService: StoreActionService, private http: HttpClient) { }

  getAndUpdateFolders() {
    this.getFoldersFromAPI().subscribe(response => {
      // When the filders returns from the server, then update the store
      this.storeActionService.updateFolders(JSON.parse(response));
    });
  }
  getFoldersFromAPI(){
    // Should be an HTTP request to the server - get folders
    // use this.getServerContentUsingTSFile() in order to use a json from a TS file
    return this.getJSON('server');
  }

  getChildrenFolders(parentId) {
    this.getJSON(parentId)
    .subscribe(
      res => {
        if(res) {
          this.storeActionService.updateFolderWithChildrenContent(parentId, JSON.parse(res));
        }
      },
      error => {
        console.log(error);
      });
  }

  getJSON(fileName) {
    return this.http.get('./assets/data/' + fileName + '.json',
    {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }

  getServerContentUsingTSFile(){
    // Simulating the data using a ts file
    return Observable.create(observer => {
      // Remove comment from row 29 to simulating a server delay of 2s
      setTimeout(() => {
        observer.next(folders);
        observer.complete();
      }, 0);
      // }, 2000);
    });
  }
}
