import {Link} from 'react-router-dom';
function Home() {
    return ( 
        <div className="Home">
            <h1>Home
                
            </h1>
            <btn className="btn-login">Login</btn>
            <btn className="btn-logout btn-myaccount">111</btn>

            
            <i className="fa-solid fa-archway"></i>
            <Link to="/download">Download</Link>
        </div>
     );
}

export default Home;