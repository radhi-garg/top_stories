import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Description(props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="primary"
        style={{ marginBottom: "15px", marginLeft:'15px' }}
      >
        {props.category}
      </Button>
      <div style={{ 
         width: "100%" }}>
        <Typography variant="h5" style={{ color: "white", fontWeight: "600", marginLeft:'15px', marginBottom:'15px' }}>
          {props.title}
        </Typography>
        <Button>
          <Typography style={{ color: "#1b91ff", marginLeft:'15px', marginBottom:'15px' }}>
              Read More
              <ArrowForwardIcon size='small' style={{color:'#1b91ff', verticalAlign: 'bottom', marginLeft:'5px'}}/>
              </Typography>
        </Button>
      </div>
    </div>
  );
}

export default Description;
