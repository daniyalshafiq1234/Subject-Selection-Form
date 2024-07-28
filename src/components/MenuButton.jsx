import './MenuButton.css';

function MenuButton(props) {
    
    return (
        <div className="button-title">
            <button className="circular-button">
                {(props.index < 8) ? 0 : null}{props.index + 1}
            </button>
            <h5>
                {props.menuTitle}
            </h5>
        </div>
    );
};

export default MenuButton;