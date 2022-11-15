import { configureStore } from '@reduxjs/toolkit'
import pasarMarcacionSlice from './slices/pasarMarcacion.slice'  

export default configureStore({
  reducer: {
    pasarMarcacion: pasarMarcacionSlice,
  }
})