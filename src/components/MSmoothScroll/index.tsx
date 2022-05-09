import React, { useState, useEffect, useRef } from 'react'
import { gsap, Power4 } from 'gsap'
import ResizeObserver from 'resize-observer-polyfill'

/**
 *
 * @param {} props
 * @returns Smooth scroller
 */

const SmoothScroll = (props: any) => {
  let viewport = useRef<any>()
  const [height, setHeight] = useState<Number>(0)
  const [width, setWidth] = useState<Number>(0)

  const ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx: any = elem.contentRect
      setHeight(crx.height)
    }
  })

  useEffect(() => {
    setWidth(window.innerWidth)
    return () => {}
  }, [])

  useEffect(() => {
    if (viewport && width > 768) {
      window.addEventListener('scroll', onScroll)
      ro.observe(viewport.current)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [viewport, width]) //eslint-disable-line

  const onScroll = () => {
    gsap.to(viewport.current, 1, {
      y: -window.pageYOffset,
      ease: Power4.easeOut,
    })
  }

  if (width && width > 768) {
    return (
      <>
        <div
          ref={viewport}
          style={{
            margin: '0 0 0 0',
            width: '100vw',
            position: 'fixed',
          }}
        >
          {props.children}
        </div>
        <div
          style={{
            height: `${height}px`,
          }}
        />
      </>
    )
  } else {
    return <>{props.children}</>
  }
}

export default SmoothScroll
