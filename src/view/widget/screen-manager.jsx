import React from "react";
import { useSelector } from "react-redux";

import * as Screens from '../../model/screens';
import { ScreenLogger } from "./screen-logger";
import { getNavigationScreen } from "../../model/selectors";

const getScreenByName = name => {
    let result = null;

    switch (name) {
        case Screens.LOGGER:
            result = <ScreenLogger />;
            break;
        default:
            console.warn(`Screen with the name: "${name}" was not found.`);
    }

    return result;
};

export const ScreenManager = props => {
    const screen = useSelector(getNavigationScreen);

    console.log(`Rendering current screen: ${screen}`);

    return (
        <div className="screen-manager">
            {getScreenByName(screen)}
        </div>
    );
};
