import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact , faHtml5 , faCss3 , faJs , faPython,} from '@fortawesome/free-brands-svg-icons' 
import { faDatabase , faFileExcel} from "@fortawesome/free-solid-svg-icons";
import * as Icons from 'react-feather';
import Link from 'next/link';

export default function Skills(){
    return(

        <>
    <div className=" bg-slate-900 h-96 -my-36">
        <h1 id="Skills" className="p-4 text-4xl text-white font-bold flex justify-center my-36">
            Skills
        </h1>
        <div className='flex justify-center scale-50 -my-32'>

        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faReact}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faHtml5}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faCss3}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faJs}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faPython}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faDatabase}  />
        <FontAwesomeIcon className='scale-50 w-60 text-white' icon={faFileExcel}  />
        </div>

        <div className='my-28 text-white text-sm'>
        <h1>Copyright © 2024 - All Right Reserved by KevinaMaydivaHeriansaputri.</h1>
        <Link href="https://github.com/kevinamay"><Icons.GitHub className=' w-5' /></Link>
        </div>
        
    </div>

        </>
    )
}