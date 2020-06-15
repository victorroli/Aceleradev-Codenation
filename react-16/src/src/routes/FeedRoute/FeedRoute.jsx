import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const[users, setUser] = useState([]);
  const[posts, setPosts] = useState([]);
  const[stories, setStories] = useState([]);
  const[usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = postUserId => users.find(user => postUserId === user.id);

  useEffect( () => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
    .then(response => response.json())
    .then(data => setUser(data))
  }, []);

  useEffect(() => {
    if(usersFetched === users.length){
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)
      .then(response => response.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setUsersFetched(usersFetched + 1);
      });

  }, [users, usersFetched]);

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
    .then(response => response.json())
    .then(data => {
      setStories(data);
    })
  }, [users]);

  return (
    <div data-testid='feed-route'>
      {(users.length > 0 && stories.length > 0) && (
        <Stories stories={stories} getUserHandler={getUserPostById}/>
      )}

      {users.length !== usersFetched ? 
        (<Loading/>) :
        (<Posts posts={posts} getUserHandler={getUserPostById}/>) }
    </div>
  );
};

export default FeedRoute;
