import React from 'react';
import { AppBar, Toolbar, Grid, BottomNavigation, BottomNavigationAction, IconButton,
   Typography, Box, Hidden } from '@material-ui/core';
import useStyles from './navbarStyles';
import SVGComponent from '../../../utils/svg';
import SVGSmallIcon from '../../../utils/smallIcon';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { NAV_ITEMS } from '../../../constants/constants';
import {useHistory} from 'react-router-dom'

function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const history = useHistory();

  const handleChange = (event, newValue) => {
    console.log('newValue',newValue)
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Grid container>
          <Grid item xs={2} xl={2} lg={2} md={2} sm={2}
            style={{ justifyContent: 'center' }}
          >
            <Box
              component='div'
              display={{ xs:'none',sm:'none',xl:'flex',lg:'flex',md:'flex' }}
              style={{ justifyContent: 'center', marginTop: '5px' }}
            >
              <SVGComponent.logo color={'#1b91ff'} />
            </Box>
            <Box
              component='div'
              display={{xs:'flex',sm:'flex',xl:'none',lg:'none',md:'none',
              }}
              style={{ justifyContent: 'center', marginTop: '5px' }}
            >
              <SVGSmallIcon.logo color={'#1b91ff'} />
            </Box>
          </Grid>
          <Hidden only={['xs', 'sm']}>
            <Grid item xl={5} lg={5} md={5}>
              <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                style={{ background: 'transparent' }}
              >
                {NAV_ITEMS.map((element, index) => {
                  return (
                    <BottomNavigationAction
                      key={`${element}${index}`}
                      value={element}
                      label={
                        <Typography
                          style={{ color: '#1b91ff', fontSize: '14px' }}
                        >
                          {element.toUpperCase()}
                        </Typography>
                      }
                    />
                  );
                })}
              </BottomNavigation>
            </Grid>
          </Hidden>
          <Grid item xs={10} xl={5} lg={5} md={5} sm={10}>
            <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton style={{ color: '#1b91ff' }}>
                <BookmarkBorderIcon fontSize='small' />
              </IconButton>
              <IconButton style={{ color: '#1b91ff' }}>
                <PersonOutlineIcon fontSize='small' />
              </IconButton>
              <IconButton style={{ color: '#1b91ff' }}>
                <SearchIcon fontSize='small' />
              </IconButton>
              <IconButton style={{ color: '#1b91ff' }}>
                <MenuIcon fontSize='small' />
              </IconButton>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Navbar;
