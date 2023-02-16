import React from 'react'
import './Publication.Styles.scss'

const Publication = () => {
  return (
    <div className='publication'>
        <div className='content'>
            <h1 className='heading-secondary'>Publication Details</h1>
            <ul>
                <li className='text'>All the registered and presented papers will be published in conference proceedings with ISBN number.</li>
                <li className='text'>The proceedings of ViTECoN 2023 will be forwarded to IEEE Xplore publication.</li>
                <li className='text'>Proceedings of the previous edition of the ViTECoN (2019) conference series have been published in the <a href='https://ieeexplore.ieee.org/xpl/conhome/8893975/proceeding'>IEEE Xplore digital library</a> successfully.</li>
            </ul>
        </div>
    </div>
  )
}

export default Publication