import React from "react";
import { useSelector } from "react-redux";

import { getLogs } from "../../model/selectors";

export const ScreenLogger = () => {
    const logs = useSelector(getLogs);

    return (
        <div className="screen screen-logger">

        </div>
    );
};
