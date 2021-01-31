import Router, { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PageLayout from '../../components/pageLayout'
import { getAllCSVIds, getCSVData } from '../../lib/csvReader'
import Card from '../../components/card'
import BurgerMenu from '../../components/burgerMenu'
import constants from '../../lib/constants';

export default function WordsPage({paths, csvData}) {
    const data = csvData?.data;
    const updateDeck = (word, deck) => {
        console.log("here!", word, deck)
        fetch(constants.url+constants.updateDeck, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "id": csvData.id,
                "word": word,
                "deck": deck
            })
        })
        .then((res)=>{
            return res.json();
        })
        .then((data) => {
            if(data && data.success){
                Router.reload(window.location.pathname);
            }
        })
        .catch((err) => {alert(err)})
    }
    return (
        <div className="mt-24">
        <PageLayout>
            {Object.keys(data).length > 0 && Object.keys(data).map((word, index)=> <Card key={index} updateDeck={updateDeck} data={data[word]}></Card> )}
        </PageLayout>
        <BurgerMenu pages={paths} className="burger-menu" outerContainerId={"App"} ></BurgerMenu>
        </div>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllCSVIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the page using params.id
    let csvData = await getCSVData(params.id)
    const paths = getAllCSVIds()
    return {
        props: {
            paths,
            csvData
        }
    }
}
