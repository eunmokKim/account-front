import React from 'react'
import {Link} from "react-router-dom";


const onClickAlarm = () => {

}

const onClickMyInfo = () => {

}


const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow p-4 mb-4">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                <Link to={'/'}>
                    <h1 className="text-xl font-bold">💰 나의 가계부</h1>
                </Link>
                <div className="flex items-center space-x-4 text-xl text-gray-600">
                    <Link to={'/add'}>
                        <button title="등록" className="hover:text-black">＋</button>
                    </Link>
                    <button title="알림" className="hover:text-black" onClick={onClickAlarm}>🔔</button>
                    <button title="설정" className="hover:text-black" onClick={onClickMyInfo}>⚙️</button>
                </div>
            </div>
        </header>
    )
}

export default Header