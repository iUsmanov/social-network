import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = 'TOKEN';
			if (token) {
				headers.set('Authorization', token);
			}

			return headers;
		},
	}),
	endpoints: (builder) => ({}),
});
