import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import './VideoSection.scss'

const VideoSection = () => {
  const [playState, setPlayState] = useState<boolean>(true)

  const handlePlayPause = () => {
    setPlayState(!playState)
  }

  return (
    <section className='section-video container'>
      <h3>Watch our sneak peak</h3>
      <div className='video-wrapper'>
        <ReactPlayer url='./video/NLA1.mp4' playing={playState} loop={true} />
        <div className='video-hover' onClick={handlePlayPause}>
          <div className='video-controller'>
            <img
              src={
                playState
                  ? './images/home/video/icon-pause.svg'
                  : './images/home/video/icon-play.svg'
              }
              alt='play-icon'
            />
            <span>{playState ? 'Pause video' : 'Play Video'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
