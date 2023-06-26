import React from 'react'

export default function OFeatures() {
    return (
        <section class="timer text-center section-spacing">
            <div class="container">
                <h2 class="text-center" style={{margin:" 0 0 50px 0"}}>OUR FEATURES</h2>

                <div class="row">
                    <div class="col-md-3">
                        <div class="slide-left feature">
                            <img src="https://www.phyrem.com/public/beta/img/trigger-parent-icon.png" alt="connect-icon" class="feature-icon"></img>
                                <h3 class="e2e_title">TRIGGERS</h3>
                                <p>Enable or Create Proximity Based Triggers in Order to Maintain Bidirectional Engagement</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="slide-left feature">
                            <img src="https://www.phyrem.com/public/beta/img/connectivity-parent-icon.png" alt="Engage" class="feature-icon"></img>
                                <h3 class="e2e_title">CONNECTIVITY</h3>
                                <p>Establish Real-Time or Pre-Scheduled connections with your customers or teams Via Push Notifications, SMS, Email and Social Media</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="slide-right feature">
                            <img src="https://www.phyrem.com/public/beta/img/content-parent-icon.png" alt="Monitor" class="feature-icon"></img>
                                <h3 class="e2e_title">CONTENT</h3>
                                <p>Create personalized experiences by Choosing from a suite of pre-built templates; such as email, mobile friendly landing pages and Wallet Passes</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="slide-right feature">
                            <img src="https://www.phyrem.com/public/beta/img/analytics-icon.png" alt="Profit" class="feature-icon"></img>
                                <h3 class="e2e_title">ANALYTICS</h3>
                                <p>Gain valuable insights On your customers Interactions with your content and triggers</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}