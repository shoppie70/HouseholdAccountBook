import React, {useEffect, useState} from "react";
import MonthPicker from "@/Components/Household/MonthPicker.jsx";

const Table = ({householdItems, year, month, setYear, setMonth}) => {
    return (
        // 外枠の div に横スクロールを適用
        <div className="overflow-x-auto bg-white h-full rounded-lg shadow-md p-6">
            {/* 内側のテーブル全体を固定幅にしてスクロール可能に設定 */}
            <div className="lg:min-w-[600px] divide-y divide-gray-200">

                {/* テーブルのヘッダー */}
                <div className="flex gap-x-4 py-2 font-medium text-gray-500 border-b">
                    <span className="lg:w-[5rem]">日付</span>
                    <span className="lg:w-[10rem]">カテゴリ</span>
                    <span className="lg:w-[10rem]">支払い方法</span>
                    <span className="lg:w-[10rem]">金額</span>
                    <span className="lg:flex-1">メモ</span>
                </div>
                {/* データ行 */}
                <ul>
                    {Object.entries(householdItems).map(
                        ([householdId, householdRecord]) => (
                            <li
                                key={householdId}
                                // 条件に応じて背景色を変更（緑: is_income, 青: is_credit_card）
                                className={`flex flex-wrap p-2 border-b items-center gap-x-4 gap-y-2
                  ${householdRecord.category.is_income ? "bg-green-100" : ""}
                  ${
                                    householdRecord.payment_type.is_credit_card
                                        ? "bg-sky-100"
                                        : ""
                                }`}
                            >
                                {/* 日付 */}
                                <p className="lg:w-[5rem] text-gray-800">
                                    {new Date(householdRecord.date).toLocaleDateString("ja-JP", {
                                        month: "numeric",
                                        day: "numeric",
                                    })}
                                </p>
                                {/* カテゴリ */}
                                <p className="lg:w-[10rem] text-gray-800">
                                    {householdRecord.category.name}
                                </p>
                                {/* 支払い方法 */}
                                <p className="lg:w-[10rem] text-gray-800">
                                    {householdRecord.payment_type.name}
                                </p>
                                {/* 金額 */}
                                <p className="lg:w-[10rem] text-gray-800 font-semibold">
                                    ¥{householdRecord.amount.toLocaleString()}
                                </p>
                                {/* メモ */}
                                <p className="w-full lg:w-min lg:flex-1 text-gray-800 text-sm">
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
