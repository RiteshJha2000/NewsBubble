import React from 'react'
import loading from './img/loading.gif'

const Spinner = () => {
    
        return (
            <div >
                <div className="text-center" >
                 <img className='my-3' src={loading} alt="loading" style={{borderRadius:'150px'}}/>
                </div>
            </div>
        )
    
}

export default Spinner
