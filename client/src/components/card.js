import React, { useState, useEffect } from "react"; //import React Component
import { Button } from "reactstrap";

export function Card(props) {
    const [val, setVal] = useState("");

    return (
        <div className="card bg-custom" style={{ width: '18em', margin: '1rem' }}>
            <img className="card-img-top" src="..." alt="Project thumbnail"></img>
            <div className="card-body">
                {/* TODO: Title of project => link to project page */}
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.blurb}</p>
                {/* add in all props fields/project info */}
                <Button className="btn btn-primary" onClick={() => console.log("Link")}>
                    View project details
                </Button>
            </div>            
        </div>
    )
}