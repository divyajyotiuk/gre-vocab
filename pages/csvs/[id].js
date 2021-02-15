import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PageLayout from '../../components/pageLayout'
import { getAllCSVIds, getCSVData } from '../../lib/csvReader'
import Card from '../../components/card'
import BurgerMenu from '../../components/burgerMenu'
import constants from '../../lib/constants';
import Select from 'react-select'

export default function WordsPage({paths, csvData}) {
    const data = csvData?.data;
    const options = [
        { value: 1, label: 'Deck 1' },
        { value: 2, label: 'Deck 2' },
        { value: 3, label: 'Deck 3' }
    ];
    const [selectedOption, setSelectedOption] = useState( { value: 1, label: 'Deck 1' });
    const updateDeck = (word, deck) => {
        console.log("here!", word, deck);
        let url = constants.url || 'http://localhost:8000/';
        url = url.endsWith('/') ? '' : url + '/';
        console.log(url)
        fetch(url + constants.updateDeck, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            mode: 'no-cors',
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

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <div className="mt-24">
        <div className="container lg:rounded-lg mx-auto flex my-10 py-3 items-center justify-center bg-white shadow-md">
            <div className="flex-initial mr-10 text-purple-500">Filter by Deck: </div>
            <div className="w-44">
                <Select 
                    options={options}
                    value={selectedOption}
                    onChange={handleChange} 
                    isSearchable={false}
                />
            </div>
        </div>
        <PageLayout>
            {Object.keys(data).length > 0 && Object.keys(data).filter((key)=> Number(data[key].Deck) == selectedOption.value ).map((word, index)=> <Card key={index} updateDeck={updateDeck} data={data[word]}></Card> )}
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
