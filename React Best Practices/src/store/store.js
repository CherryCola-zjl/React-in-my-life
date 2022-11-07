import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './splice/count'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store