import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PageLayout from '../../components/pageLayout'
import { getAllCSVIds, getCSVData } from '../../lib/csvReader'
import Card from '../../components/card'
import BurgerMenu from '../../components/burgerMenu'

export default function WordsPage({paths, csvData}) {
    const data = csvData.data;
    return (
        <div className="mt-24">
        <PageLayout>
            {data.length > 0 && data.map((wordData, index)=> <Card key={index} data={wordData}></Card> )}
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
    // Fetch necessary data for the blog post using params.id
    let csvData = await getCSVData(params.id)
    const paths = getAllCSVIds()
    console.log(csvData[0])
    console.log("here")
    return {
        props: {
            paths,
            csvData
        }
    }
}
