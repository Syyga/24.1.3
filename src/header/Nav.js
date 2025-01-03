import "./Nav.css";
import Menu from "./Menu/Menu.js";
import User from "./userInfo/User.js";

function Nav() {
  return (
    <>
      <div className="nav">
        <nav>
          <div>
            <Menu />
          </div>
          <div>
            <User />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
