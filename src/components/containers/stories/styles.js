import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  storyGridContainer:{
    paddingRight: '60px',
    paddingLeft:'60px',
    [theme.breakpoints.down("md")] : {
    padding: '0',
    }
  }
}));