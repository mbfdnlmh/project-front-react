import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreatePost = (props) => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    author: '',
    description: '',
    date: ''
  });

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/posts', post)
      .then((res) => {
        setPost({
          title: '',
          author: '',
          description: '',
          date: ''
        });
        navigate('/');
      })
      .catch((err) => {
        console.log('ошибка в создании поста');
      });
  };

  return (
    <div className='CreatePost'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Посмотреть все записи
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>добавить запись</h1>
            <p className='lead text-center'>создать новую запись</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Post'
                  name='title'
                  className='form-control'
                  value={post.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={post.author}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this post'
                  name='description'
                  className='form-control'
                  value={post.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='date'
                  name='date'
                  className='form-control'
                  value={post.date}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;