import React from 'react'
import { images } from './Data'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'

const Main = () => {
    const [currentImg, setCurrentImg] = React.useState(0)

    let handleleft = () => {
        setCurrentImg(currentImg -1)
        if(currentImg === 0)
        setCurrentImg(2)
    }
    let handleRight = () => {
        setCurrentImg(currentImg +1)
        if(currentImg === 2){
            setCurrentImg(0)
        }
    }
  return (
    <div className='carousel'>
        <div className='carousel-inner' style= {{backgroundImage: `url(${images[currentImg].img})`}}>
            
           {/* <img src={images[1].img} alt="" /> */}
           {/* <img src={images[currentImg].img} alt="" /> */}

           <div className='left'>
                <FaChevronCircleLeft onClick={handleleft} size={35}/>
           </div>
           <div className='center'>
               <h2> {images[currentImg].title} </h2>
           </div>
           <div className='right'>
                <FaChevronCircleRight onClick={handleRight} size={35}/>
           </div>

        </div>
    </div>
  )
}

export default Main