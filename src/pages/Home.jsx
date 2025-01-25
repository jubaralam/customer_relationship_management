import { Link } from "react-router-dom";

const Home = () => {
  <Link to="/login" />;
  return (
    <div>
      <div>Home</div>

      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
