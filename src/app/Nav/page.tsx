import Link from "next/link"

export default function Nav(){
    return(
        <>
        <div className="text-4xl  sm:text-xl m-8 bg-transparent text-white" >
            <h1>
        <Link className="font-bold mx-48 hover:text-indigo-400  duration-300" href="/">KEV <span className="duration-300 text-blue-700 hover:text-white">DEV</span></Link>
            </h1>
        </div>
        
        
        </>
    )
}