import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
    return(
        <div className="footer bg-dark">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4  justify-content-start">
                        <ul className="list-unstyled">
                            <li ><Link  className = "text-white" to='/home'>Home</Link></li>
                            <li ><Link  className = "text-white" to='/top'>Top Movies</Link></li>
                            <li ><Link  className = "text-white" to='/discovery'>Discovery</Link></li>
                        </ul>
                    </div>
                    <div className = "col  justify-content-end m-auto">
                        <p className = "text-white">©2018 by Alex</p>
                    </div>


               </div>
           </div>
       </div>
   )
}

export default Footer
