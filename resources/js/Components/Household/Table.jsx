import React, {useEffect, useState} from "react";

const Table = ({householdItems, year, month, setYear, setMonth}) => {
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
        // 外枠の div に横スクロールを適用
        <div className="overflow-x-auto bg-white h-full rounded-lg shadow-md p-6">
            {/* 年月切替ボタン */}
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


            {/* 内側のテーブル全体を固定幅にしてスクロール可能に設定 */}
            <div className="min-w-[600px] divide-y divide-gray-200">

                {/* テーブルのヘッダー */}
                <div className="flex py-2 font-medium text-gray-500 border-b">
                    <span className="w-[5rem]">日付</span>
                    <span className="w-[10rem]">カテゴリ</span>
                    <span className="w-[10rem]">支払い方法</span>
                    <span className="w-[10rem]">金額</span>
                    <span className="flex-1">メモ</span>
                </div>
                {/* データ行 */}
                <ul>
                    {Object.entries(householdItems).map(
                        ([householdId, householdRecord]) => (
                            <li
                                key={householdId}
                                // 条件に応じて背景色を変更（緑: is_income, 青: is_credit_card）
                                className={`flex p-2 border-b items-center
                  ${householdRecord.category.is_income ? "bg-green-100" : ""}
                  ${
                                    householdRecord.payment_type.is_credit_card
                                        ? "bg-sky-100"
                                        : ""
                                }`}
                            >
                                {/* 日付 */}
                                <p className="w-[5rem] text-gray-800">
                                    {new Date(householdRecord.date).toLocaleDateString("ja-JP", {
                                        month: "numeric",
                                        day: "numeric",
                                    })}
                                </p>
                                {/* カテゴリ */}
                                <p className="w-[10rem] text-gray-800">
                                    {householdRecord.category.name}
                                </p>
                                {/* 支払い方法 */}
                                <p className="w-[10rem] text-gray-800">
                                    {householdRecord.payment_type.name}
                                </p>
                                {/* 金額 */}
                                <p className="w-[10rem] text-gray-800 font-semibold">
                                    ¥{householdRecord.amount.toLocaleString()}
                                </p>
                                {/* メモ */}
                                <p className="flex-1 text-gray-800">
                                    {householdRecord.memo}
                                </p>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Table;
