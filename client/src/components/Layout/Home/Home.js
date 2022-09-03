import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/fontawesome-free-6.1.0-web/css/all.min.css'
import classNames from 'classnames/bind';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import styles from './Home.module.scss';
import img1 from '../../../assets/img/img1.png';
import img2 from '../../../assets/img/img2.png';
import logo from '../../../assets/img/logo3.png'
const cx = classNames.bind(styles);

function Home() {

    const [stateMenu, setStateMenu] = useState('block');
    const [stateClose, setStateClose] = useState('none');
    const handleSideBar = () => {
        if (stateMenu === 'block') {
            setStateMenu('none');
            setStateClose('block');
        } else {
            setStateMenu('block');
            setStateClose('none');
        }
    }
    return (
        <div className={`${cx('Home')} ${'grid'}`}>
            <div className={`${cx('header')} ${'row'}`}>
                <div className={`${cx('Bar')} ${'col l-12 m-12 c-12'}`}>
                    <div className='row'>
                        <div className={`${cx('barLogo')} ${'col l-3 m-3 c-3'}`}>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className={`${cx('containerBar')} ${'col l-9 m-9 c-9'}`}>
                            <div className={`${cx('navBar')} ${''}`}>
                                <div className='row'>
                                    <Link to="/help" className={`${cx('navBarBtnHelp')} ${''}`}>
                                        Help
                                    </Link>
                                    <Link to="/login" className={`${cx('navBarBtnLogin')} ${''}`}>
                                        <p>Login / Sign Up</p>
                                    </Link>
                                </div>
                            </div>
                            <div className={`${cx('sideBar')} ${'col l-0 m-0 c-10'}`}>
                                <div className={`${cx('sideBarMenuBtn')} ${stateMenu}`}>
                                    <i className="fa-solid fa-bars" onClick={() => handleSideBar()}></i>
                                </div>
                                <div className={`${cx('sideBarContent')} ${stateClose}`}>
                                    <div className='row'>
                                        <div className={`${cx('sideBarContentBtn')} ${'c-2'}`} >
                                            <i className="fa-light fa-x" onClick={() => handleSideBar()}></i>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <Link to="/help" className={`${cx('sideBarBtn')} ${'c-10 c-o-1'}`}>
                                            Help
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link to="/login" className={`${cx('sideBarBtn')} ${'c-10 c-o-1'}`}>
                                            <p>Login / Sign Up</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${cx('body')} ${'row'}`}>
                <ReactCompareSlider className={`${cx('backGroundSlide')} ${'col l-7 m-12 c-12'}`}
                    itemOne={<ReactCompareSliderImage src={img2} srcSet={img1} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={img1} srcSet={img2} alt="Image two" />}
                />
                <div className={`${cx('container')} ${'col l-5 m-12 c-12'}`}>
                    <div className={`${cx('contentContainer')} ${'row'}`}>
                        <div className={`${cx('content')} ${''}`}>
                            <div className={`${cx('contentTitle')} ${''}`}>
                                Enhance image quality with AI in 1 step
                            </div>
                            <div className={`${cx('contentBody')} ${''}`}>
                                IE Photo Enhancer uses Artificial Intelligence to help you improve, sharpen your photos instantly.
                            </div>
                            <div className={`${cx('contentUpload')} ${''}`}>
                                <Link to="/download">
                                    <i className={`${cx('contentUploadIcon')} ${'fa-solid fa-cloud-arrow-up'}`}></i>
                                    <div className={`${cx('contentUploadDrop')} ${''}`}>
                                        <p>Drag and drop your image here</p>
                                    </div>
                                    <div className={`${cx('contentUploadFooter')} ${''}`}>
                                        By continuing, you accept our Terms of Service and acknowledge receipt of our Privacy and Cookie Policy
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={`${cx('footer')} ${'col l-8 m-6 c-6 l-o-4 m-o-3 c-o-3'}`}>
                            <div className={`${cx('footerBtnCookie')} ${''}`}>
                                Your cookie preferencres
                            </div>
                            <div className={`${cx('footerContent')} ${''}`}>
                                Address: lane 82 Duy Tan Street, Dich Vong Hau, Cau Giay, Hanoi, Vietnam- Developed by IE team is subject to the management and coordination of Techainer.
                                <br />
                                © 2022 IE team
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;

// {`${cx('')} ${''}`}
