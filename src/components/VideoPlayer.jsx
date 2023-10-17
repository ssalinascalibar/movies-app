import React from 'react'
import ReactPlayer from 'react-player';

//context
import Context from '../Context'
import { useContext } from 'react'

export default function VideoPlayer({videos}) {
  return (
    <div className='player-wrapper'>
        <ReactPlayer
        playing
          className='react-player'
          url={videos.key}
          width='100%'
        />
      </div>
  )
}
