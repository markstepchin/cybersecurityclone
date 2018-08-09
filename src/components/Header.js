import React from 'react';

const Header = () => (
    <div>
        <header class='container-fluid py-4'>
            <div class="container">
                <div class="row">
                    <div class='col'>
                        <img src="./img/logo.svg" alt="coverhound logo" height="46px" width="auto" />
                    </div>
                    <div class='col float-right d-none d-md-block'>
                        <p class='text-right white-text'>Have Questions?</p>
                        <p class='text-right green-text'>Call us at (844) 278-3674</p>
                    </div>
                    <div class='col float-right d-block d-md-none d-lg-none d-xl-none'>
                        <button class='btn float-right' type="button">
                            <i class="fas fa-phone u-color-white fa-flip-horizontal"></i>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    </div>
)

export default Header;