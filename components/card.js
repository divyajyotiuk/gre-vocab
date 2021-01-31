import {useState} from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from "./styles/card.module.css"

const Card = (props) => {
    const wordData = props.data;
    const {Question, Word, Meaning, Sentence, POS, Deck} = wordData;
    const regex = new RegExp('\(\\b'+Word.slice(0,4)+'\\S\+\\b\)', "ig")
    const matchedArr = Sentence.match(regex);
    let formattedSentence = Sentence || `<b>You don't need it!</b>`;
    matchedArr && matchedArr.forEach((word)=>{
        formattedSentence = formattedSentence.replace(word, word.bold());
    })

    const [isModalOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => setModalIsOpen(!isModalOpen);

    return (
        <>
        <div className={styles.flipCard + ` shadow-lg`}>
            <div className={styles.flipCardInner + ` relative w-full h-full`}>
                <div className={styles.flipCardFront + ` absolute w-full h-full p-4 text-white bg-blue-500 rounded`}>
                    <div className="flex items-center h-full justify-center relative">
                        <div className="text-4xl">{Word}</div>
                        <div className="absolute top-0 left-0 text-xs">{Question}</div>
                        <div className="absolute bottom-0 left-0 text-sm">Deck: {Deck}</div>
                    </div>
                </div>
                <div className={styles.flipCardBack + ` absolute w-full h-full p-4 text-black bg-white rounded overflow-y-scroll`}>
                    <div><span className="mr-2 italic text-purple-500">{POS || 'POS'}:</span>{Meaning}</div>
                    <div className="italic mt-3"><span className="mr-2 italic text-purple-500">Example:</span> {ReactHtmlParser(formattedSentence)}</div>
                    <button onClick={toggleModal}
                    className="mt-3 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none">
                        Move
                    </button>
                </div>
            </div>
        </div>
        {isModalOpen && <DeckModal {...props} onClose={toggleModal} />}
        </>
    );
};

const DeckModal = (props) => {

    const deck = Number(props?.data?.Deck);
    const deckArray = [1, 2, 3];
    const word = props?.data?.Word;
    return(
        <>
       <div className={styles.modal__backdrop}>
			<div className={styles.modal__container + ` p-6`}>
                <div className={styles.modal__title + ' relative'}>
                    <h3>Move to other Decks</h3>
                    <button type="button" className="absolute top-0 right-0 rounded-lg bg-red-500 hover:bg-red-700 focus:outline-none text-white text-2xl px-3 pb-1" 
                    onClick={props.onClose}>
                        x
                    </button>
                </div>
                <div className="flex justify-evenly my-5">
                {deckArray.map((ele, index)=>{
                    if(ele != deck){
                        return <button className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none" 
                        type="button" onClick={()=>{props.updateDeck(word, ele)}} key={`deck-button-${index}`}>
                        Deck {ele}
                        </button>
                    }
                })}
                </div>
				<p>
					Deck 1 for reviewing everyday or every other day
				</p>
                <p>
                    Deck 2 for reviewing every 3-4 days.
				</p>
                <p>
                    Deck 3 for reviewing less often: once a week!
				</p>
			</div>
		</div>
      </>
    );
};

export default Card;

/**
 * css for flip card
 * https://www.w3schools.com/howto/howto_css_flip_card.asp
 * https://codepen.io/Aoyue/pen/pLJqgE
 * 
 * Modal example
 * https://codepen.io/deammer/pen/LoMBvp?html-preprocessor=pug
 */