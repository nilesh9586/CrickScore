
import React, { Fragment, useEffect, useState } from 'react';



import './App.css';
import MyCard from './componets/MyCard';
import Navbar from './componets/Navbar';
import { getMatches } from "./Api/Api";
import { Grid , Typography} from '@material-ui/core';

function App() {

  const [matches,setMatches]=useState([]);


 useEffect (() =>{
  
    getMatches()
    .then((data)=>{
      setMatches(data.matches);
      console.log(data.matches);
    })
    .catch((error)=> alert("could not load data"));
    

},[]);

{
  return (
    <div className="App">
    <Navbar/>
    <Typography variant="h5"   style={{marginTop:20 }}>Welcome my live score app</Typography>

      <Grid container>
      <Grid sm="2"></Grid>
      <Grid sm="8">
      {
     matches.map((match)=>(
      <Fragment>
        {
          match.type === "Tests" ?(<MyCard key={match.unique_id} match={match}/> ) :(""
          )
        }
      </Fragment>
     ))
   }
      </Grid>
    
   
      </Grid>




  
    </div>
  );
}
}

export default App;
