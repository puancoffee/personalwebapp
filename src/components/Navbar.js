import React, {Component} from 'react'
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='bg-color'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>buy me a coffee</li>
                </ul>
            </div>
        )
    }
}
export default Navbar