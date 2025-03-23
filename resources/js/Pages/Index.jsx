import React, {useEffect, useMemo, useState} from 'react';
import iziToast from "izitoast";
import HouseholdSubmitForm from "@/Components/Household/Form.jsx";
import Expenditure from "@/Components/Household/Expenditure.jsx";
import Income from "@/Components/Household/Income.jsx";
import Table from "@/Components/Household/Table.jsx";

const HouseholdForm = ({
                           expenditureCategories = [],
                           inComeCategories = [],
                           paymentTypes = [],
                           households = [],
                           householdByExpenditure = [],
                           householdByIncome = [],
                           creditCardExpenditure = 0
                       }) => {
    const [householdItems, setHouseholdItems] = useState(households);
    const [dynamicCategories, setDynamicCategories] = useState(expenditureCategories);
    const [householdByExpenditureItems, setHouseholdByExpenditureItems] = useState(householdByExpenditure);
    const [householdByIncomeItems, setHouseholdByIncomeItems] = useState(householdByIncome);
    const [creditCardExpenditureItem, setCreditCardExpenditureItem] = useState(creditCardExpenditure);

    // handlePaymentTypeChange関数の修正版
    const handlePaymentTypeChange = (e) => {
        const selectedPaymentType = e.target.value;
        const selectedType = paymentTypes.find(type => type.id === Number(selectedPaymentType));

        if (selectedType?.is_income) {
            setDynamicCategories(inComeCategories); // 収入カテゴリに切り替え
        } else {
            setDynamicCategories(expenditureCategories); // 支出カテゴリに切り替え
        }

        handleChange(e);
    };

    useEffect(() => {
        setFormData({
            ...formData,
            category_id: Object.keys(dynamicCategories)[0]
        });
    }, [dynamicCategories]); // dynamicCategoriesが変更されたときのみ実行

    // 初期状態のフォームデータを設定
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0], // 現在の日付
        category_id: Object.keys(dynamicCategories)[0],
        payment_type_id: paymentTypes.length > 0 ? paymentTypes[0].id : '', // 項目があれば最初を選択
        amount: 1000,
        memo: '',
    });

    // 入力変更ハンドラ
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // フォーム送信ハンドラ
    const handleSubmit = async (e) => {
        e.preventDefault(); // ページのリロードを防止

        try {
            // CSRFトークン対策: メタタグから取得
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await fetch('/post', {
                method: 'POST', // HTTPメソッド
                headers: {
                    'Content-Type': 'application/json', // JSONデータを送信
                    'X-CSRF-TOKEN': csrfToken, // CSRFトークンをヘッダに追加
                },
                body: JSON.stringify(formData), // フォームデータをJSON形式で送信
            });

            const result = await response.json(); // レスポンスのJSONデータを取得

            if (!response.ok) {
                throw new Error(result.message); // エラーハンドリング
            }

            setHouseholdItems(result.households);
            setHouseholdByExpenditureItems(result.householdByExpenditure);
            setHouseholdByIncomeItems(result.householdByIncome);
            setCreditCardExpenditureItem(result.creditCardExpenditure);

            iziToast.success({
                title: "Success",
                message: result.message,
                position: "topRight"
            });
        } catch (error) {
            iziToast.error({
                title: "エラー",
                message: error.message,
                position: "topRight"
            });
        }
    };

    return (
        <div className="bg-orange-100 min-h-screen flex flex-wrap xl:flex-nowrap w-full">
            <HouseholdSubmitForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                categories={expenditureCategories}
                dynamicCategories={dynamicCategories}
                paymentTypes={paymentTypes}
                handlePaymentTypeChange={handlePaymentTypeChange}
            />
            <div className="flex-1 w-full">
                <div className="flex flex-wrap xl:flex-nowrap h-full gap-2">
                    <div className="pr-4 xl:pr-0 py-4 pl-4 w-full xl:w-3/12">
                        <div className="grid grid-cols-1 gap-4">
                            <Expenditure householdByExpenditure={householdByExpenditureItems} creditCardExpenditureItem={creditCardExpenditureItem}/>
                            <Income householdByIncome={householdByIncomeItems}/>
                        </div>
                    </div>
                    <div className="pl-4 pt-0 pb-4 xl:py-4 xl:pl-2 pr-4 w-full xl:w-9/12">
                        <Table householdItems={householdItems}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseholdForm;
