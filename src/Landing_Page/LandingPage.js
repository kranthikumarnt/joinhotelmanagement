import React from 'react';

const LandingPage = (props) => {
    console.log("College Component",props)
    return (
        <div>
            <CollegeCard></CollegeCard>
        </div>
    );
}


const CollegeCard = () => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="..." alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                <p className="card-link">Card link</p>
                <p className="card-link">Another link</p>
            </div>
            </div>
        </div>
    );
}
 
export default LandingPage;
