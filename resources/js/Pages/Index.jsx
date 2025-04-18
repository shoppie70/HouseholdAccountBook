import React, {useEffect, useMemo, useState} from 'react';
import iziToast from "izitoast";
import HouseholdSubmitForm from "@/Components/Household/Form.jsx";
import Expenditure from "@/Components/Household/Expenditure.jsx";
import Income from "@/Components/Household/Income.jsx";
import Table from "@/Components/Household/Table.jsx";
import "izitoast/dist/css/iziToast.min.css";
import {Head} from "@inertiajs/react";
import MonthPicker from "@/Components/Household/MonthPicker.jsx";

const HouseholdForm = ({
                           title,
                           year,
                           month,
                           expenditureCategories = [],
                           inComeCategories = [],
                           paymentTypes = [],
                           households = [],
                           householdByExpenditure = [],
                           householdByIncome = [],
                           creditCardExpenditure = 0,
                           totalExpenditure = 0,
                           totalIncome = 0,
                       }) => {
    const [yearState, setYear] = useState(year);
    const [monthState, setMonth] = useState(month);
    const [householdItems, setHouseholdItems] = useState(households);
    const [dynamicCategories, setDynamicCategories] = useState(expenditureCategories);
    const [householdByExpenditureItems, setHouseholdByExpenditureItems] = useState(householdByExpenditure);
    const [householdByIncomeItems, setHouseholdByIncomeItems] = useState(householdByIncome);
    const [creditCardExpenditureItem, setCreditCardExpenditureItem] = useState(creditCardExpenditure);
    const [totalExpenditureItem, setTotalExpenditureItem] = useState(totalExpenditure);
    const [totalIncomeItem, setTotalIncomeItem] = useState(totalIncome);

    // 年と月を指定し、当月の日付を作成する
    const [currentDate, setCurrentDate] = useState(() => {
        // 指定された年と月を基に日付をチェックし生成
        const today = new Date();
        const isCurrentMonth = parseInt(today.getUTCFullYear()) === parseInt(year) && parseInt(today.getUTCMonth() + 1) === parseInt(month);

        // 年月が一致しない場合は指定された年月の1日を生成
        const date = isCurrentMonth
            ? new Date(Date.UTC(year, month - 1, today.getUTCDate())) // 今月の場合は当日を使用
            : new Date(Date.UTC(year, month - 1, 1)); // 異なる場合は1日とする

        // 日本時間にフォーマット
        const formatter = new Intl.DateTimeFormat('ja-JP', {
            timeZone: 'Asia/Tokyo', // 日本標準時
            year: 'numeric', // 'yyyy'形式
            month: '2-digit', // 'MM'形式
            day: '2-digit', // 'dd'形式
        });

        // @type {FormattedDate} フォーマットされた日付を返却
        const formattedDate = formatter.format(date); // 例: 2023-11-01
        return formattedDate.replace(/\//g, '-'); // スラッシュをハイフンに置換
    });

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
        date: currentDate,
        category_id: Object.keys(dynamicCategories)[0],
        payment_type_id: paymentTypes.length > 0 ? paymentTypes[0].id : '', // 項目があれば最初を選択
        amount: 1000,
        memo: '',
        year: yearState,
        month: monthState,
    });

    // 入力変更ハンドラ
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getCsrfToken = () =>
        document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const createHeaders = (csrfToken) => ({
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
    });

    const handleResponse = async (response) => {
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message); // エラーハンドリング
        }
        return result;
    };

    const showToast = (type, title, message) => {
        const options = {
            title,
            message,
            position: "topRight",
        };
        if (type === "success") {
            iziToast.success(options);
        } else {
            iziToast.error(options);
        }
    };

    const updateStateWithResult = (result) => {
        setHouseholdItems(result.households);
        setHouseholdByExpenditureItems(result.householdByExpenditure);
        setHouseholdByIncomeItems(result.householdByIncome);
        setCreditCardExpenditureItem(result.creditCardExpenditure);
        setTotalExpenditureItem(result.totalExpenditure);
        setTotalIncomeItem(result.totalIncome);
    };

    const handleApiCall = async (url, method, bodyData) => {
        const csrfToken = getCsrfToken();
        const headers = createHeaders(csrfToken);

        const response = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(bodyData),
        });
        return handleResponse(response);
    };

    const deleteItem = async (householdId) => {
        try {
            const result = await handleApiCall(`/delete/${householdId}`, 'POST', formData);
            updateStateWithResult(result);
            showToast("success", "Success", result.message);
        } catch (error) {
            showToast("error", "エラー", error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // ページのリロードを防止
        try {
            const result = await handleApiCall('/post', 'POST', formData);
            updateStateWithResult(result);
            showToast("success", "Success", result.message);
        } catch (error) {
            showToast("error", "エラー", error.message);
        }
    };

    return (
        <div className="bg-orange-100 min-h-screen flex flex-wrap lg:flex-nowrap w-full">
            <Head title={title}/>

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
                <div className="flex flex-wrap lg:flex-nowrap h-full gap-2">
                    <div className="pr-4 xl:pr-0 py-4 pl-4 w-full md:w-5/12 2xl:w-3/12">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="-mb-4">
                                <MonthPicker
                                    year={yearState}
                                    setYear={setYear}
                                    month={monthState}
                                    setMonth={setMonth}
                                />
                            </div>
                            <Expenditure
                                householdByExpenditure={householdByExpenditureItems}
                                creditCardExpenditureItem={creditCardExpenditureItem}
                                totalExpenditureItem={totalExpenditureItem}
                            />
                            <Income
                                householdByIncome={householdByIncomeItems}
                                totalIncomeItem={totalIncomeItem}
                            />
                        </div>
                    </div>
                    <div className="pl-4 pt-0 pb-4 xl:py-4 xl:pl-2 pr-4 w-full md:w-7/12 2xl:w-9/12 h-screen">
                        <Table
                            year={yearState}
                            setYear={setYear}
                            month={monthState}
                            setMonth={setMonth}
                            householdItems={householdItems}
                            deleteItem={deleteItem}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseholdForm;
