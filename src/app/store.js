import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

//This is all basic boiler code for setting up the redux store(common for all )
