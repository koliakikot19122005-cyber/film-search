import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    queryParams: '',
}
const appSlice = createSlice({
    name: 'app',
    initialState,

    reducers: {
        setQueryParams(state, action) {
            state.queryParams = action.payload
        }
    }
})

export default appSlice.reducer
export const { setQueryParams } = appSlice.actions