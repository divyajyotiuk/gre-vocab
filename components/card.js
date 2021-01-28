import ReactHtmlParser from 'react-html-parser'
import styles from "./styles/card.module.css"

const Card = (props) => {
    const wordData = props.data;
    const {Test, Question, Word, Meaning, Sentence, POS, Deck} = wordData;
    const regex = new RegExp('\(\\b'+Word.slice(0,4)+'\\S\+\\b\)', "ig")
    const matchedArr = Sentence.match(regex);
    let formattedSentence = Sentence;
    matchedArr && matchedArr.forEach((word)=>{
        formattedSentence = formattedSentence.replace(word, word.bold());
    })
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner + ` relative w-full h-full`}>
                <div className={styles.flipCardFront + ` absolute w-full h-full p-4 text-white bg-green-800 x rounded`}>
                    <div className="text-4xl text-center">{Word}</div>
                    <p className="text-md">Deck: {Deck}</p>
                </div>
                <div className={styles.flipCardBack + ` absolute w-full h-full p-4 text-black bg-white rounded overflow-y-scroll`}>
                    <div><span className="mr-2 italic">{POS}</span>{Meaning}</div>
                    <div className="italic mt-3">Example: {ReactHtmlParser(formattedSentence)}</div>
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