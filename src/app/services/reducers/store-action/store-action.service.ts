import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Folder, File } from './../../../models/models';
import { AppState } from './../appStore';
import { UPDATE_ALL_FILES, ADD_FOLDER_CHILDREN } from '../folders.reducer';
import { UPDATE_SELECTED_FOLDER } from '../selected-folder.reducer';

@Injectable()
export class StoreActionService {

  constructor(private store: Store<AppState>) { }
  updateFolders(files :Folder[]) {
    this.store.dispatch({ type: UPDATE_ALL_FILES, payload: files });
  }
  updateFolderWithChildrenContent(parentId, children) {
    this.store.dispatch({ type: ADD_FOLDER_CHILDREN, payload: {parentId: parentId, children: children} });
  }
  selectFolders() {
    return this.store.select('folders');
  }
  updateSelectedFolder(folder: Folder) {
    this.store.dispatch({ type: UPDATE_SELECTED_FOLDER, payload: folder });
  }
  selectSelectedFolder() {
    return this.store.select('selectedFolder');
  }
}
