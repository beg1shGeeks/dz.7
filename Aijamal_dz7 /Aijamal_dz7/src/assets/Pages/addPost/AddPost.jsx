import style from './addPost.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPostApi, addNewPost } from '../../../store/postSlice';
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {
  const navigation = useNavigate();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  const hendelAddPost = (e) => {
    e.preventDefault();
    const formData = {
      id: uuidv4(),
      title: e.target[0].value,
      body: e.target[1].value,
      userId: 5,
    };
    dispatch(addPostApi(formData));
    dispatch(addNewPost(formData));
    navigation('/');
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={(e) => hendelAddPost(e)}>
        <input type="text" placeholder="title" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="body"
        ></textarea>
        <button type="submit">Добавить пост</button>
      </form>
    </div>
  );
};

export default AddPost;
