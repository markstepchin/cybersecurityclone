import React from 'react';

const Form = () => (
    <div class="container border pt-5">
        <div class="row">
            <div class="col pl-5">
                <h3 class='mb-4'>Let's get started</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 px-5 ">
                <p class='mb-4'>To get started, please tell us a little bit about your business. The whole process only takes about 5 minutes,
                    and at the end we'll be able to match you with real cyber insurance rates from top insurance carriers.</p>

                <form>
                    <div class="form-group  mb-4">
                        <label for="businessName">Business Name</label>
                        <input type="text" class="form-control" id="businessName" placeholder="ABC Company" />
                    </div>

                    <div class="form-group  mb-4">
                        <label for="businessType">Business Type</label>
                        <input type="text" class="form-control" id="businessType" placeholder="Search for business type" />
                    </div>

                    <div class="form-group  mb-4">
                        <label for="projectedRevenue">Projected Revenue (Next 12 Months)</label>
                        <input type="number" class="form-control" id="projectedRevenue" placeholder="e.g., $400,000" />
                    </div>

                    <div class="form-group  mb-4">
                        <label for="numberEmployees">Number of Employees</label>
                        <input type="number" class="form-control" id="numberEmployees" placeholder='e.g., 10' />
                    </div>

                    <div class="mb-4">
                        <label>
                            Are you subject to:
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label check-label" for="defaultCheck1">
                                    PCI/DCI Compliance
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label check-label" for="defaultCheck1">
                                    HIPAA/HITECH Compliance
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label check-label" for="defaultCheck1">
                                    None
                      </label>
                            </div>
                        </label>
                    </div>

                    <label>
                        Have you previously purchased a Cyber Insurance Policy?
                    </label>
                    <div class="row mb-4">
                        <div class="col-6">
                            <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-light btn-block py-3">No</button>
                        </div>
                    </div>

                    <div class="form-group mb-4">
                        <label for="lengthInsured">Since when have you had continuous Cyber Insurance coverage (retroactive date)?</label>
                        <input type="date" class="form-control" id="lengthInsured" placeholder='e.g., 10' />
                    </div>

                    <div class="my-5">
                        <button type="button" class="continue-btn">
                            Continue
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </form>
            </div>
            {/* <!-- /col-7 --> */}

            {/* <!-- guarantee --> */}
            <div class="col-lg-4 border-left px-5">
                <div class='text-center border-bottom d-none d-lg-block pb-4'>
                    <h6>Secure Your Business</h6>
                    <h1>0%</h1>
                </div>
                <div class='my-5'>
                    <h5>We've got your back!</h5>
                    <p>We were taught to treat people the way we want to be treated. We'll never sell or share your info with
                        any third parties because we wouldn't want our info sold or shared with strangers. Your info will
                        only be used by us to connect with you and to match you with the best cyber insurance for your business.
                        That's it. For more information, please review our
                        <a href="https://cyberpolicy.com/privacy" target="_blank"> Privacy Policy</a>.</p>
                </div>
            </div>
            {/* <!-- guarantee --> */}

        </div>
        {/* <!-- /row --> */}

    </div>
)

export default Form;