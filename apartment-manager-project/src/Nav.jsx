import './Nav.css'

function Nav(){

    return(
        <nav>
        <ul>
            <li><a onclick="showSection('home')">Home</a></li>
            <li><a onclick="showSection('listings')">Tenant Info</a></li>
            <li><a onclick="showSection('about')">About</a></li>
            <li><a onclick="showSection('contact')">Room Details</a></li>
            <li><a onclick="logout()">Logout</a></li>
        </ul>
    </nav>
    );
}

export default Nav