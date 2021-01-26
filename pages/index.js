export default () => (
   <div className="">
       <TopBar />
   </div>
)

export const TopBar = () => (
    <div className="flex flex-row shadow bg-white p-4 items-center">
        <div className="flex-grow md:text-center font-extrabold md:text-3xl text-xl font-mono">
            <div>GRE WORDS</div>
        </div>
        <div className="burger-menu-btn">

        </div>
    </div>
)