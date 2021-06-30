import React, { useState } from 'react'
//styles
import {WrapMainPage} from './index.styles'
//images
import Logo from '../../assets/images/LogoVinmart'
import Notification from '../../assets/images/NotificationIcon'
import DropDown from '../../assets/images/DropDownIcon'
import Camera from '../../assets/images/Camera'
import ArrowDown from '../../assets/images/ArrowDown'
import ArrowUp from '../../assets/images/ArrowUp'
import Supervise from '../../assets/images/Supervise'
import Statistic from '../../assets/images/statistic'
import Chart from '../../assets/images/Chart'
import DisableStatistic from '../../assets/images/DisableStatistic'
import Activities from '../../assets/images/Activities'
import  DisableActivities from '../../assets/images/DisableActivities'
import EnableChart from '../../assets/images/EnableChart'
import History from '../../assets/images/History'
import EnableHistory from '../../assets/images/EnableHistory'
import Staff from '../../assets/images/Staff'
import EnableStaff from '../../assets/images/EnableStaff'
//data
import AdminData from '../../assets/data/AdminData'

export default function MainPage() {
    const [adminData, setAdminData] = useState(AdminData)
    const [isOpen, setIsOpen] = useState(true)
    const [selectedKey, setSelectedKey] = useState(0)
    const [isSelected, setIsSelected] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleSelect0 = () => {
        setIsSelected(!isSelected);
        setSelectedKey(0)

    }
    const handleSelect1 = () => {
        setIsSelected(!isSelected);
        setSelectedKey(1)
    }
    const handleSelect2 = () => {
        setIsSelected(!isSelected);
        setSelectedKey(2)
    }
    return (
        <WrapMainPage isOpen={isOpen} isSelected={isSelected} >
            <div className='wrap-logo'>
                <Logo />
                <div className="wrap-right-content">
                    <div className="wrap-noti">
                        <span className='number-of-noti'>3</span>
                        <Notification className="noti" />

                    </div>
                    {adminData.map((admin, index) => (
                        <div key={index} className="wrap-person-data">
                            < img src={`${admin.avatar}`} alt="avatar-default" className="avatar-admin" />
                            <p className='name'>{admin.name}</p>
                        </div>
                    ))}
                    <DropDown className="drop-down" />
                </div>
            </div>
            <div className="wrap-main-content">
                <div className='wrap-side-menu'>
                    <div className="wrap-first-box">
                        <div className="camera" onClick={handleOpen}>
                            <Camera />
                            <div className="title-box">
                                <p className='title'>CAMERA GIÁM SÁT</p>
                                {isOpen === true?
                                <ArrowUp className="icon-style" />
                                : 
                                <ArrowDown className="icon-style" />
                                }
                            </div>
                        </div>
                        {isOpen === true ?
                        <>
                        {   
                        <>
                            <div className="statistic-the-flow" style={{color: selectedKey === 0 ? "#ED1C24" : "#595959", backgroundColor: selectedKey === 0 ? "#F6F6F6": "unset"}} onClick={handleSelect0}>
                                {selectedKey === 0 ?
                                <Statistic className=" key-icon" />
                                :
                                <DisableStatistic className="key-icon" />
                                }
                                <p className="title small-title">thống kê lưu lượng</p>
                            </div>
                            
                            <div className="statistic-the-flow"  style={{color: selectedKey === 1 ? "#ED1C24" : "#595959", backgroundColor: selectedKey === 1 ? "#F6F6F6": "unset"}} onClick={handleSelect1}>
                                {
                                    selectedKey === 1 ?
                                    <EnableChart className=" key-icon" />
                                    :
                                    <Chart  className=" key-icon" />
                                }
                                <p className="title small-title">thống kê lượt khách</p>
                            </div>
                        </>
                        }
                        </>
                        : ""
                        }
                    </div>
                    <div className="wrap-second-box">
                        <div className="supervise" onClick={handleOpen}>
                            <Supervise />
                            <div className="title-box">
                                <p className='title'>Giám sát ngăn Tủ</p>
                                {isOpen === true ?
                                <ArrowDown className="icon-style" />
                                : 
                                <ArrowUp className="icon-style" />
                            }
                            </div>
                        </div>
                        {isOpen === false ?
                        <>
                        {   
                        <>
                            <div className="statistic-the-flow" style={{color: selectedKey === 0 ? "#ED1C24" : "#595959", backgroundColor: selectedKey === 0 ? "#F6F6F6": "unset"}} onClick={handleSelect0}>
                                {selectedKey === 0 ?
                                <Activities className=" key-icon" />
                                :
                                <DisableActivities className="key-icon" />
                                }
                                <p className="title small-title">Hoạt động tủ</p>
                            </div>
                            <div className="statistic-the-flow"  style={{color: selectedKey === 1 ? "#ED1C24" : "#595959", backgroundColor: selectedKey === 1 ? "#F6F6F6": "unset"}} onClick={handleSelect1}>
                                {
                                    selectedKey === 1 ?
                                    <EnableHistory className=" key-icon" />
                                    :
                                    <History  className=" key-icon" />
                                }
                                <p className="title small-title">lịch sử khách Gửi</p>
                            </div>
                            <div className="statistic-the-flow"  style={{color: selectedKey === 2 ? "#ED1C24" : "#595959", backgroundColor: selectedKey === 2 ? "#F6F6F6": "unset"}} onClick={handleSelect2}>
                                {
                                    selectedKey === 2 ?
                                    <EnableStaff className=" key-icon" />
                                    :
                                    <Staff  className=" key-icon" />
                                }
                                <p className="title small-title">nhân viên trực</p>
                            </div>
                        </>
                        }
                        </>
                        : ""
                        }
                    </div>
                </div>
                <div className="wrap-main-data">
                {selectedKey === 0 && isOpen === true ? 
                <div>
                    thong ke luu luong
                </div>
                : ""
            }
                </div>
            </div>
        </WrapMainPage>
    )
}
