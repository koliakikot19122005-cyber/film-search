import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  selectedFilm: null,
}

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms(state, action) {
      state.list = action.payload
    },
    setFilm(state, action) {
      state.selectedFilm = action.payload
    },
  },
})

export const { setFilms, setFilm } = filmsSlice.actions
export default filmsSlice.reducer
