import './Sentance.css'
import React from 'react'

    const Sentance = () => {
    return (
        <div className="sentance  text-light pt-2">
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 col-sm-6 d-flex">
                    <p className="p-one text-center">Long Weekend Sale Up to 50% OFF <span id="s">Shop Now</span></p>
                    <div className="col-md-3 col-sm-6 pr-2">
                    <button type="button" className="close" aria-label="Close" id="x" onclick="close()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    )
    }

    export default Sentance