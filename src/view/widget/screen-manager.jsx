import React from "react";
import { useSelector } from "react-redux";

import { getNavigationScreen } from "../../model/selectors";

export const ScreenManager = props => {
    const screen = useSelector(getNavigationScreen);

    return (
        <div className="screen-manager">
            I'm Screen Manager. TODO. Rendering current screen: "{screen}"
        </div>
    );
};
