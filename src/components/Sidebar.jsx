import { leftMenu } from "../assets/data/Data";
import { useState } from "react";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true); 

    const handleTogglerClick = () => {
        setIsCollapsed(prevState => !prevState); 
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <header className="sidebar-header">
                <button className="toggler sidebar-toggler" onClick={handleTogglerClick}>
                    <span className="material-symbols-outlined">
                        {'chevron_left'}
                    </span>
                </button>
            </header>
        <nav className="sidebar-nav">
            <ul className="nav-list primary-nav">
                {leftMenu.map((props, index) =>
                    props.divider ? (
                        <hr key={`divider-${index}`} />
                    ) : (
                        <li className="nav-item" key={`nav-item-${index}`}>
                            <a href={props.link} className="nav-link">
                                <span className="nav-icon material-symbols-outlined">
                                    {props.icon}
                                </span>
                                <span className="nav-label">{props.text}</span>
                            </a>
                            <span className="nav-tooltip">{props.text}</span>
                        </li>
                    )
                )}
            </ul>
        </nav>
        </aside>
    );
}

export default Sidebar;
