// householdItemsをtableタグを用いて表示するコンポーネント
const Table = ({householdItems, deleteItem}) => {
    return (
        // 外枠の div に横スクロールを適用
        <div className="overflow-x-auto bg-white h-full rounded-lg shadow-md p-6">
            {/* テーブル全体 */}
            <table className="table-auto w-full lg:min-w-[600px] divide-y divide-gray-200">
                {/* テーブルのヘッダー */}
                <thead className="">
                <tr className="text-left text-gray-600">
                    <th className="px-4 py-2 min-w-[5rem] lg:w-[5rem]">日付</th>
                    <th className="px-4 py-2 min-w-[8rem] lg:w-[10rem]">カテゴリ</th>
                    <th className="px-4 py-2 min-w-[8rem] lg:w-[10rem]">支払い方法</th>
                    <th className="px-4 py-2 min-w-[8rem] lg:w-[10rem]">金額</th>
                    <th className="px-4 py-2 min-w-[6rem] whitespace-nowrap">メモ</th>
                    <th className="px-4 py-2 min-w-[5rem]">操作</th>
                </tr>
                </thead>
                {/* テーブルのボディ部分 */}
                <tbody>
                {Object.entries(householdItems).map(
                    ([householdId, householdRecord]) => (
                        <tr
                            key={householdId}
                            // 条件に応じて背景色を変更（緑: is_income, 青: is_credit_card）
                            className={`${
                                householdRecord.category.is_income ? "bg-green-100" : ""
                            } ${
                                householdRecord.payment_type.is_credit_card ? "bg-sky-100" : ""
                            } hover:bg-gray-50`}>
                            {/* 日付 */}
                            <td className="px-4 py-2 text-gray-800">
                                {new Date(householdRecord.date).toLocaleDateString("ja-JP", {
                                    month: "numeric",
                                    day: "numeric",
                                })}
                            </td>
                            {/* カテゴリ */}
                            <td className="px-4 py-2 text-gray-800">
                                {householdRecord.category.name}
                            </td>
                            {/* 支払い方法 */}
                            <td className="px-4 py-2 text-gray-800">
                                {householdRecord.payment_type.name}
                            </td>
                            {/* 金額 */}
                            <td className="px-4 py-2 text-gray-800 font-semibold">
                                ¥{householdRecord.amount.toLocaleString()}
                            </td>
                            {/* メモ */}
                            <td className="px-4 py-2 text-gray-800 text-sm w-full whitespace-nowrap">
                                {householdRecord.memo}
                            </td>
                            {/* 削除ボタン */}
                            <td className="px-4 py-2 min-w-[5rem]">
                                <button
                                    className="bg-red-700 hover:bg-red-900 text-white font-bold py-1 px-2 rounded text-xs"
                                    onClick={() => deleteItem(householdRecord.id)}>
                                    削除
                                </button>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
