import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default makeStyles((theme) => ({
  storyGridContainer:{
    paddingRight: '60px',
    paddingLeft:'60px',
    [theme.breakpoints.down("md")] : {
    padding: '0',
    }
  },
  backgroundImage:{
    width: "100%",
    backgroundImage: `url(https://s4.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/77808a56-3907-44bd-a6f2-e270996c225c.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: '100% 100%',
    height: "80vh",
    position: "relative",
    boxShadow: '0 0 40px 40px black inset',
    [theme.breakpoints.down("md")] : {
        height: '55vh',
        boxShadow: '0 0 30px 30px black inset'
        }
  }
}));