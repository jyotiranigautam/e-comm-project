import React from 'react'

const Breadcrumbs = ({ pageName}) => {
    return (
        <div >
            <div className="d-flex align-items-center gap-3 breadcrumb-container px-3 py-3">
                <h3>{pageName}</h3>
                <hr style={{ height: '2vh', width: '.1vw', borderWidth: '0', backgroundColor: 'black' }} />
                <div className="breadcrumbs">
                    <a href="/home">Home</a>
                    <i className='bx bx-chevron-right'></i>
                    <a href="/dashboard">Dashboard</a>
                    <i className='bx bx-chevron-right'></i>
                    <a href="/manage-products" activeclassname='active' className='current-page'><span  style={{ color: '#d05278' }}>{pageName}</span></a>
                </div>
            </div>
           
        </div>
    )
}

export default Breadcrumbs
