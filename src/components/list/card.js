import {React, useEffect, useState} from "react";
import Button from './buttons';

export default function Card(props) {

    const [showFurtherInfo, setshowFurtherInfo] = useState(false)

    function onClickButton() {
        setshowFurtherInfo(!showFurtherInfo)
    }

    // The above state controls whether or not the extra information is rendered and the states booleon value is inverted everytime the below button is clicked using the aboved function.

    return (
        <div className="indiviudalSchool">
            
            <div className="schoolInfo">
                <h4>{props.school.EstablishmentName}</h4>
                <h5>School Postcode: {props.school.Postcode}</h5>
                <Button onClick={onClickButton} show={showFurtherInfo} />
            </div>

            {showFurtherInfo ? (
            <div className="furtherSchoolInfo">
                <h5>Full Address: {props.school.EstablishmentName}, {props.school.Street} {props.school.Address3} {props.school.Locality} {props.school.Town} {props.school.County}, {props.school.Postcode}</h5>
                <h5>Education Stage: {props.school.PhaseOfEducation}</h5>

                {props.school.SchoolWebsite.length>0?
                <h5>School Website: {props.school.SchoolWebsite} </h5> :
                <h5>School Website: No Website Available</h5>
                }
            
                <h5>Ages: {props.school.StatutoryLowAge} to {props.school.StatutoryHighAge}</h5>

                {props.school.OfstedRating>0?
                    <h5>Ofsted Rating: {props.school.OfstedRating} </h5> :
                    <h5>OfstedRating: No Ofsted Rating</h5>
                }

                <h5>Current Number Of Pupils: {props.school.NumberOfPupils} </h5>

                <h5>School Capacity: {props.school.SchoolCapacity}</h5>

                {props.school.religion>0?
                    <h5>Religion: {props.school.religion} </h5> :
                    <h5>Religion: No School Religion</h5>
                }

            </div> ): null
            }

            {/* Either the school info is conditoanlly rendered or nothing is */}
        </div>
    )
}