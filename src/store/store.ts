import {configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const Store = configureStore({
    reducer:{
         cars:carReducer
    }
});

export {
    Store
}
