import React from "react";

import { Header } from "../widget/header";
import { ScreenManager } from "../widget/screen-manager";

export const RootLayout = () => {
    return (
        <div className="root-layout">
            I'm a Root Layout. TODO
            <Header />
            <ScreenManager />
        </div>
    );
};
