import React from "react";

interface PayInfo {
    id: string;
    label: string;
    icon?: string;
    amount: number;
}

interface PayInfoListProps  {
    items: PayInfo[];
}




const PayDetailList : React.FC<PayInfoListProps > = ({items}) => {
    if (!items.length) return null

    return (
        <div className="mt-6 text-center">
            <h3 className="font-semibold text-lg">상세 내역</h3>
            <ul className="mt-2 text-sm text-left space-y-1">
                {items.map((item) => (
                    <li key={item.id} className="flex justify-between">
            <span>
              {item.icon} {item.label}
            </span>
                        <span>{item.amount.toLocaleString()}원</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PayDetailList