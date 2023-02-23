import React from 'react'
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="group changeText">
            <div className='item'>
                <h1 className='text-center'>Edwin Samaniego</h1>
                <br/>
                officialedwinsamaniego@gmail.com
                {/* <a href='officialedwinsamaniego@gmail.com'>officialedwinsamaniego@gmail.com</a> */}
                <br/>
                <Link to={"https://linkedin.com/in/edwinsamaniego/"}>LinkedIn</Link>
                <br/>
                (347) 977 - 3536
                <br/>
                <Link to={"https://github.com/EdwinS27"}>GitHub</Link>                
            </div>
        </div>
    );
}

export default Header;