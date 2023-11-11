import React from 'react'
import logo from "./../../Img/logo.png"
import NavDropdown from 'react-bootstrap/NavDropdown';

import classes from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import flags from '../../Img/all.json'
import Flag from './Flag/flag'
import  {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const [show, setShow] = useState(false);
    const [activeFlag, setActiveFlag] = useState({name:flags[0].cca2,flagImage: flags[0].flags.png });
    const [pages, setPages] = useState(false);

    const showDropdown = (e) => {
        setShow(true);
    };

    const hideDropdown = (e) => {
        setShow(false);
    };
    const showPageList = (e) => {
        setPages(true);
    };

    const hidePageList = (e) => {
        setPages(false);
    };

    const navigate=useNavigate()
    const clickAndroidHandler=()=>{
        navigate('/android')
        
    }
    const clickShopHandler=()=>{
        navigate('/Shop')
        
    }
    const clickHomeHandler=()=>{
        navigate('/')
        
    }
    return (
    <div className={classes.container}>
        
        <img src={logo} alt="" />
        
        <div className={classes.allitems}>
            <div className={classes.items}>
                {/* <p onClick={clickHomeHandler}>Home</p>
                <NavDropdown className={classes.col} title="collection" >
                    <h2>SSD CARD
                        <p>hhh</p>
                    </h2>
                    <h2>fregerg
                        <p>gss</p>
                    </h2>
                    <h2>sss
                        <p>afa</p>
                    </h2>

                </NavDropdown >
                <p onClick={clickAndroidHandler}>Android</p>
                <p onClick={clickShopHandler}>Shop</p>
                <p>Accessories</p>
                <p>Memory&Storage</p>
                <NavDropdown className={classes.col} title="Pages" >
                    <h2>About US</h2>
                    <hr />
                    <h2>Contact US</h2>
                    <hr />
                    <h2> blog</h2>

                </NavDropdown > */}
                <ul  className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li onClick={clickHomeHandler}>Home</li>
                    <li><NavDropdown className={classes.col} title="collection" >
                    <h2>SSD CARD
                        <p>hhh</p>
                    </h2>
                    <h2>fregerg
                        <p>gss</p>
                    </h2>
                    <h2>sss
                        <p>afa</p>
                    </h2>

                </NavDropdown ></li>
                    <li onClick={clickAndroidHandler}>Android</li>
                    <li onClick={clickShopHandler}>Shop</li>
                    <li>Accessories</li>
                    <li>Memory&Storage</li>
                    <li><NavDropdown className={classes.col} title="Pages" >
                    <h2>About US</h2>
                    <hr />
                    <h2>Contact US</h2>
                    <hr />
                    <h2> blog</h2>

                </NavDropdown ></li>
                    
                </ul>
                <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}

            </div>
            </div>
            
            <div className={classes.iconsnav}>
                            <div className="px-1 dd" ><FontAwesomeIcon icon={faUser}/></div>
                            <div className="px-1 dd"><FontAwesomeIcon icon={faCartShopping}/></div>
                            <div className="px-1 dd"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
            </div>
            <div className={classes.iconsnav}>
                            <NavDropdown title={<Flag name={activeFlag.name} className="d-inline-block" flagImage={activeFlag.flagImage}></Flag>}
                                            id="flagDropDown"
                                            className="black fw-500 ">
                                <div className="dropdown-list scrolOn300Px">
                                {flags.map((flag) => {
                                    return (
                                        <NavDropdown.Item
                                            className="colorBlack colorBlueOnHover move-text "
                                            onClick={() => setActiveFlag({name:flag.cca2, flagImage: flag.flags.png})}
                                            onMouseEnter={showPageList} // Show the dropdown on hover
                                        >
                                            <Flag name={flag.cca2} flagImage={flag.flags.png}></Flag>
                                        </NavDropdown.Item>
                                    )
                                })}
                                </div>
                            </NavDropdown>
                            {/* <div className="px-1 " ><FontAwesomeIcon icon={faUser}/></div>
                            <div className="px-1"><FontAwesomeIcon icon={faCartShopping}/></div>
                            <div className="px-1"><FontAwesomeIcon icon={faMagnifyingGlass}/></div> */}
            </div>
                        
        </div>

    </div>
    )
}

export default Header