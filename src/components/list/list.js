import {React, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';

export default function WholeList(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        let collectData = async () => {
            try{
                let data = await fetch("http://propertydog.co.uk/schools.json");
                let schoolData = await data.json();
                console.log(schoolData);
                setData(data);
            } catch(err){
                console.log(err)
            }
        };
        collectData();
    }, []);

    // useEffect runs when the component mounts and either when the component rerenders or when the second argument changes. As the empty array never changes, the data is fetched once.

    return(
        <section className="wholeList">
            <div className="schoolInfo">
                <h3>School Name:</h3>
                <h5>School Postcode:</h5>
                <Button variant="primary">View Further Information</Button>{' '}
            </div>
            <div className="furtherSchoolInfo">
                <h5>Full Address:</h5>
                <h5>Education Stage:</h5>
                <h5>School Website:</h5>
                <h5>School Capacity:</h5>
            </div>
        </section>
    );
}