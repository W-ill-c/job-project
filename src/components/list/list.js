import {React, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import { FaSpinner } from "react-icons/fa";
import Card from "./card";

export default function WholeList(){

    const [schoolData, setSchoolData] = useState([]);

    useEffect(()=>{
        let collectData = async () => {
            try{
                let data = await fetch("http://propertydog.co.uk/schools.json");
                let fetchedData = await data.json();
                setSchoolData(fetchedData);
            } catch(err){
                console.log(err)
            }
        };
        collectData();
    }, []);

    console.log(schoolData)

    // useEffect runs when component is mounted and either when it rerenders or when the second argument changes. The empty array never changes and so the data doesn't keep getting fetched.

    // To gain access to the data, we need to run the .json() method.

    return(
        <section className="wholeList">
            {(schoolData.length > 0) ?
                schoolData.map( school => {
                    return(
                        <Card key={school.URN} school={school} />
                    )
                }) :
                <FaSpinner id="spinner"/>
            } 
        </section>

        // I map through the data and for each school, I return a Card containing its information.

        //Either the school data is shown or the waiting spinner is conditionallly render using the ternary operator.
    );
}