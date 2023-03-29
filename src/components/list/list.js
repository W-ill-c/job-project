import {React, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import { FaSpinner } from "react-icons/fa";

export default function WholeList(){

    const [schoolData, setSchoolData] = useState([]);

    useEffect(()=>{
        let collectData = async () => {
            try{
                let data = await fetch("http://propertydog.co.uk/schools.json");
                let fetchedData = await data.json();
                console.log(typeof fetchedData);
                console.log(fetchedData)
                setSchoolData(fetchedData);
            } catch(err){
                console.log(err)
            }
        };
        collectData();
    }, []);

    // useEffect runs when the component mounts and either when the component rerenders or when the second argument changes. As the empty array never changes, the data is fetched once.

    const openExtraInfo = (event)=>{
        event.target.parentElement.parentElement.children[1].style.display="block"
        event.target.style.opacity=0
    }
    const closeExtraInfo = (event)=>{
        event.target.parentElement.parentElement.children[1].style.display="none"
        event.target.style.opacity=0
    }

    return(
        <section className="wholeList">
            {(schoolData.length > 0) ?
                schoolData.map( school => {
                    return(
                        <div className="indiviudalSchool" key={school.URN}>
                            <div className="schoolInfo">
                                <h4>School Name: {school.EstablishmentName}</h4>
                                <h5>School Postcode: {school.Postcode}</h5>
                                <Button variant="primary" id="viewMoreButton" onClick={
                                    (e)=>{
                                        openExtraInfo(e);
                                        setTimeout(()=>{
                                            e.target.parentElement.children[3].style.display="block"
                                            e.target.parentElement.children[3].style.opacity=1
                                            e.target.style.display="none"
                                        }, 1000)
                                    }
                                }>View Further Information</Button>{' '}
                                <Button variant="danger" id="viewLessButton" onClick={
                                    (e)=>{
                                        closeExtraInfo(e);
                                        setTimeout(()=>{
                                            e.target.parentElement.children[2].style.display="block"
                                            e.target.parentElement.children[2].style.opacity=1
                                            e.target.style.display="none"
                                        }, 1000)
                                    }
                                }>Close Further Information</Button>{' '}
                            </div>
                            
                            <div className="furtherSchoolInfo">
                                <h5>Full Address:</h5>
                                <h5>Education Stage:</h5>
                                <h5>School Website:</h5>
                                <h5>School Capacity:</h5>
                            </div>
                            
                        </div>
                    )
                }) :
                <FaSpinner id="spinner"/>
            } 
        </section>
    );
}