import './See.css'
    import ic12 from './../../Img/ic12.webp'
    
    import ic11 from './../../Img/ic11.webp'

    const See = () => {
    return (
    
    <section className="performance">
        <div className="container mt-5">
            <div className="head-perfonce">
            <h2 className="text-center d-flex">WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
            <p className="text-secondary text-center">EXPERIENCE HIGH PERFORMANCE
                AND SECURE</p>
            </div>
            <div className="main-performance mt-5">
            <div className="row m-auto d">
                <div className="col-lg-4  col-md-6 col-sm-12 text-center mb-4">
                <div className="card ">
                    <img className="card-img-top mb-3" src={ic12} alt="Card image cap"/>
                    <p className="p-card">PERFECT CUT</p>
                    <h4 className="p-card">DUAL CAMERA</h4>
                    <p className="card-text text-secondary">Tristique senectus et netus et malesuada ant reiet fames.</p>

                </div>
                </div>
    
                <div className="col-lg-4  col-md-6 col-sm-12 text-center mb-4">
                <div className="card">
                    <img className="card-img-top mb-3" src={ic11} alt="Card image cap"/>
    
                    <p className="p-card">PERFECT CUT</p>
                    <h4 className="p-card">DUAL CAMERA</h4>
                    <p className="card-text text-secondary">Tristique senectus et netus et malesuada ant reiet fames.</p>
    
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
                <div className="card">
                    <img className="card-img-top mb-3" src={ic11} alt="Card image cap"/>
                    <p className="p-card">PERFECT CUT</p>
                    <h4 className="p-card">DUAL CAMERA</h4>
                    <p className="card-text text-secondary">Tristique senectus et netus et malesuada ant reiet fames.s </p>
                </div>
                </div>
            </div>
    
            </div>
        </div>
    
        </section>

    )
    }

    export default See