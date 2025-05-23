import React, {useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import {SelectedDateContext} from "../context/SelectedDateContext.tsx";

type Props = {
    children: React.ReactNode;
};

const SelectedDateProvider = ({ children }: Props) => {

    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    return (
        <SelectedDateContext.Provider value={{selectedDate, setSelectedDate}}>
            {children}
        </SelectedDateContext.Provider>
    )
};

export default SelectedDateProvider;