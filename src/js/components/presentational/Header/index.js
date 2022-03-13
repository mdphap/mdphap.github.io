import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({ withSearchEnabled }) => (
    <header className="header fixed-top">

        <div className="branding docs-branding">
            <div className="container-fluid position-relative py-2">
                <div className="docs-logo-wrapper">
                    <div className="site-logo">
                        <a className="navbar-brand" href="/">
                            <img className="logo-icon me-2" height="50"
                                src="https://www.gso.gov.vn/wp-content/uploads/2021/01/gso_logo.png"
                                alt="logo"/><span className="logo-text">Sổ tay nghiệp vụ</span>
                        </a>
                    </div>
                </div>

                <div className="docs-top-utilities d-flex justify-content-end align-items-center">

                    {
                        !!withSearchEnabled && (
                            <div className="top-search-box d-none d-lg-flex">
                                <form className="search-form">
                                    <input type="text" placeholder="Tìm kiếm từ khóa..." name="search"
                                           className="form-control search-input" />
                                    <button type="submit" className="btn search-btn" value="Search">
                                        <FontAwesomeIcon icon={['fas', 'search']} />
                                    </button>
                                </form>
                            </div>
                        )
                    }

                    {/* <ul className="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                        <li className="list-inline-item"><a href="https://github.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://linkedin.com/company/mav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://mav3rikworkspace.slack.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'slack']} fixedWidth /></a></li>
                    </ul>

                    <a href="https://mav3rik.com" target="_blank" rel="noreferrer noopener"
                       className="btn btn-primary d-none d-lg-flex" style={{background: 'linear-gradient(78.1deg, #8F2D56 0%, #D81159 100%)'}}>We are Hiring!</a> */}
                </div>

            </div>

        </div>

    </header>
)

export default Header;