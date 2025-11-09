import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faSun} from "@fortawesome/free-regular-svg-icons";

interface ToggleBtnProps {
fun:() => void,
checked:boolean
}

const ToggleBtn:React.FC<ToggleBtnProps>= ({fun, checked}) => {
  return (
    <div className="toggle-wraper">
         <FontAwesomeIcon onClick={fun} icon={faSun} className='modeBtn left-9 text-white dark:text-dark-font cursor-pointer'/>
         <FontAwesomeIcon onClick={fun} icon={faMoon} className='modeBtn left-19 text-secondary dark:text-white cursor-pointer'/>
          <label className=" inline-flex items-center cursor-pointer">           
            <input type="checkbox" onClick={fun} checked={checked}  className="sr-only peer focus:outline-none m-auto" />                        
            <div className="relative w-22 h-11            
            bg-white
            border-none 
            peer: ring-2
            peer: ring-borderColor
            peer: dark:ring-dark-white
            peer-checked:after:outline-none
            peer-focus:outline-none 
            rounded-full 
            peer dark:bg-dark-white
            peer-checked:after:translate-x-full 
            rtl:peer-checked:after:-translate-x-full 
            peer-checked:after:border-dark-borderColor 
            peer-checked:after:bg-primary
            after:content-[''] 
            after:absolute 
            after:top-[2px] 
            after:start-[2px] 
            after:bg-primary
            after:border-borderColor 
            after: dark:border-dark-borderColor
            after:border 
            after:rounded-full 
            after:h-10 after:w-10 
            after:transition-all dark:border-dark-borderColor 
            peer-checked:bg-primary 
            dark:peer-checked:bg-dark-inputBg">                
            </div>
          </label>
        </div>
  )
}

export default ToggleBtn
