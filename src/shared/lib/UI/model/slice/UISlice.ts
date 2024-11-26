import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
	scroll: {},
};

interface SetScrollPayload {
	path: string;
	position: number;
}

export const UISlice = createSlice({
	name: 'UISlice',
	initialState,
	reducers: {
		setScrollPosition: (state, action: PayloadAction<SetScrollPayload>) => {
			const { path, position } = action.payload;
			state.scroll[path] = position;
		},
	},
});

export const { actions: uiActions } = UISlice;
export const { reducer: uiReducer } = UISlice;
