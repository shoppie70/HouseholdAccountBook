import React from "react";

const Expenditure = ({householdByExpenditure, creditCardExpenditureItem}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700 mb-6 border-b pb-2">
                支出内訳
            </h2>
            <div className="divide-y divide-gray-200">
                {Object.values(householdByExpenditure).map(householdItemByCategory => (
                    <div key={`category_${householdItemByCategory.label}`} className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">{householdItemByCategory.label}</span>
                        <span className="text-gray-800 font-semibold">¥{householdItemByCategory.value}</span>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
                <span className="text-gray-600 text-sm">うちクレジットカード決済</span>
                <span className="text-gray-800 font-semibold">¥{creditCardExpenditureItem}</span>
            </div>
        </div>
    )
}

export default Expenditure;
