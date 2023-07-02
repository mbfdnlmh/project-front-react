import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SinglePost from './SinglePost';

function ShowAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log('ошибка при выводе всех постов');
      });
  }, []);

  const postList =
    posts.length === 0
      ? 'нет записи'
      : posts.map((post, k) => <PostCard post={post} key={k} />);

  return (
    <div className='ShowAllPosts'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Список записей</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-post'
              className='btn btn-outline-warning float-right'
            >
               Добавить новую запись
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{postList}</div>
      </div>
    </div>
  );
}

export default ShowAllPosts;