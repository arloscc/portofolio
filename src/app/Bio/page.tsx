import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";

export default function Bio() {
  return (
    < >
    <div id="BIO">
    <div className="flex justify-center  font-bold text-8xl p-2 sm:text-xl  ">
    <h1>BIOGRAPHY</h1>
    </div>



<div>
    <div className="justify-center flex- p-4 flex flex-col content-center flex-wrap text-6xl sm:text-base">
       
        <p className=" flex text-center w-1/2 text-4xl sm:text-xs">


       
Kevina Maydiva Heriansaputri, born on May 23, 2003, is a dynamic individual with a strong passion for exploring new horizons. Her inherent curiosity and interest in discovering novel things drive her to constantly seek out new experiences. Whether it's delving into the world of coding or mastering the intricacies of Microsoft Excel, Kevina thrives on challenges and embraces the opportunity to expand her skill set.




        </p>

        <p className=" flex text-center w-1/2 text-4xl sm:text-xs p-4">
        Kevina's journey has been marked by a wealth of experiences in the realms of coding and Microsoft Excel. Her proficiency in coding showcases a keen understanding of programming languages and the ability to craft innovative solutions. Furthermore, her adeptness with Microsoft Excel underscores her analytical and organizational skills, demonstrating a mastery of data manipulation and presentation. Kevina's commitment to continuous learning and exploration positions her as an individual who not only adapts to change but actively seeks it out, making her a valuable asset in the ever-evolving landscape of technology and information management.
        </p>
        
            </div>






      <div className="scale-150 sm:scale-100 p-4 BIO  flex justify-center">
        <div className="">
        <div className="p-3 flex  items-center ">
          <FontAwesomeIcon className="w-12 " icon={faSchool} />
          <h1 className="p-4 font-semibold">SMAN 1 SLAHUNG PONOROGO</h1>
        </div>

        <div className="p-3 flex items-center">
          <FontAwesomeIcon className="w-12 " icon={faGraduationCap} />
          <h1 className="p-4 font-semibold">
            UNIVERSITAS TEKNOLOGI YOGYAKARTA
          </h1>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
