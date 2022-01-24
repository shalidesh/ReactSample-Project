import React from "react";

function NameListItem(props){
    return(

        <div>
            <li className="list-group-item">

                <div className="row align-items-center">
                    <div className="col-2 align-self-center ">
                         <img src={props.profile} className="rounded-circle shadow-sm"></img>

                    </div>
                    <div className="col-10">
                        <h3>{props.name}</h3>
                        <p>{props.email}</p>
                        <p>{props.location}</p>
                        <small>{props.birthday}</small>

                    </div>

                </div>

                    
                   


            </li>
            
            
        </div>
    );
}

export default NameListItem;