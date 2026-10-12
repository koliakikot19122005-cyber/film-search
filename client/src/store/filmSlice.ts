import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  filteredList: [],
  selectedFilm: null,
}

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms(state, action) {
      state.list = action.payload
      state.filteredList = action.payload
    },
    setFilm(state, action) {
      state.selectedFilm = action.payload
    },
    setFilteredFilms(state, action) {
      state.filteredList = action.payload
    }
  },
})

export const { setFilms, setFilm, setFilteredFilms } = filmsSlice.actions
export default filmsSlice.reducer
