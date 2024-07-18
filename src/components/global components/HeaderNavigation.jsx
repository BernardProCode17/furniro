import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function HeaderNavigation({menuFunction}) {
    return (
        <nav className='header_nav'>
            <ul className='nav_ul'>

                <li className='nav_li' onClick={menuFunction}>
                    <Link to='/' className='nav_link'>Home</Link>
                </li>

                <li className='nav_li' onClick={menuFunction}>
                    <Link to='/Shop' className='nav_link'>Shop</Link>
                </li>

                <li className='nav_li' onClick={menuFunction}>
                    <Link to='/about' className='nav_link'>About</Link>
                </li>

                <li className='nav_li' onClick={menuFunction}>
                    <Link to='/contact' className='nav_link'>Contact</Link>
                </li>

            </ul>
        </nav>
    )
}

export default HeaderNavigation