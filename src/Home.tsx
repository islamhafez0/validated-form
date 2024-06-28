import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <span>Home</span>
      <Link to="/sign-up">Logout</Link>
    </div>
  );
};

export default Home;
