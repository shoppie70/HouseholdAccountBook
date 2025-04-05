import React from "react";

const Income = ({householdByIncome, totalIncomeItem}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-bold text-gray-700 mb-2 border-b pb-1">
                収入
            </h2>
            <div className="divide-y divide-gray-200">
                {Object.values(householdByIncome).map(householdItemByCategory => (
                    <div key={`category_${householdItemByCategory.label}`} className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium text-sm">{householdItemByCategory.label}</span>
                        <span className="text-gray-800 font-semibold text-sm">¥{householdItemByCategory.value}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600 text-sm">収入合計</span>
                <span className="text-gray-800 font-semibold">¥{totalIncomeItem}</span>
            </div>
        </div>
    )
}

export default Income;
