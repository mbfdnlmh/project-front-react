import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowSpecificPost(props) {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log('ошибка при выводе деталей записи');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('ошибка при удалении');
      });
  };

  const PostItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Название</td>
            <td>{post.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>автор</td>
            <td>{post.author}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>дата</td>
            <td>{post.date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>описание</td>
            <td>{post.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowSpecificPost'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              показать все записи
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>запись</h1>
            <p className='lead text-center'>просмотреть запись</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{PostItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(post._id);
              }}
            >
              удалить запись
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-post/${post._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              редактировать запись
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowSpecificPost;