

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/CreateBlog">Blog Form</Link>
        </div>
    )
}
export default NavBar;