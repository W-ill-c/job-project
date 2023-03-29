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

    // The two above functions are used with the on click events on buttons below, their opacity transitions over the time of 1 second as specified by scss file. Once the buttons are clicked, the third child element of div 'indiviudalSchool' - the div containing the extra info - appears or disappers. Its display is initally none. //

    return(
        <section className="wholeList">

            {/* With the below code, either the waiting icon is called or the div containing all of the data is conditionally rendered using the ternary operator. This depends on the length of the schoolData state length. */}

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

                                {/* Each button makes itself disapper after a second and the other button appear after a second once clicked. Need to ensure the other button appears with opacity 1 as the openExtraInfo and openCloseInfo fucntions makes the buttons opacity go to 0 */}

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
                                <h5>Full Address: {school.EstablishmentName}, {school.Street} {school.Address3} {school.Locality} {school.Town} {school.County}, {school.Postcode}</h5>
                                <h5>Education Stage: {school.PhaseOfEducation}</h5>

                                {school.SchoolWebsite.length>0?
                                <h5>School Website: {school.SchoolWebsite} </h5> :
                                <h5>School Website: No Webstie Available</h5>
                                }
                                
                                <h5>School Capacity: {school.SchoolCapacity}</h5>
                                <h5>Ages: {school.StatutoryLowAge} to {school.StatutoryHighAge}</h5>
                            </div>
                            
                        </div>
                    )
                }) :
                <FaSpinner id="spinner"/>
            } 
        </section>
    );
}