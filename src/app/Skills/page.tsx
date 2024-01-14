import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact , faHtml5 , faCss3 , faJs , faPython} from '@fortawesome/free-brands-svg-icons' 

export default function Skills(){
    return(

        <>
    <div className=" bg-slate-900 h-96">
        <h1 id="Skills" className="p-4 text-4xl text-white font-bold flex justify-center my-36">
            I&apos;m Good at
        </h1>
        <div className='flex justify-center scale-50 -my-32'>

        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faReact}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faHtml5}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faCss3}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faJs}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faPython}  />
        </div>
        
    </div>
        </>
    )
}