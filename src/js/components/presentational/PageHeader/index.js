import React from 'react';

const PageHeader = () => (
    <div className="page-header theme-bg-dark py-5 text-center position-relative">
        <div className="theme-bg-shapes-right"></div>
        <div className="theme-bg-shapes-left"></div>
        <div className="container">
            <h1 className="page-heading single-col-max mx-auto">Coding Style Guide</h1>
            <div className="page-intro single-col-max mx-auto">
                This style guide is the coding standards for the developers of Mav3rik.
            </div>
            <div className="main-search-box pt-3 d-block mx-auto">
                <form className="search-form w-100">
                    <input type="text" placeholder="Search the docs..." name="search"
                           className="form-control search-input"/>
                    <button type="submit" className="btn search-btn" value="Search"><i
                        className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    </div>
);

export default PageHeader;