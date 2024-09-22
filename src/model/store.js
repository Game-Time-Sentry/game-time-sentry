import { configureStore } from "@reduxjs/toolkit";

import NavigationSlice from "./navigation-slice";
import * as Screens from "./screens";

export function createInitState() {
    return {
        logs: [],
        navigation: {
            screen: Screens.LOGGER
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
