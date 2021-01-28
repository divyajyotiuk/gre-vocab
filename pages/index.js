import BurgerMenu from '../components/burgerMenu';
import { getAllCSVIds } from '../lib/csvReader'
import Footer from '../components/footer'

export default ({pageNames}) => (
   <div className="">
       <TopBar />
       <BurgerMenu pages={pageNames} className="burger-menu" outerContainerId={"App"} ></BurgerMenu>
       <Footer></Footer>
   </div>
)

export const TopBar = () => (
    <div className="flex flex-row shadow bg-white p-4 items-center fixed top-0 left-0 right-0 z-10">
        <div className="flex-grow md:text-center font-extrabold md:text-3xl text-xl font-mono">
            <div>GRE FLASHCARDS</div>
        </div>
        <div className="burger-menu-btn">

        </div>
    </div>
)


export async function getStaticProps() {
    // Fetch necessary data for the blog post using params.id
    let pageNames = await getAllCSVIds()
    console.log(pageNames[0])
    console.log("here")
    return {
        props: {
            pageNames
        }
    }
}