import { useEffect } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import routes from './routes';
import { getToken } from './utils/auth';

export default function App() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(getToken());
    if (!getToken()) {
      navigate('/login');
    }
  }, []);
  return <>{element}</>;
}
