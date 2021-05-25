import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Navbar from '../header/Navbar';
import Description from '../header/Description';
import useStyles from './appStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Stories from '../stories/Stories';

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={classes.backgroundImage}>
          <Navbar />
          <Description
            category={'Entertainment'}
            title={
              '16 Fan Favorite Cult Movies That You Didn\t Know Were Copied'
            }
          />
        </div>
        <Switch>
          <Route path='/' exact component={Stories} />
          <Route path='/stories' exact component={Stories} />
          <Route path='/trending' exact component={Stories} />
          <Route path='/videos' exact component={Stories} />
          <Route path='/quizzes' exact component={Stories} />
          <Route path='/memes' exact component={Stories} />
          <Route path='/spotlight' exact component={Stories} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
