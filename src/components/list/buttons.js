import {React, useEffect, useState} from "react";
import BSButton from 'react-bootstrap/Button';

export default function Button(props) {

    return (
        <BSButton variant="primary" id="viewMoreButton" onClick={props.onClick} style={{backgroundColor: props.show ? "red" : "blue"}}>
            {props.show ? "Close Further Information" : "View Further Information"}
        </BSButton>
    )
}