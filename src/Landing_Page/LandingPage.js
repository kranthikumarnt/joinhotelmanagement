import React from 'react';
import classes from './card.module.css'
const LandingPage = (props) => {
    console.log("College Component",props)
    var items = [1,2,3,4,5,6,7,8,9,10]
    const data = items.map((i)=> {
        return(<CollegeCard key= {i}
            mainImgSource="https://images.static-collegedunia.com/public/college_data/images/appImage/1505110380ccaaaaaaaaaaaaaaaaaammmmmmmmmmmm.jpg?tr=w-305,h-145,c-forces"
            logoImgSource="https://images.static-collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?tr=w-40,h-40,c-force"
            collegeName="SRM University, Bangalore"
            imageName="image1"
            fee="150000"
            location="Bangalore,India"
            creds="NAAC, NBA"
            ></CollegeCard>)
    })
    return (
        <div className={classes.topContainer}>
            {data}
        </div>
    );
}


// creating a MockUp for the Cards to show the colleges

const CollegeCard = (props) => {
    return (
        <React.Fragment>
            <div>
                <div className="card" style={{width: "18rem"}}>
                <div className={classes.imageContainer}>
                <div className={classes.imgOverlay}></div>
                <img className="card-img-top" src={props.mainImgSource} alt={props.imageName}/>
                </div>
                <div className={classes.detailsForCollegeContainer}>
                    <div className={classes.logoContainer}>
                    <img  className="img-responsive" src={props.logoImgSource} alt={props.imageName}/>
                    </div>
                    <div className={classes.collegeNameNDetails}>
                        <span >{props.collegeName}</span>

                        <div className={classes.locationNCredsContainer}>
                            <span className={classes.details}>
                            <i className="fas fa-map-pin">&nbsp; </i>
                            {props.location}</span>
                            <span className={classes.details}>
                            &nbsp;<i className="fas fa-graduation-cap">&nbsp;</i>{props.creds}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="card-body">
                    <p className="card-text">₹ {props.fee}</p>
                    
                </div>
                <div style={{padding:"2px"}}>
                    <button className={classes.buttonOrange}>
                    Apply Now </button>
                </div>
                </div>
            </div>  

            
        </React.Fragment>
    );
}
 
export default LandingPage;
