import * as React from 'react';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <main>
                <h2>Home page</h2>
                <p>this is home page content</p>
            </main>
        </>
    );
}

export default Home;