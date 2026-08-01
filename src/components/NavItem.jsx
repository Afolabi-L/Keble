function NavItem({ label, href }) {
    return (
        <li>
            <a href={href} className="navitem">{label}</a>
        </li>
    );
}

export default NavItem;