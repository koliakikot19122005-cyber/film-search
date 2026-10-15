import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    queryParams: '',
    mode: 'user', // 'admin' or 'user'
    isloggedIn: false,
}
const appSlice = createSlice({
    name: 'app',
    initialState,

    reducers: {
        setQueryParams(state, action) {
            state.queryParams = action.payload
        },
        setMode(state, action) {
            state.mode = action.payload
        },
        setIsLoggedIn(state, action) {
            state.isloggedIn = action.payload
        }

    }
})

export default appSlice.reducer
export const { setQueryParams, setMode, setIsLoggedIn } = appSlice.actions