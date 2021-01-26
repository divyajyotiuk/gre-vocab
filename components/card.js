const Card = (props) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" />
                </div>
                <div class="flip-card-back">
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