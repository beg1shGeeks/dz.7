import style from './post.module.css';
import { useEffect } from 'react';
import { deletPost, deletePostApi, getPosts } from '../../../store/postSlice';
import { useDispatch, useSelector } from 'react-redux';

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const loader = useSelector((state) => state.loader);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      {loader ? (
        <div>load.....</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className={style.post_container}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
            <div className={style.btnContainer}>
              <button
                type="button"
                onClick={() => {
                  dispatch(deletPost(post.id));
                  dispatch(deletePostApi(post.id));
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
