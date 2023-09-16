import Counter from "./Counter";
import Header from './Header';
import Auth from './Auth';
import UserProfile from './UserProfile';
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
 
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
