import React, {useContext, useEffect, useState} from "react";
import {SelectedDateContext} from "../context/SelectedDateContext.tsx";



const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

};


const Register : React.FC = ()  => {
    const {selectedDate} = useContext(SelectedDateContext);

    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        console.log("Register.tsx", );
    }, []);


    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-sm font-bold mb-4">{selectedDate.format("YYYY년 MM월 DD일")} 지출 등록</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 text-sm font-medium">카테고리</label>
                    <select
                        className="w-full border rounded px-3 py-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">선택하세요</option>
                        <option value="FOOD">🍚 식비</option>
                        <option value="TRAFFIC">🚇 교통</option>
                        <option value="SHOPPING">🛍️ 쇼핑</option>
                        <option value="ETC">📝 기타</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">금액</label>
                    <input
                        type="number"
                        className="w-full border rounded px-3 py-2"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">내용</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={50}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    저장하기
                </button>
            </form>
        </div>
    )
}

export default Register;