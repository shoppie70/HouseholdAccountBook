import React, {useEffect, useMemo, useState} from 'react';
import iziToast from "izitoast";
import HouseholdSubmitForm from "@/Components/Household/Form.jsx";

const HouseholdForm = ({categories = [], paymentTypes = [], households = [], categoryIdArray = []}) => {
    const [categorySummary, setCategorySummary] = useState({});
    const [householdItems, setHouseholdItems] = useState(households);

    // 初期状態のフォームデータを設定
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0], // 現在の日付
        category_id: categories.length > 0 ? categories[0].id : '', // カテゴリがあれば最初を選択
        payment_type_id: paymentTypes.length > 0 ? paymentTypes[0].id : '', // 項目があれば最初を選択
        amount: 0,
        memo: '',
    });

    useEffect(() => {
        // categories または items が非配列の場合の初期値設定チェック
        if (!Array.isArray(categories) || !Array.isArray(paymentTypes)) {
            console.error('カテゴリまたは項目は配列ではありません');
        } else {
            // 有効な配列なら初期データを安全に設定
            setFormData((prev) => ({
                ...prev,
                category: categories.length > 0 ? categories[0] : '',
                item: paymentTypes.length > 0 ? paymentTypes[0] : '',
            }));
        }
    }, [categories, paymentTypes]);

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

    useEffect(() => {
        // 現在の日付
        const today = new Date();
        // 今月の開始日
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        // カテゴリごとの合計金額を計算
        const summary = householdItems.reduce((acc, household) => {
            const householdDate = new Date(household.date);

            // データが今月のものか確認
            if (householdDate >= startOfMonth && householdDate <= today) {
                // category_idがすでに存在している場合
                if (acc[household.category_id]) {
                    acc[household.category_id] += household.amount;
                } else {
                    // 新しいカテゴリの場合は初期化
                    acc[household.category_id] = household.amount;
                }
            }

            return acc;
        }, {});

        // すべてのカテゴリを含むようにカテゴリIDの初期値を追加
        categoryIdArray = Object.keys(categoryIdArray);

        const completeSummary = categoryIdArray.reduce((acc, categoryId) => {
            acc[categoryId] = summary[categoryId] || 0; // 入力されていない場合は0を設定
            return acc;
        }, {});

        // 更新された集計結果をステートに反映
        setCategorySummary(completeSummary);
    }, [householdItems]); // householdItemsとカテゴリ一覧が変更されるたびに再集計

    return (
        <div className="bg-orange-100 min-h-screen flex w-full">
            <HouseholdSubmitForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                categories={categories}
                paymentTypes={paymentTypes}
            />
            <div className="bg-white p-6">
                <h2 className="text-xl font-bold text-gray-700 mb-6 border-b pb-2">カテゴリごとの今月の内訳</h2>
                <div className="divide-y divide-gray-200">
                    {Object.entries(categorySummary).map(([categoryId, totalAmount]) => (
                        <div key={categoryId} className="flex justify-between items-center py-2">
                            <span className="text-gray-600 font-medium">{categoryIdArray[categoryId]}</span>
                            <span className="text-gray-800 font-semibold">¥{totalAmount.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <div className="divide-y divide-gray-200 bg-white h-screen overflow-y-scroll px-4">
                    <div className="flex py-2 font-medium text-gray-500 border-b">
                        <span className="min-w-[5rem]">日付</span>
                        <span className="min-w-[10rem]">カテゴリ</span>
                        <span className="min-w-[10rem]">支払い方法</span>
                        <span className="min-w-[10rem]">金額</span>
                        <span className="w-full">メモ</span>
                    </div>
                    <ul>
                        {Object.entries(householdItems).map(([householdId, householdRecord]) => (
                            <li
                                key={householdId}
                                className="flex py-2 border-b items-center"
                            >
                                <span className="min-w-[5rem] text-gray-800">{new Date(householdRecord.date).toLocaleDateString('ja-JP', {
                                    month: 'numeric',
                                    day: 'numeric'
                                })}</span>
                                <span className="min-w-[10rem] text-gray-800">{householdRecord.category.name}</span>
                                <span className="min-w-[10rem] text-gray-800">{householdRecord.payment_type.name}</span>
                                <span className="min-w-[10rem] text-gray-800 font-semibold">¥{householdRecord.amount.toLocaleString()}</span>
                                <span className="w-full text-gray-800">{householdRecord.memo}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HouseholdForm;
