import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  return (
    <header>
      <ul>
        <li>
          <button onClick={onHomeClick}>Home</button>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
