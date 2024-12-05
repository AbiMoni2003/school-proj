import React, { Fragment } from 'react'
import '../assets/style.css';

function Footer() {
  return (
    <Fragment>
        <div className="whole-footer-div">
        <div className="footer-div">
            <div className="footer-content">
                <h3>Engineering</h3>
                <p>Structural Steel Detailing<br/>
                    Miscellaneous Steel Detailing<br/>
                    Estimodeling & Take-offs<br/>
                    Connection Design & PE Stamping</p>
                    <h3>Development</h3>
                    <p>Web App Development<br/>
                    Mobile App Development<br/>
                    Custom App Development</p>
            </div>
            <div className="footer-content">
                <h3>USA Office</h3>
                <p>Corpfield LLC<br/>
                    1942 Broadway St, STE 314C<br/>
                    Boulder, CO 80302<br/>
                    Phone: +1 303 800 4093</p>
            </div>
            <div className="footer-content">
                <h3>India Office</h3>
                <h4>Chennai</h4>
                <p>#52 B, Ashtalakshmi Nagar,<br/>
                    24th Street, Alappakkam,<br/>
                    Chennai - 600116</p>
                <h4>Nagercoil</h4>
                <p>#520A/1, Kesava Thirupapuram,<br/>
                    MS Road Vettunimadam,<br/>
                    Nagercoil - 629003</p>
            </div>
        </div>
        <hr/>
         <div className="footer-icon">
            <p><a href='https://www.facebook.com/corpfield?rdid=9VBZc8vxgDPNMibA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19aj1hEbET%2F#' target='_blank'><i className="fa-brands fa-facebook"></i></a></p> 
            <p><a href='https://www.instagram.com/abi_shek_09?igsh=OGQ5ZDc2ODk2ZA==' target='_blank'><i className="fa-brands fa-instagram"></i></a></p>
            <p><a href='https://www.linkedin.com/company/corpfield/' target='_blank'><i className="fa-brands fa-linkedin"></i></a></p>
         </div>
            <p style={{textAlign:"center",paddingBottom:"10px"}}>Copyright © 2024 Corpfield LLC. All rights reserved.</p>
        </div>
    </Fragment>
  )
}

export default Footer