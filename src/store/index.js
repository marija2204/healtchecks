import { configureStore } from "@reduxjs/toolkit";

import selectReducer from './select';

const store = configureStore ({
    reducer: { select: selectReducer}
});


export default store;