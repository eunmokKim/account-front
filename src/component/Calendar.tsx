import React, {useContext, useEffect, useState} from 'react'
import dayjs from 'dayjs'
import { useSwipeable } from 'react-swipeable'
import PayDetailList from "./PayDetailList.tsx";
import {SelectedDateContext} from "../context/SelectedDateContext.tsx";
import api from "../lib/api.ts";

type AccountGroupDto = {
    id : number,
    category : string,
    content: string,
    amount : number,
    occurred_dt :string,
}

type AccountsResponse = {
    date : string,
    items : AccountGroupDto[]
}

const Calendar : React.FC = () => {
    const [accountForm, setAccountForm] = useState<AccountsResponse[]>([]);
    const [currentDate, setCurrentDate] = useState(dayjs())
    const [clickDate, setClickDate] = useState(dayjs())
    const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);

    const startOfMonth = currentDate.startOf('month')
    const endOfMonth = currentDate.endOf('month')
    const startDay = startOfMonth.day() // 0(일) ~ 6(토)
    const daysInMonth = endOfMonth.date()

    const days = []
    for (let i = 0; i < startDay; i++) {
        days.push(null) // 앞에 빈 칸 채우기
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(dayjs(currentDate).date(i))
    }

    const goToPrevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'))
    const goToNextMonth = () => setCurrentDate(currentDate.add(1, 'month'))

    const isSameDay = (d1, d2) => d1 && d2 && d1.isSame(d2, 'day')

    const handlers = useSwipeable({
        onSwipedLeft: goToNextMonth,
        onSwipedRight: goToPrevMonth,
        trackMouse: true, // 데스크탑에서도 드래그 동작 허용
    });

    useEffect(() => {
        const fetch = async () => {
            try{
                const res =  await api.get(`/account/list/${selectedDate.format('YYYYMM')}`);
                setAccountForm(res.data);
            }
            catch(error){
                console.log(error);
            }
        };
        fetch();
    }, []);


    return (
        <div className="w-full max-w-md mx-auto p-4" {...handlers}>
            <div className="flex justify-between items-center mb-4">
                <button onClick={goToPrevMonth}>&lt;</button>
                <h2 className="text-xl font-bold">{currentDate.format('YYYY년 M월')}</h2>
                <button onClick={goToNextMonth}>&gt;</button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center font-semibold">
                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                    <div key={day} className="text-sm text-gray-600">{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2 mt-2">
                {days.map((date, idx) => {
                    if (!date) {
                        return <div key={idx}></div>; // 빈 칸
                    }

                    const dateKey = date.format('YYYYMMDD');
                    const dayAmount = accountForm
                        .filter(acc => acc.date === dateKey)
                        .flatMap(acc => acc.items)
                        .reduce((sum, acc) => sum + acc.amount, 0);

                    return (
                        <div
                            key={idx}
                            className={`aspect-square text-sm flex flex-col items-center justify-center rounded-lg
                            ${date ? 'cursor-pointer' : ''}
                            ${isSameDay(date, clickDate) ? 'bg-gray-300 text-white' : ''}
                            ${date && date.isSame(dayjs(), 'day') && !isSameDay(date, clickDate) ? 'border border-yellow-400' : ''}
                        `}
                            onClick={() => {
                                if (date) {
                                    setClickDate(date);
                                    setSelectedDate(date);
                                }
                            }}
                        >
                            <div>{date ? date.date() : ''}</div>
                            <div className="text-[10px] text-gray-600 mt-1 min-h-[2em]">
                                {dayAmount > 0 ? `${dayAmount.toLocaleString()}` : ''}
                            </div>
                        </div>
                    )
                    }
                )}
            </div>

            <PayDetailList items={[]}></PayDetailList>
        </div>
    )
}

export default Calendar
