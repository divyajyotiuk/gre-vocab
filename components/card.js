import ReactHtmlParser from 'react-html-parser'
import styles from "./styles/card.module.css"

const Card = (props) => {
    const wordData = props.data;
    const {Test, Question, Word, Meaning, Sentence, POS, Deck} = wordData;
    const regex = new RegExp('\(\\b'+Word.slice(0,4)+'\\S\+\\b\)', "ig")
    const matchedArr = Sentence.match(regex);
    let formattedSentence = Sentence || `<b>You don't need it!</b>`;
    matchedArr && matchedArr.forEach((word)=>{
        formattedSentence = formattedSentence.replace(word, word.bold());
    })
    return (
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