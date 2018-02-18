import { AppState } from './../reducers/appStore';
import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { StoreActionService } from '../reducers/store-action/store-action.service';
import { StoreModule } from '@ngrx/store';
import { FilesReducer } from '../reducers/folders.reducer';
import { SelectedFolderReducer } from '../reducers/selected-folder.reducer';
import { HttpClient } from '@angular/common/http';
import { folders } from '../../data/server';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, StoreActionService],
      imports: [ 
        HttpClient,
        StoreModule.forRoot({ folders: FilesReducer, selectedFolder: SelectedFolderReducer })
      ]
    });
  });

  it('should be created', inject([DataService, StoreActionService, HttpClient], (service: DataService, storeActionService, httpClientService) => {
    expect(service).toBeTruthy();
  }));

  // it('xxxxxxxxxxxxxxxxxxx', inject([DataService, StoreActionService, HttpClient], (service: DataService, storeActionService, httpClientService) => {
  //   // Assert
  //   spyOn(storeActionService, "updateFolderWithChildrenContent").and.returnValue( x => {

  //   });
    
  //   // Action
  //   service.getChildrenFolders(1);
  //   // Expect
  //   // spyOn(storeActionService, "updateFolderWithChildrenContent")
  //   // expect(spyOn(storeActionService, "updateFolderWithChildrenContent")).toHaveBeenCalled();
  // }));
});