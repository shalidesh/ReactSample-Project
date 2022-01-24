import React,{useEffect, useState}  from "react";

import NameListItem from "./NameListItem";

function NameList(){
  const [loadData,setLoadData]=useState(new Date());

  const [namelist,setNameList]=useState(
    [{
      key:new Date(),

      name: {
          title: "mr",
          first: "brad",
          last: "gibson"
        },
      location: {
          
          city: "kilcoole",
          
        },
      email: "brad.gibson@example.com",
      dob: {
          date: "1993-07-20T09:44:18.674Z",
          
        },
      picture: {
          
          medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
          
        },


  },

]
  );

  useEffect(() =>{

    fetch("https://randomuser.me/api").then(response =>{
      return response.json();
    }).then(responsedata => {
      //console.log(responsedata.results[0]);
      setNameList(namelist=> [...namelist,responsedata.results[0]]);


    });
  },[loadData]);

    

const namelistcomponents=()=> {
   return namelist.map((aName) =>{

    return (


      <div className='container mt-5'>
            
            <ul className='list-group'>

            <NameListItem 
                key={aName.key}
                name={aName.name.first}
                location={aName.location.city}
                email={aName.email}
                birthday={aName.dob.date}
                profile={aName.picture.medium}>

             </NameListItem>
              
              
            </ul>

          </div>

      


    );
   });

};

const AddUserHandler=()=>{
  setLoadData(new Date());
  
};



    return(

        
         <div className="container">

           
            <button className="btn btn-primary mb-4 " onClick={AddUserHandler}>Add User</button>
              {namelistcomponents()}

                 
                
              



            
            

         </div>
        



    );
}

export default NameList;