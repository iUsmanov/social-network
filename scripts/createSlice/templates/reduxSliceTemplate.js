const { firstCharUpperCase } = require('../helpers');

module.exports = (sliceName) => {
	const sliceUpper = firstCharUpperCase(sliceName);
	const reduxSchemaFile = `${sliceName}Schema`;
	const reduxSchema = `${sliceUpper}Schema`;
	const reduxSlice = `${sliceName}Slice`;

	return `import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ${reduxSchema} } from '../types/${reduxSchemaFile}';

export const initialState: ${reduxSchema} = {
	
};

export const ${reduxSlice} = createSlice({
	name: '${sliceName}',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {
        
		},
	},
	// extraReducers(builder) {
	// 	builder
	// 		.addCase(.pending, (state) => {
	// 			state.data = undefined;
	// 			state.error = undefined;
	// 			state.isLoading = true;
	// 		})
	// 		.addCase(.fulfilled, (state, action: PayloadAction<>) => {
	// 			state.data = action.payload;
	// 			state.isLoading = false;
	// 		})
	// 		.addCase(.rejected, (state, action) => {
	// 			state.error = action.payload;
	// 			state.isLoading = false;
	// 		});
	// },
});

export const { actions: ${sliceName}Actions } = ${reduxSlice};
export const { reducer: ${sliceName}Reducer } = ${reduxSlice};`;
};
