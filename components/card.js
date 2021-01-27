const Card = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="img_avatar.png" alt="Avatar" />
                </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect and Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    );
}

export default Card;

/**
 * css for flip card
 * https://www.w3schools.com/howto/howto_css_flip_card.asp
 */