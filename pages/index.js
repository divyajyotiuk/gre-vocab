export default () => (
   <div className="">
       <TopBar />
   </div>
)

const TopBar = () => (
    <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal text-lg"><span className="text-sm">Powered by</span> Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
  </div>
)