import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Typography, Grid} from '@material-ui/core';
import StoryCard from '../storyCard/StoryCard';
import Description from '../header/Description';
import useStyles from './styles';
import axios from 'axios'; 

function Stories() {
  const classes = useStyles();
  const [stories, setStories] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const observer = useRef();
  const lastStoryElementReference = useCallback(node =>{
    if(loading) return;
    if(observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting && hasMore)
      {
        setPageNumber(prevPage => prevPage + 9)
      }
    });
    if(node) observer.current.observe(node);
  },[loading, hasMore]);

  useEffect(()=>{
    setLoading(true);
    setError(false);
    getPosts(pageNumber,8);
  }, []);

  useEffect(()=>{
    if(pageNumber === 0) return
    setLoading(true);
    getPosts(pageNumber,8);
    }, [pageNumber]);

  const getPosts = async (offset, limit) =>{
   const result = await axios({
      method: 'get',
      url: `https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=${limit}`,
      responseType: 'json'
    }).catch(error => {
      setError(error);
    });
    
    if(!result){
      setLoading(false);
      return
    } 

    setStories((prevStories => {
      return [...prevStories, ...result.data?.data]
    }));
    setHasMore(result.data?.data.length > 0);
    setLoading(false);
  };

  return (
    <>
      <div style={{ margin: "auto", marginTop: "15px", marginBottom: "15px" }}>
        <Typography variant="h5" style={{ color: "#1b91ff" }}>
          TOP STORIES
        </Typography>
      </div>
      <Grid
        className={classes.storyGridContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {stories.map((element, index) => {
          let reference;
          if (stories.length === index + 1) {
            reference = lastStoryElementReference;
          }

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              key={`${element.article_id}${index}`}
              ref={reference}
              style={{ marginBottom: "20px" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <StoryCard
                  featureImage={element.feature_img}
                  category={element.category}
                  slug={element.title}
                  readTime={element.readtime}
                  displayName={element.auth_display.display_name}
                />
              </div>
            </Grid>
          );
        })}
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error..."}</div>
      </Grid>
    </>
  );
}

export default Stories;
