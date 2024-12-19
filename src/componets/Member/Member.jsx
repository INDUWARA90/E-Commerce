import React from 'react'
import './member.css'

function Member({member}) {
    return (
        <>

            <div className="card" style={{width:'18rem',border:'none'}}>
                <img src={member.image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{member.name}</h5>
                    <h6 className="card-title">{member.possition}</h6>
                </div>
            </div>
        </>
    )
}

export default Member