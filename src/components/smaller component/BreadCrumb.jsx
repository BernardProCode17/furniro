import {Link, useLocation} from 'react-router-dom'


function BreadCrumb() {
    const realPath = useLocation().pathname.split('/').filter(path => path);

    return (
        <nav className="shop_breadcrumb">
            <ul className="breadcrumb_list">
                <li className="breadcrumb_item">
                    <Link to="/" className="breadcrumb_link">Home</Link>
                </li>

                {realPath.map((path, index) => {
                    return (
                        <li className="breadcrumb_item" key={index}>
                            <Link to={`/${path}`} className="breadcrumb_link-active">/ {path}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BreadCrumb;