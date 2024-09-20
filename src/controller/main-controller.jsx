import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { RootLayout } from "../view/display/root-layout";
import { createInitState, createNewStore } from "../model/store";

export class MainController {
    constructor() {
        this.store = createNewStore(createInitState());
    }

    init() {
        console.log('👋 This message is being logged by "renderer", included via Vite');
        console.log(window.appContext);

        this.render();
    }

    navigateTo(screen) {
        console.log("Implement: Navigating to Screen");
    }

    render() {
        let root = createRoot(document.getElementsByClassName('app')[0]);
        root.render(
            <Provider store={this.store}>
                <RootLayout
                    navigateToScreen={screen => this.navigateTo(screen)} />
            </Provider>
        );
    }
}
