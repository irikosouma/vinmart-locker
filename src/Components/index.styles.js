import styled from 'styled-components';
const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    height: 100vh;
    color: #00182F;
    .wrap-logo {
        background-color: #ED1C24;
        padding-left: 46px;
    }
    .wrap-content-login {
        width: 100vw;
        /* height: calc(100% - 80px); */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .login-title {
            text-transform: uppercase;
            font-size: 30px;
            line-height: 36px;
            margin-bottom: 50px;
        }
        .username, .password{
            color: #FFC107;
            text-transform: uppercase;
            font-size: 15px;
            line-height:18px;
            align-items: left;
            width: 568px;
            display: flex;
            justify-content: flex-start;
            margin-bottom: 5px;
            
        }
        .password {
            margin-bottom: 5px;
        }
        .input-style {
            width: 568px;
            height: 60px;
            border: none;
            border-radius: 5px;
            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.07);
            opacity: 0.9;
            margin-bottom: 13px;
            text-align: center;
            padding: 0 15px;
        }
        .pswrd {
            margin-bottom: 25px;
        }
        .input-style, .btn-style {
            font-size: 20px;
            line-height: 26px;
        }
        .btn-style {
            width: 568px;
            background-color: #ED1C24;
            height: 60px;
            border-radius: 5px;
            outline: none;
            appearance: none;
            border:none;
            text-transform: uppercase;
            color: #fff;
            font-weight: 700;
        }
    }
`;
export {Wrap}