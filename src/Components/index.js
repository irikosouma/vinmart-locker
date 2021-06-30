import React, { useState } from 'react'
//styles
import {Wrap} from './index.styles'
//images
import Logo from '../assets/images/LogoVinmart'
export default function LoginPage() {
    const [inputState, setInputState] = useState('')
    const handleChange = (e) => {
        let newVal = e.target.value;
        setInputState(newVal)
    }
    return (
        <Wrap>
            <div className='wrap-logo'>
                <Logo />
            </div>
            <div className="wrap-content-login">
                <h3 className="login-title">Đăng nhập hệ thống</h3>
                <p className="username">
                    Tên đăng nhập
                </p>
                <input type="text" className="input-style" value={inputState} onChange={(e) => handleChange(e)} />
                <p className="password">
                    Mật khẩu
                </p>
                <input type="password" className="input-style pswrd" />
                <button className="btn-style">Đăng Nhập</button>
            </div>
        </Wrap>
    )
}
