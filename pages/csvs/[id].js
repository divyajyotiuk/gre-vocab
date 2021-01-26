import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/pageLayout'
import { getAllCSVIds, getCSVData } from '../../lib/csvReader'

export default function WordsPage({csvData}) {
    console.log("here",csvData)
    return <Layout>...</Layout>
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
    console.log(csvData[0])
    console.log("here")
    return {
        props: {
            csvData
        }
    }
}
