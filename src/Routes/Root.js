import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          
          <div>
            <p>Side Menu</p>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`home`}>Home</Link>
              </li>
              <li>
              <Link to={`detail`}>Detail</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }