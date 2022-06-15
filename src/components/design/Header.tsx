import './Header.css'
import githubIcon from '../icons/github.png'
import Author from './Author'

function Header() {
    return (
        <div className='header'>
            <div className='header-content'>
                <img src={githubIcon} alt="github icon" />
                <a href="#">GitHub Profile Fetch</a>
            </div>
            <Author />
        </div>
    )
}

export default Header