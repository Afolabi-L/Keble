function FilterButton({ label, active }) {
    return (
        <button type="button" className={active ? "active option" : "option"}>
            {label}
        </button>
    );
}

export default FilterButton;