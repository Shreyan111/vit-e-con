import React, { useState } from 'react'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import './InviteSponsors.styles.scss'
import sponsorDetails from '../../Assets/pdf/Sponsorship-Details.pdf' 

const InviteSponsors = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const toggleDrawer = (opened) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(opened);
    };

    return (
        <>
            <button onClick={handleClick} className='inv-dates-btn'>&#8592; Invite Sponsors</button>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div className='imp-dates-container'>
                    <div className='dates'>
                        <div className='date'>
                            <div className='date-heading'>For Sponsor Details refer to the form given below:</div>
                            <a href = {sponsorDetails} target = "_blank" style={{color: '#ffffff'}}>Download Pdf</a>
                        </div>
                        {/* <div className='date'>
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
                        </div> */}
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
        </>
    )
}

export default InviteSponsors