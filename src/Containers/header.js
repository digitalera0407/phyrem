import React from 'react'
export default function Header() {
    return (
        <div className='hero-unit'>
            <div className='overlay'></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-6'>
                        <a href=''>
                            <div className='logo'>
                            <img src="https://www.phyrem.com/public/beta/img/Phyrem-Logo.png" data-at2x="https://www.phyrem.com/public/beta/img/Phyrem-Logo.png" alt="logo" style={{ maxWidth:"200px" , marginRight: "15px;"}} />
                            </div>
                        </a>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                        <ul class="social text-center">
                            <li><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.pinterest.com" target="_blank"><i class="fab fa-pinterest"></i></a></li>
                            <li><a href="https://g.page/" target="_blank"><i class="fas fa-store"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="cta">
      <div class="row">
        <aside class="col-md-7"> 
          <div class="cta-video"> 
            <iframe src="https://www.youtube-nocookie.com/embed/tZP0GglBpWw?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
        </aside>
        <div class="col-md-5">
          <div class="welcome-message text-center">
            <h1 class="text-shadow">Get <span class="highlight">Access</span></h1>
            <h2 class="text-shadow">Subscribe Now!!!</h2>
            <div class="sub-form">
              <button type="button" class="button box-shadow zf-submitColor btn get_access" data-text="Get Access" data-toggle="modal">
                GET ACCESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    )
}