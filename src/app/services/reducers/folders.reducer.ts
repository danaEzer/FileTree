import { ActionReducer, Action } from '@ngrx/store';
import { File, Folder } from './../../models/models';
import { CustomAction } from './appStore';

export const UPDATE_ALL_FILES = 'UPDATE_ALL_FILES';
export const ADD_FOLDER_CHILDREN = 'ADD_FOLDER_CILDREN';

export function FilesReducer(state:any, action: CustomAction) {
	let index = -1;
	switch (action.type) {
		case UPDATE_ALL_FILES:
			return action.payload;
		case ADD_FOLDER_CHILDREN:
			let parentId = action.payload.parentId;
			let children = action.payload.children;
			index = getFolderById(parentId, state);
			let newObj;
			if(index !== -1) {
				newObj = state[index];
				newObj.files = [...newObj.files, ...children];
			}
			return (index !== -1) ? [
				...state.slice(0, index),
				newObj,
                ...state.slice(index + 1)
			] : state;
		default:
			return state;
	}
}

function getFolderById(folderId, folders) {
	if(!folders) {return -1}
    for (let i = 0; i < folders.length; i++) {
        if (folderId === folders[i].id) {
            return i;
        }
    }
    return -1;
};
