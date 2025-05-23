import React from "react";
import dayjs, {type Dayjs} from "dayjs";


interface SelectedDateContextType  {
    selectedDate : Dayjs;
    setSelectedDate: (selectedDate : Dayjs) => void;
}


export const SelectedDateContext = React.createContext<SelectedDateContextType>({
    selectedDate: dayjs(),
    setSelectedDate: () => {},
});


