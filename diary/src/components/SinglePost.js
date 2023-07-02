import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SinglePost = (props) => {
  const post = props.post;

  return (
    <div className='card-container'>
      <img
        src='https://sun9-2.userapi.com/impg/atXy0AHLJDv8QPl1L27BTCAEAbZyETbfsbVo6g/0bGthyFoGgI.jpg?size=929x907&quality=95&sign=b94bb303328197c233ec0ab4453dfb5f&type=album'
        alt='Diary'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-post/${post._id}`}>{post.title}</Link>
        </h2>
        <h3>{post.author}</h3>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;