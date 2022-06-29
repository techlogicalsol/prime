import React from 'react'
import MovieCard from './MovieCard'
import SlideShow from './SlideShow';
import SlideData from './SlideData';
import NewRelease from './NewRelease';
import ComingSoon from './ComingSoon'
import Classic from './Classic'


function Movie(){
    return(
        <div>
            <SlideShow 
      show1={SlideData[0].show}
      title1={SlideData[0].title}
      buy1={SlideData[0].buy}
      link1={SlideData[0].link1}

      show2={SlideData[1].show}
      title2={SlideData[1].title}
      buy2={SlideData[1].buy}
      link2={SlideData[1].link2}

      show3={SlideData[2].show}
      title3={SlideData[2].title}
      buy3={SlideData[2].buy}
      link3={SlideData[2].link3}
      
      />



    <MovieCard />


      <NewRelease/>

      <ComingSoon />

      <Classic />
        </div>
    )
}

export default Movie