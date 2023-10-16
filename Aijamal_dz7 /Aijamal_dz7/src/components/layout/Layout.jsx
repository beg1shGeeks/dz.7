import { Link, Outlet } from 'react-router-dom';
import style from './layout.module.css';

const Layout = () => {
  return (
    <div>
      <Outlet />
      <footer>
        <nav>
          <Link to="/">Посты</Link>
          <Link to="AddPost">Добавить пост</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
