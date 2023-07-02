import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function EditPost(props) {
  const [post, setPost] = useState({
    title: '',
    author: '',
    description: '',
    date: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        setPost({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          date: res.data.date
        });
      })
      .catch((err) => {
        console.log('ошибка при редактировании');
      });
  }, [id]);

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: post.title,
      author: post.author,
      description: post.description,
      date: post.date
    };

    axios
      .put(`http://localhost:5000/api/posts/${id}`, data)
      .then((res) => {
        navigate(`/show-post/${id}`);
      })
      .catch((err) => {
        console.log('ошибка при редактировании');
      });
  };

  return (
    <div className='EditPost'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Посмотреть список записей
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>редактировать запись</h1>
            <p className='lead text-center'>обновить информацию о записи</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Название</label>
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
              <label htmlFor='author'>Автор записи</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={post.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Описание</label>
              <textarea
                type='text'
                placeholder='Description of the Post'
                name='description'
                className='form-control'
                value={post.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='date'>Дата</label>
              <input
                type='text'
                placeholder='Date'
                name='date'
                className='form-control'
                value={post.date}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              обновить запись
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;