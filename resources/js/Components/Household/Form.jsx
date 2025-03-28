import React from "react";

const HouseholdSubmitForm = ({
                                 handleSubmit,
                                 handleChange,
                                 formData,
                                 dynamicCategories,
                                 paymentTypes,
                                 handlePaymentTypeChange
                             }) => {
    return (
        <div className="bg-white p-8 xl:max-w-md w-full h-svh flex items-center">
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

                    {/* 項目 */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="item">
                            項目
                        </label>
                        <select
                            name="payment_type_id"
                            id="item"
                            onChange={handlePaymentTypeChange}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {Object.values(paymentTypes).map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
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
                            value={formData.category_id}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {Object.entries(dynamicCategories).map(([categoryId, categoryName]) => (
                                <option key={`dynamic${categoryId}`} value={categoryId}>
                                    {categoryName}
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
            </div>
        </div>
    )
}

export default HouseholdSubmitForm;
