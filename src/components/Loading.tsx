import { Component, createEffect } from 'solid-js'
import gsap from 'gsap'

const Loading: Component<{}> = () => {
  createEffect(() => {
    document.body.classList.add('overflow-hidden')
    gsap.from('.circle-icon', {
      opacity: 0,
      ease: 'power2',
      duration: 0.8,
      yPercent: 300,
      delay: 0.3,
    })
    if (document.body.clientWidth >= 640) {
      gsap.to('.logo-text', {
        duration: 0.8,
        ease: 'power2',
        clipPath: 'inset(0px 0px 0px 0px)',
        x: 120,
        delay: 1.2,
      })
      gsap
        .to('.circle-icon', {
          ease: 'power2',
          duration: 0.6,
          x: -210,
          delay: 1.1,
        })
        .then(() => {
          gsap.to('.loading', {
            ease: 'power1',
            opacity: 0,
            delay: 1.1,
          })
          setTimeout(() => {
            document.body.classList.remove('overflow-hidden')
            document.getElementById('loading')?.classList.add('hidden')
          }, 1800)
        })
    } else {
      gsap.to('.logo-text', {
        duration: 0.8,
        ease: 'power2',
        clipPath: 'inset(0px 0px 0px 0px)',
        x: 65,
        delay: 1.2,
      })
      gsap
        .to('.circle-icon', {
          ease: 'power2',
          duration: 0.6,
          x: -110,
          delay: 1.1,
        })
        .then(() => {
          gsap.to('.loading', {
            ease: 'power1',
            opacity: 0,
            delay: 1.1,
          })
          setTimeout(() => {
            document.body.classList.remove('overflow-hidden')
            document.getElementById('loading')?.classList.add('hidden')
          }, 1800)
        })
    }
  })
  return (
    <>
      <div
        class='fixed flex items-center justify-center top-0 z-50 h-screen w-full bg-gradient-to-br from-blue-900 to-black loading'
        id='loading'
      >
        <div class='absolute z-20 w-24 h-24 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center circle-icon'>
          <img src='/img/vcfes-icon.svg' class='w-14 md:w-28' />
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#FFF'
          viewBox='0 0 575.86 99.61'
          class='z-0 h-8 md:h-16 absolute logo-text'
        >
          <g>
            <path d='M0,99.61V0H19.84V79.76h20.04v19.84H0ZM79.76,39.88v19.84h-20.04v20.04h-19.84v-20.04h19.84v-19.84h20.04Zm0,0V0h19.84V39.88h-19.84Z' />
            <path d='M119.06,99.61V0h99.61V20.04h-79.76v59.73h79.76v19.84H119.06Z' />
            <path d='M238.13,99.61V0h99.61V20.04h-79.76v19.84h79.76v19.84h-79.76v39.88h-19.84Z' />
            <path d='M357.19,99.61V0h99.61V20.04h-79.76v19.84h79.76v19.84h-79.76v20.04h79.76v19.84h-99.61Z' />
            <path d='M476.25,99.61v-19.84h79.76v-20.04h-79.76V0h99.61V20.04h-79.76v19.84h79.76v59.73h-99.61Z' />
          </g>
        </svg>
      </div>
    </>
  )
}

export default Loading
