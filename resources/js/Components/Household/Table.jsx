import React from "react";

const Table = ({householdItems}) => {
    return (
        // 外枠の div に横スクロールを適用
        <div className="overflow-x-auto bg-white h-full rounded-lg shadow-md p-6">
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
                                <span className="w-[5rem] text-gray-800">
                  {new Date(householdRecord.date).toLocaleDateString("ja-JP", {
                      month: "numeric",
                      day: "numeric",
                  })}
                </span>
                                {/* カテゴリ */}
                                <span className="w-[10rem] text-gray-800">
                  {householdRecord.category.name}
                </span>
                                {/* 支払い方法 */}
                                <span className="w-[10rem] text-gray-800">
                  {householdRecord.payment_type.name}
                </span>
                                {/* 金額 */}
                                <span className="w-[10rem] text-gray-800 font-semibold">
                  ¥{householdRecord.amount.toLocaleString()}
                </span>
                                {/* メモ */}
                                <span className="flex-1 text-gray-800">
                  {householdRecord.memo}
                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Table;
