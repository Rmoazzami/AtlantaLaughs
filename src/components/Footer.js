import React from 'react';
import "../css/Footer.css"


function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <img className="footer-logo-style" src="./logo192.png"  />
                    {/*<div className = "col">*/}
                    {/*    <h4>Thicc</h4>*/}
                    {/*    <ul className="List-unstyled">*/}
                    {/*        <li>313-444-2212</li>*/}
                    {/*        <li>Moscow</li>*/}
                    {/*        <li>123 street</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}


                    <div className="wrapper">
                        <p className ='col-sm'>
                            &copy;{new Date().getFullYear()} Atlanta Laughs LLC | ALL RIGHTS RESERVED
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;