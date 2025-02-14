const CustomButton = ({
    type = "button",
    onClick,
    btnName = "",
    className = "",
}) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            {btnName}
        </button>
    );
};

export default CustomButton;
