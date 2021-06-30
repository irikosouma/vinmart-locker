import styled from 'styled-components';
const WrapMainPage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    height: 100vh;
    color: #00182F;
    .wrap-logo {
        background-color: #ED1C24;
        padding: 0 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        .wrap-right-content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .avatar-admin {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #f2f2f2;
        }
        .name {
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
        }
        .wrap-noti, .avatar-admin, .name, .drop-down {
            margin-left: 20px;
        }
        .wrap-person-data {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wrap-noti {
            width: 30px;
            .noti {
                position: relative;
            }
            .number-of-noti {
                position: absolute;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: #fff;
                color: #ED1C24;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 11px;
                transform: translate(60%, -65%);
            }
        }
    }
    .wrap-main-content {
        display: grid;
        grid-template-columns: 290px 1fr;
        .wrap-main-data {
            background-color: #E5E5E5;
        }
        .camera, .supervise {
            display: flex;
            align-items: center;
            width: calc(100% - 46px);
            margin: 53px 23px 23px ;
        }
        .title-box {
            margin-left: 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 1;
        }
        .title {
            text-transform: uppercase;
        }
        .statistic-the-flow {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 23px;
        }
        .small-title {
            font-size: 12px;
            line-height: 14px;
            margin-left: 17px;
        }
    }
    
`;
export {WrapMainPage}