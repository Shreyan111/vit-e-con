import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { scroller } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import './NavBar.Styles.scss'

const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  //when click a option from the navbar and when it redirects to other page the navbar should close
  useEffect(() => {
    setOpen(false)
    if (location.hash) {
      scrollTo(location.hash.slice(1))
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location])

  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      offset: -100,
      smooth: 'easeInOutQuart'
    })
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEldate, setAnchorEldate] = useState(null);
  const openDropDowndate = Boolean(anchorEldate);
  const handleMouseOverdate = (event) => {
    setAnchorEldate(event.currentTarget);
  };
  const handleClosedate = () => {
    setAnchorEldate(null);
  };

  const [anchorElvenue, setAnchorElvenue] = useState(null);
  const openDropDownvenue = Boolean(anchorElvenue);
  const handleMouseOvervenue = (event) => {
    setAnchorElvenue(event.currentTarget);
  };
  const handleClosevenue = () => {
    setAnchorElvenue(null);
  };


  const [opens, setOpens] = useState(false)

  const handleClicks = () => {
    setOpens(true)
  }

  const toggleDrawer = (opened) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpens(opened);
  };


  return (
    <nav data-aos-duration="1000" data-aos-delay="500" data-aos='fade-down' className='navbar-white'>
      <div className='nav-container'>
        <div className='nav-links'>
          <Link className='nav-option' to='/'>Home</Link>
          <Link
            className='nav-option'
            to='/committee'
            aria-controls={openDropDown ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openDropDown ? 'true' : undefined}
            onClick={() => navigate('/committee')}
            onMouseOver={handleMouseOver}
          >
            Committee
          </Link>
          <Link className='nav-option' to='/call-for-paper'
            onMouseOver={handleMouseOverdate} aria-controls={openDropDowndate ? 'date-1' : undefined}
            aria-haspopup="true"
            aria-expanded={openDropDowndate ? 'true' : undefined}>Call for Paper</Link>
          <Link className='nav-option' to='/publication'>Publication</Link>
          <Link className='nav-option' to='/speakers'>Speakers</Link>
          <Link className='nav-option' to='/registration'>Registration</Link>
          <Link className='nav-option' to='/#map-section' onMouseOver={handleMouseOvervenue} aria-controls={openDropDownvenue ? 'date-2' : undefined}
            aria-haspopup="true"
            aria-expanded={openDropDownvenue ? 'true' : undefined}>Venue & Travel</Link>
          <Link className='nav-option' to={location.pathname === "/" ? '/#contact-us-section' : location.pathname + '/#contact-us-section'}>Contact Us</Link>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openDropDown}
          onClose={handleClose}
          disableScrollLock={true}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            onMouseLeave: handleClose
          }}
        >
          <Link className='dropdown-item' to='/committee/#organising-committee'><MenuItem onClick={handleClose}>Organising Committee</MenuItem></Link>
          <Link className='dropdown-item' to='/committee/#technical-program-committee'><MenuItem onClick={handleClose}>Technical Program Committee</MenuItem></Link>
          <Link className='dropdown-item' to='/committee/#student-organising-committee'><MenuItem onClick={handleClose}>Student Organising Committee</MenuItem></Link>
        </Menu>

        <Menu
          id="date-1"
          anchorEl={anchorEldate}
          open={openDropDowndate}
          onClose={handleClosedate}
          disableScrollLock={true}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            onMouseLeave: handleClosedate
          }}
        >
          <Link className='dropdown-item' to='/call-for-paper'><MenuItem>Call for Papers</MenuItem></Link>
          <Link className='dropdown-item' to='/' onClick={handleClicks}><MenuItem>Important Dates</MenuItem></Link>
          <Link className='dropdown-item' to='/author-guidelines'><MenuItem>Author Guidelines</MenuItem></Link>
        </Menu>

        <Menu
          id="date-2"
          anchorEl={anchorElvenue}
          open={openDropDownvenue}
          onClose={handleClosevenue}
          disableScrollLock={true}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            onMouseLeave: handleClosevenue
          }}
        >
          <Link className='dropdown-item' to='/#map-section'><MenuItem>Venue</MenuItem></Link>
          <Link className='dropdown-item' to='/travel-visa'><MenuItem>Travel & VISA</MenuItem></Link>
        </Menu>

        <SwipeableDrawer
          anchor="right"
          open={opens}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div className='imp-dates-container'>
            <div className='dates'>
              <div className='date'>
                <div className='date-heading'>Paper Submission Deadline</div>
                <div className='date-value'>7th April, 2023</div>
              </div>
              <div className='date'>
                <div className='date-heading'>Notification of Acceptance</div>
                <div className='date-value'>10th April, 2023</div>
              </div>
              <div className='date'>
                <div className='date-heading'>Author Registration</div>
                <div className='date-value'>12th April, 2023</div>
              </div>
              <div className='date'>
                <div className='date-heading'>Conference Date</div>
                <div className='date-value'>5th - 6th May, 2023</div>
              </div>
            </div>
            <div className='contacts'>
              <div className='contact'>
                <div className='name'>Dr. THANIKAISELVAN V</div>
                <div className='email'>convenor.vitecon@vit.ac.in</div>
                <div className='email'>convenor.vitecon@gmail.com</div>
                <div className='phone'>+91 8807717720</div>
              </div>
            </div>
          </div>
        </SwipeableDrawer>

        <div className={open ? 'menu-icon closed' : 'menu-icon'} onClick={handleClick}>
          <div className={open ? 'straight-angle' : 'straight'}></div>
        </div>

        <div className={open ? 'menu-container opened' : 'menu-container'}>
          <Link className='nav-option' to='/'>Home</Link>
          <Link className='nav-option' to='/#about-us-section'>About Us</Link>
          <Link
            className='nav-option'
            to='/committee'
          >
            Committee
          </Link>
          <Link className='nav-option' to='/call-for-paper'>Call for Paper</Link>
          <Link className='nav-option' to='/author-guidelines'>Author Guidelines</Link>
          <Link className='nav-option' to='/publication'>Publication</Link>
          <Link className='nav-option' to='/speakers'>Speakers</Link>
          <Link className='nav-option' to='/registration'>Registration</Link>
          <Link className='nav-option' to='/#map-section'>Venue</Link>
          <Link className='nav-option' to='/travel-visa'>Travel & VISA</Link>
          <Link className='nav-option' to={location.pathname === "/" ? '/#contact-us-section' : location.pathname + '/#contact-us-section'}>Contact Us</Link>
          {/* <Link className='nav-option' to={location.pathname === '/' ? '/#contact-us-section' : '/cars/#contact-us-section'}>Contact Us</Link> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar