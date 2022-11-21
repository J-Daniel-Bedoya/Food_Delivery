import { configureStore } from '@reduxjs/toolkit'
import pasarMarcacionSlice from './slices/pasarMarcacion.slice'  
import confirmSlice from './slices/confirm.slice'

export default configureStore({
  reducer: {
    pasarMarcacion: pasarMarcacionSlice,
    confirm: confirmSlice,
  }
})