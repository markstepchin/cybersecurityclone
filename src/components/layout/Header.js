import React from 'react';

const Header = () => (
    <header className='container-fluid py-4'>
        <div className="container">
            <div className="row">
                <div className='col'>
                    <img src="./img/logo.svg" alt="coverhound logo" height="46px" width="auto" />
                </div>
                <div className='col float-right d-none d-md-block'>
                    <p className='text-right white-text'>Have Questions?</p>
                    <p className='text-right green-text'>Call us at (844) 278-3674</p>
                </div>
                <div className='col float-right d-block d-md-none d-lg-none d-xl-none'>
                    <button className='btn float-right' type="button">
                        <i className="fas fa-phone u-color-white fa-flip-horizontal"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
)

export default Header;