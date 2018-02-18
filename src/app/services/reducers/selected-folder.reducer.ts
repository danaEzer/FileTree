import { File, Folder } from './../../models/models';
import { CustomAction } from './appStore';

export const UPDATE_SELECTED_FOLDER = 'UPDATE_SELECTED_FOLDER';

export function SelectedFolderReducer(state: Folder, action: CustomAction) {
	switch (action.type) {
		case UPDATE_SELECTED_FOLDER:
			return action.payload;
		default:
			return state;
	}
}

