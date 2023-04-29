import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map(data =>( <Post message={data.message} key={data.id}/>))
  return (
      <div className={style.postsBlock}>
        <div className={style.posts}>
        {postsElement}
      </div>
    </div>
  )

}

export default MyPosts;