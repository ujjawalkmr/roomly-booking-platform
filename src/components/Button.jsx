import "../styles/Button.css";

const But = ({
    text,
    onClick,
    type = "button",
    disabled = false,
    loading = false,
    variant = "primary",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`custom-btn ${variant}`}
        >


            {loading ? (
                <div className="w-5 h-5 mx-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
                text
            )}


        </button>
    );
};

export default But;