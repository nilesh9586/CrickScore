import { Button, Card, CardActions, CardContent, Dialog,  DialogActions,  DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { getMatchdetail } from '../Api/Api';

const MyCard =({match})=>{

    const [detail,setDetails]=useState({});
    const [open ,setOpen]=useState(false);

    const handleClick  = (id) => {
       
        getMatchdetail(id) 
        .then((data) => {console.log(data)
            setDetails(data)
        })
        .catch((error) => console.log(error));

        handleopen();
      
    };
    

const getMatchCart=()=>{

    return ( 

        <Card style={{marginTop : 20}}>
            <CardContent>
               <Grid container justify="center" alignItems="center" spacing="2">

                <Grid item>
                    <Typography variant="h5">{match["team-1"]}</Typography>
                </Grid>
                <Grid item>
                   <img  style={{width:85}}       src={require("../img/vs.png")} alt="vs"></img>
                </Grid>
                <Grid item>
                    <Typography variant="h5">{match["team-2"]}</Typography>
                </Grid>

               </Grid>
            </CardContent>
            <CardActions>
               <Grid container justify="center">
               <Button 
              
               variant="outlined" 
               color=" secondary"
               style={{marginRight:10}}
               item
               onClick={() => {handleClick(match.unique_id);
                }}

               >
               Show Details
               </Button>
                <Button 
                variant="contained"
                 color="primary"
                 item>
                
               Start Time {new Date (match.dateTimeGMT).toLocaleString()}
                 </Button>

               </Grid>
            </CardActions>
        </Card>

   

    );
};

    const handleclose =()=>{
        setOpen(false);
    }

    const handleopen = () => {
    
        setOpen(true);
        
    }
    

    const getDailog =()=>(
        <Dialog open={open} onClose={handleclose}>
        <DialogTitle id="alert-dialog-title">
        {"Match detail..."}
        </DialogTitle>

        <DialogContent>
            <DialogContentText id="alert-dialog-discription">
                <Typography> {detail.stat}</Typography>
                <Typography>
                 Match <span style={{fontStyle:"italic" , fontWight:"bold"}}> 
                 {detail.matchStarted? "Started": "Still Not Started" }
                  </span>
                  </Typography>
                  <Typography>
                 Score <span style={{fontStyle:"italic" , fontWight:"bold"}}> 
                 {detail.score }
                  </span>
                  </Typography>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleclose} color="primary" autoFocus>close</Button>
        </DialogActions>
             
       
        </Dialog>
    );

    return <Fragment>
        { getMatchCart()}
        {getDailog()}
    </Fragment>
          
     
    };

 

export default MyCard;