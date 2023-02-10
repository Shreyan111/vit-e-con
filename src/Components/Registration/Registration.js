import React from 'react'
import './Registration.Styles.scss'

const Registration = () => {
    return (
        <div className='registration'>
            <h1 className='heading-secondary'>Registration Details</h1>
            <div className='content'>
                <div className='pricing'>
                    <h3 className='register-fee-heading'>Registration Fee(Including GST):</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>INDIAN AUTHORS</th>
                                <th>Non-IEEE Members</th>
                                <th>IEEE Members </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Graduate Students / Research Scholars</th>
                                <td>Rs. 8,000</td>
                                <td>Rs. 7,500 </td>
                            </tr>
                            <tr>
                                <th>Academicians </th>
                                <td>Rs. 9,000</td>
                                <td>Rs. 8,500 </td>
                            </tr>
                            <tr>
                                <th>Industry and Others </th>
                                <td>Rs. 10,000</td>
                                <td>Rs. 9,500 </td>
                            </tr>
                            <tr>
                                <th>Participants</th>
                                <td>Rs. 1,500</td>
                                <td>Rs. 1,500</td>
                            </tr>
                            <tr>
                                <th>Additional Conferences kit and Proceedings</th>
                                <td>Rs. 2,000</td>
                                <td>Rs. 2,000 </td>
                            </tr>
                            <tr>
                                <th>Foreign Authors</th>
                                <td>250 USD</td>
                                <td>225 USD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='buttons'>
                    <button className='btn'>IEEE Paper Format</button>
                    <button className='btn'>IEEE Copyright Form</button>
                    <button className='btn'>Submit Copyright Form</button>
                </div>
            </div>
            <div className='btn-div'>
                <button className='btn-secondary'>Register Now</button>
            </div>
        </div>
    )
}

export default Registration