import './App.css';
import {Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page8 from "./components/Page8";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";
import Page12 from "./components/Page12";
import Page13 from "./components/Page13";
import Page14 from "./components/Page14";
import Page15 from "./components/Page15";
import Page24 from "./components/Page24";
import Page25 from "./components/Page25";
import Page26 from "./components/Page26";
import Page27 from "./components/Page27";
import Page28 from "./components/Page28";
import Page29 from "./components/Page29";
import Page16 from "./components/Page16";
import Page17 from "./components/Page17";
import Page19 from "./components/Page19";
import Page20 from "./components/Page20";
import Page21 from "./components/Page21";
import Page18 from "./components/Page18";
import Page23 from "./components/Page23";
import Page22 from "./components/Page22";

function App() {
    const location = useLocation();
    const {pathname} = location;
    let currentPage = pathname === '/' ? 1 : parseInt(pathname.replace('/page', ''), 10);
    currentPage = isNaN(currentPage) ? 1 : currentPage;
    const prevPage = currentPage - (currentPage === 6 ? 2 : 1);
    const nextPage = currentPage + (currentPage === 4 ? 2 : 1);
    return (
        <div className="wrapper">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i
                            className="fas fa-bars"></i></a>
                    </li>
                </ul>
            </nav>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" className="brand-link">
                    <img src="assets/images/logo.png" alt="AdminLTE Logo"
                         className="brand-image img-circle elevation-3"
                         style={{opacity: .8}}/>
                    <span className="brand-text font-weight-light">MCHN</span>
                </Link>

                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                            data-accordion="false">
                            <li className="nav-item menu-open">
                                <Link className='nav-link active' to='/'>
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        মাতৃত্ব সেবা কার্ড
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="page2" element={<Page2/>}/>
                    <Route path="page3" element={<Page3/>}/>
                    <Route path="page4" element={<Page4/>}/>
                    <Route path="page6" element={<Page6/>}/>
                    <Route path="page7" element={<Page7/>}/>
                    <Route path="page8" element={<Page8/>}/>
                    <Route path="page9" element={<Page9/>}/>
                    <Route path="page10" element={<Page10/>}/>
                    <Route path="page11" element={<Page11/>}/>
                    <Route path="page12" element={<Page12/>}/>
                    <Route path="page13" element={<Page13/>}/>
                    <Route path="page14" element={<Page14/>}/>
                    <Route path="page15" element={<Page15/>}/>
                    <Route path="page16" element={<Page16/>}/>
                    <Route path="page17" element={<Page17/>}/>
                    <Route path="page18" element={<Page18/>}/>
                    <Route path="page19" element={<Page19/>}/>
                    <Route path="page20" element={<Page20/>}/>
                    <Route path="page21" element={<Page21/>}/>
                    <Route path="page22" element={<Page22/>}/>
                    <Route path="page23" element={<Page23/>}/>
                    <Route path="page24" element={<Page24/>}/>
                    <Route path="page25" element={<Page25/>}/>
                    <Route path="page26" element={<Page26/>}/>
                    <Route path="page27" element={<Page27/>}/>
                    <Route path="page28" element={<Page28/>}/>
                    <Route path="page29" element={<Page29/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <div className="float-btn">
                    <div className="btn-group">
                        {
                            currentPage > 1 ?
                                <Link className="btn btn-info" to={`page${prevPage}`}>{`<`}</Link> : ''
                        }

                        {
                            currentPage < 29 ?
                                <Link className="btn btn-info" to={`page${nextPage}`}>></Link> : ''
                        }

                    </div>
                    <div className='page-number'>Page - {currentPage === 4 ? '4-5' : currentPage}</div>
                </div>
            </div>
            <footer className="main-footer">
                <strong>Copyright &copy; 2023-2024 @ DGFP.</strong> All rights reserved.
                <div className="float-right d-none d-sm-inline-block"></div>
            </footer>
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div>
    );
}

export default App;
