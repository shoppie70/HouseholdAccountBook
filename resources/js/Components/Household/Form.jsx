import React from "react";

const HouseholdSubmitForm = ({handleSubmit, handleChange, formData, categories, paymentTypes}) => {
    return (
        <div className="bg-white p-8 max-w-md w-full h-screen flex items-center">
            <div className="w-full">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">家計簿の入力</h2>
                <form id="dataForm" className="space-y-4" onSubmit={handleSubmit}>
                    {/* 日付 */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="date">
                            日付
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* カテゴリ */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="category">
                            カテゴリ
                        </label>
                        <select
                            name="category_id"
                            id="category"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {categories.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 項目 */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="item">
                            項目
                        </label>
                        <select
                            name="payment_type_id"
                            id="item"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {paymentTypes.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 金額 */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="amount">
                            金額
                        </label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* メモ */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="memo">
                            メモ
                        </label>
                        <textarea
                            name="memo"
                            id="memo"
                            value={formData.memo}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        ></textarea>
                    </div>

                    {/* 送信ボタン */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            送信
                        </button>
                    </div>
                </form>

                {/* 固定リンク */}
                <div className="fixed bottom-8 right-4">
                    <a
                        href="https://docs.google.com/spreadsheets/d/182ntR97YRwE8FBR4Zy1nihxvMzVJKRvNXm65OnqZQjA/edit?usp=sharing"
                        className="px-4 py-2 bg-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        家計簿シート
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HouseholdSubmitForm;
