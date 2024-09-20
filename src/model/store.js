import { configureStore } from "@reduxjs/toolkit";

import NavigationSlice from "./navigation-slice";
import * as Screens from "./screens";

export function createInitState() {
    return {
        navigation: {
            screen: Screens.START
        }
    };
}

export function createNewStore(initState) {
    return configureStore({
        preloadedState: initState,
        reducer: {
            navigation: NavigationSlice
        }
    });
}
