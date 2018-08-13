import React from 'react';

const ProgressBarOperations = () => (
    <div class="container-fluid progress-nav text-uppercase d-flex justify-content-center">

        <div class="container d-none d-md-block" align='center'>
            <div class="row mx-4">
                <div class="col my-3" align='center'>
                    <div class='circle complete-circle large-circle inline-block'>1</div>
                    <p class='lg-progress-text current-text'>businnes info</p>
                </div>
                <div class="col my-3" align='center'>
                    <div class='circle current-circle large-circle inline-block'>2</div>
                    <p class='lg-progress-text current-text'>operations</p>
                </div>
                <div class="col my-3" align='center'>
                    <div class='circle incomplete-circle large-circle inline-block'>3</div>
                    <p class='lg-progress-text incomplete-text'>data management</p>
                </div>
                <div class="col my-3" align='center'>
                    <div class='circle incomplete-circle large-circle inline-block'>4</div>
                    <p class='lg-progress-text incomplete-text'>contact info</p>
                </div>
            </div>
        </div>

        <div class="container d-block d-md-none d-lg-none d-xl-none" align='center'>
            <div class="row mx-2">
                <div class="col my-3" align='center'>
                    <div class='circle complete-circle small-circle inline-block'>1</div>
                    <p class='sm-progress-text current-text'>info</p>
                </div>
                <div class="col my-3" align='center'>
                    <div class='circle current-circle small-circle inline-block'>2</div>
                    <p class='sm-progress-text current-text'>operations</p>
                </div>
                <div class="col my-3" align='center'>
                    <div class='circle incomplete-circle small-circle inline-block'>3</div>
                    <p class='sm-progress-text incomplete-text'>data</p>
                </div>
                <div class="col my-3" align='center'>
                    <div class='circle incomplete-circle small-circle inline-block'>4</div>
                    <p class='sm-progress-text incomplete-text'>contact</p>
                </div>
            </div>
        </div>
    </div>
)

export default ProgressBarOperations;