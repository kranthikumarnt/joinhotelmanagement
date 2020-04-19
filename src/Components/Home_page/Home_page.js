import React, {useState, useEffect} from 'react';
// import { useHistory} from "react-router-dom";
import API from '../../API/api';
import classes from './Home_page.module.css';
import {} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
// import Loader from '../UI/Loader';
import Skeleton from 'react-loading-skeleton';
// import Axios from 'axios';



const Home_page = (props) => {
    const [items, setItems] = useState([]);
    const [pageNumber, setpageNumber] = useState(2);
    var skeletonItems = []
    for(let i=0; i<5; i++){
        skeletonItems.push(i)
    }
    const URL = "http://openlibrary.org/search.json";
    // var skeletons= skeletonItems.map((i)=>{return <Skeleton key={"SkeletonNumber"+i}  height={250} width={250} />;
    useEffect(() => {
        console.log("fetching First time");
        let isSubscribed = true;
        API.get(URL,{params:{q:"rings",page:1}})
        .then((data)=>{
            // console.log(data);
            if (data.status >= 400) {
                throw new Error("Bad response from server")
              }
            data = data.data.docs.slice(0,20);
            var newItems = data;
            if(isSubscribed){
                setItems([...newItems]);
            }
        })
        .catch((error)=>{console.log(error)})
        return () => {
            console.log("cleanup");
            isSubscribed=false;
        }
    }, [])
    // console.log(items)
    var fetchData =async ()=>{
        let isSubscribed= true;
        if(items.length !==0 ){
            console.log("fetching");
            API.get(URL,{params:{q:"rings",page:pageNumber}})
        .then((data)=>{
            // console.log(data);
            data = data.data.docs.slice(0,20);
            var newItems = data;
            if(isSubscribed){
                setItems([...items , ...newItems]);
                setpageNumber(pageNumber+1);
                window.scrollBy(0,-200);
            }
        })
        .catch((error)=>{console.log(error)}
        )
        }
        return()=>{
            isSubscribed= false;
        }
    }
    const data = items.map((i,index)=> {
        return(<CollegeCard key={index}
            mainImgSource="https://images.static-collegedunia.com/public/college_data/images/appImage/1505110380ccaaaaaaaaaaaaaaaaaammmmmmmmmmmm.jpg?tr=w-305,h-145,c-forces"
            logoImgSource="https://images.static-collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?tr=w-40,h-40,c-force"
            collegeName={i.title_suggest.slice(0, 25)}
            imageName="image1"
            fee={i.cover_i}
            location="Bangalore,India"
            creds="NAAC, NBA"
            ></CollegeCard>)
    })
   return (
        <div >
        {items.length === 0 ? <div className={classes.topContainer}> {skeletonItems.map((i)=>{return <Skeleton key={"SkeletonNumber"+i}  className={classes.Skeleton} />})}{skeletonItems.map((i)=>{return <Skeleton key={"SkeletonNumber"+i} className={classes.Skeleton}/>})}</div> : null  }
        <InfiniteScroll
                pageStart={0}
                loadMore={fetchData}
                hasMore={true}
                loader={<div key={"flkajdshgasd"} className={classes.topContainer}>{skeletonItems.map((i)=>{return <Skeleton key={"SkeletonNumber"+i}  height={250} width={280} />})}</div>}>
                <div  className={classes.topContainer}>
                    {data}
                </div>
            </InfiniteScroll>
        </div>
    );
}


// creating a MockUp for the Cards to show the colleges

const CollegeCard = (props) => {
    return (
        <React.Fragment>
            <div>
                <div className={"card"+" "+ classes.CardContainer} >
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
 
export default Home_page;