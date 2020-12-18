import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from "moment";
// import "../Post/Post.css"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

function Post(props) {
  const classes = useStyles();
  // var date= props?.date.substring(0,10);
  
  // console.log(moment(date).format("MMMM DD,YYYY"));
 
  return (
    <Card className={classes.root} style={{margin: "10px" ,width:"350px",height:"400px"}} onClick={props.clicked}>
      
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent  width="350px" height="350px">
          <Typography gutterBottom  component="h6">
            {props.title}
          </Typography>
          
        </CardContent>
        <CardContent height="50px" Align="bottom">
        <Typography variant="body2" color="textSecondary" >
        <img src="https://staging.elsner.com/wp-content/uploads/2020/07/calendar.png" alt="" style={{marginRight:"10px"}}/>{moment(props?.date.substring(0,10)).format("MMMM DD, YYYY")}
        </Typography>
        </CardContent>
      
      <CardActions>
        {/* <Button size="small" color="primary">
          
        </Button> */}
          {/* <Typography variant="body2" color="textSecondary" component="p">
          {moment(date).format("MMMM DD, YYYY")}
            </Typography>  */}

        {/* <Button size="small" color="primary">
          
        </Button> */}
      </CardActions>
    </Card>
  );
}
export default Post;
