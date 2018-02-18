import { File, Folder } from './../../models/models';
import { ActionReducer, Action } from '@ngrx/store';

export interface AppState {
    folders: Folder[];
    selectedFolder: Folder;
}
  
export interface CustomAction extends Action {
    type: string;
    payload?: any;
}