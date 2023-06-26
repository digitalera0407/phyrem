import React from 'react'

export default function IoT() {
    return (
        <div class="counter text-center">
            <div class="overlay-2"></div>

            <div class="container">
                <div class="row">
                <div class="col-sm-12">
                        <h2 class="text-center" style={{ margin: "0 0 50px 0", color: "#fff" }}>IoT Engagements and Counting...</h2>
                </div>
                <div class="col-sm-3 col-xs-6">
                <img src="https://www.phyrem.com/public/beta/img/trigger-parent-icon.png" alt="trigger" class="feature-icon" />
                <h3 class="total-number-1">0</h3>
                <p>Trigger Engagements</p>
                </div>
                <div class="col-sm-3 col-xs-6">
                <img src="https://www.phyrem.com/public/beta/img/connectivity-parent-icon.png" alt="connectivity" class="feature-icon" />
                <h3 class="total-number-2" >0</h3>
                <p>Connections Established</p>
                </div>
                <div class="col-sm-3 col-xs-6">
                <img src="https://www.phyrem.com/public/beta/img/content-parent-icon.png" alt="content" class="feature-icon" />
                <h3 class="total-number-3">0</h3>
                <p>Content Created</p>
                </div>
                <div class="col-sm-3 col-xs-6">
                <img src="https://www.phyrem.com/public/beta/img/campaign-icon.png" alt="campaign" class="feature-icon" />
                <h3 class="total-number-4">0</h3>
                <p>Campaigns Created</p>
                </div>
                </div>
            </div>
        </div>
    )
}