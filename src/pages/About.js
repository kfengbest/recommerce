import * as React from 'react';
import {Link} from 'react-router-dom';


function About() {
    return (
        <>
            <nav>
                <Link to="/home">Home</Link>
            </nav>
            <main>
                <h2>About page</h2>
                <p>this is about page content</p>
            </main>
        </>
    );
}

export default About;