import React, {useEffect, useState} from "react";

const MonthPicker = ({year, month, setYear, setMonth}) => {
    // 親コンポーネントから渡された year と month を元に Date オブジェクトを生成
    const [currentDate, setCurrentDate] = useState(
        new Date(year, month - 1, 1)
    );

    // 親コンポーネントの year、month が変化した際に currentDate を更新
    useEffect(() => {
        setCurrentDate(new Date(year, month - 1, 1));
    }, [year, month]);

    // 前月へ移動し、指定したURLにアクセスする
    const handlePreviousMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);

        // year と month を取得して URL にアクセス
        const newYear = newDate.getFullYear();
        const newMonth = newDate.getMonth() + 1; // 月は0始まりのため +1
        setYear(newYear);
        setMonth(newMonth);
        window.location.href = `/dashboard?year=${newYear}&month=${newMonth}`;
    };

    // 次月へ移動し、指定したURLにアクセスする
    const handleNextMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);

        // year と month を取得して URL にアクセス
        const newYear = newDate.getFullYear();
        const newMonth = newDate.getMonth() + 1; // 月は0始まりのため +1
        setYear(newYear);
        setMonth(newMonth);
        window.location.href = `/dashboard?year=${newYear}&month=${newMonth}`;
    };

    return (
        <div className="flex justify-between items-center mb-4">
            <button
                onClick={handlePreviousMonth}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
            >
                前月
            </button>
            <span className="font-semibold text-gray-700">
                    {currentDate.getFullYear()}年 {currentDate.getMonth() + 1}月
                </span>
            <button
                onClick={handleNextMonth}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
            >
                次月
            </button>
        </div>
    )
}

export default MonthPicker;
