import { Component } from 'solid-js'
import { Title } from '@solidjs/meta'
import { IoHelpCircleOutline } from 'solid-icons/io'

const NotFound: Component<{}> = () => {
  return (
    <>
      <Title>404 | VCFes Portal</Title>
      <div class='flex flex-col justify-center h-screen'>
        <div class='container mx-auto max-w-5xl z-20'>
          <div class='flex flex-col items-center'>
            <IoHelpCircleOutline size={120} />
            <h2 class='text-6xl mb-4 font-bold'>404 Not Found</h2>
            <p class='text-3xl font-bold'>お探しのページはありませんでした</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
