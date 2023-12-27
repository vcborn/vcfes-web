import { Component, createSignal, createEffect } from 'solid-js'
import { Title, Meta } from '@solidjs/meta'
import { BsYoutube, BsBoxArrowUpRight } from 'solid-icons/bs'
import { BsTwitterX } from '~/components/BsTwitterX'
import supportsWebP from 'supports-webp'

const Winter2023: Component<{}> = () => {
  const [support, isSupport] = createSignal(false)
  supportsWebP.then((supported) => {
    isSupport(supported)
  })
  return (
    <div class='mt-16'>
      <Title>VCFes Winter 2023</Title>
      <Meta property='og:title' content='VCFes Winter 2023' />
      <Meta property='og:description' content='VCbornのオンラインイベント「VCFes」' />
      <Meta name='description' content='VCbornのオンラインイベント「VCFes」' />
      <Meta property='og:title' content='VCFes Winter 2023' />
      <Meta property='og:url' content='https://fes.vcborn.com/fes/winter2023' />
      <Meta property='og:image' content='https://fes.vcborn.com/img/banner/winter2023.png' />
      <Meta name='twitter:card' content='summary_large_image' />
      <Meta name='twitter:image' content='https://fes.vcborn.com/img/banner/winter2023.png' />
      <Meta name='twitter:site' content='@vcborn_support' />
      <div class='relative flex flex-col justify-center h-[80vh] bg-black text-white'>
        <div class='max-w-7xl mx-auto px-4 container font-train text-6xl md:text-8xl relative group'>
          <div class='bg-black relative pb-6 pl-4 z-30 duration-300 group-hover:-translate-x-1 group-hover:translate-y-1'>
            <p>VCFes Winter 2023</p>
            <p>@2024/1/8</p>
          </div>
          <div class='bg-lime-400 absolute top-4 -bottom-4 left-0 right-8 z-20 duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'></div>
          <div class='bg-fuchsia-500 absolute top-8 -bottom-8 -left-4 right-12 z-10 duration-300 group-hover:translate-x-3 group-hover:-translate-y-3'></div>
          <div class='bg-sky-500 absolute top-12 -bottom-12 -left-8 right-16 z-0 duration-300 group-hover:translate-x-5 group-hover:-translate-y-5'></div>
        </div>
        <div class='absolute -bottom-1 right-0'>
          <span class='font-barcode text-5xl leading-3'>vcfeswinter2023</span>
        </div>
      </div>
      <div class='schedule-trigger'>
        {/*
        <h2 class="text-4xl font-semibold font-futura">ARCHIVE</h2>
        <img src="/img/antenna.png" class="h-24 md:h-36 mx-auto mt-8" />
        <div class="relative bg-blue-900 inline-block text-white rounded-lg px-5 py-5 md:px-8 md:py-7 overflow-hidden mb-10 max-w-2xl w-full">
          <iframe
            src="https://www.youtube.com/embed/nBXf6kwpy0k"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            class="aspect-video block w-full"
            allowfullscreen
          ></iframe>
        </div>
        */}

        <div class='schedule pr-4 pl-8 py-16 bg-rose-600 text-white'>
          <h2 class='text-5xl font-semibold font-futura'>TIME TABLE</h2>
          <p class='font-bold text-2xl'>！このタイムテーブルは仮のものです！</p>
          <table class='border-collapse w-full mt-12 text-2xl'>
            <tbody>
              <tr>
                <td class='border-r w-24 py-6'>22:00~</td>
                <td class='pl-8'>
                  <div>
                    <p>オープニング</p>
                    <p class='text-lg'>企画概要</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class='border-r w-24 py-6'>22:10~</td>
                <td class='pl-8'>
                  <div>
                    <p>近況報告</p>
                    <p class='text-lg'>一年間何やってたんですか</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class='border-r w-24 py-6'>22:30~</td>
                <td class='pl-8'>
                  <div>
                    <p>飯テロ</p>
                    <p class='text-lg'>溜まりに溜まった飯テロ画像の放出</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class='border-r w-24 py-6'>22:40~</td>
                <td class='pl-8'>
                  <div>
                    <p>ゲーム</p>
                    <p class='text-lg'>ゲームをやるだけ</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class='border-r w-24 py-6'>23:30~</td>
                <td class='pl-8'>
                  <div>
                    <p>エンディング</p>
                    <p class='text-lg'>締め</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class='pr-4 pl-8 py-16 bg-sky-600 text-white'>
          <h2 class='text-5xl font-semibold font-futura'>EVENTS</h2>
          <div class='flex flex-col gap-5 my-4'>
            <div>
              <h3 class='text-3xl font-medium'>飯テロ</h3>
              <p class='text-xl'>VCbornの#飯テロにアップロードされた画像を見る会</p>
            </div>
            <div>
              <h3 class='text-3xl font-medium'>ゲーム</h3>
              <p class='text-xl'>やる予定のゲーム</p>
              <ul class='list-disc ml-8 text-xl'>
                <li>a</li>
                <li>b</li>
                <li>c</li>
              </ul>
            </div>
            <div>
              <h3 class='text-3xl font-medium'>近況報告</h3>
              <p class='text-xl'>VCborn空白の一年</p>
            </div>
          </div>
        </div>
        <div class='bg-black text-white py-16 pr-4 pl-8'>
          <h2 class='text-5xl font-semibold font-futura'>STAFF</h2>
          <div class='my-10 flex flex-col gap-6 items-start justify-center font-futura'>
            <div class='flex items-center gap-5 text-2xl md:text-4xl'>
              <img
                alt='mushroom'
                src='/img/staff/mushroom.jpg'
                class='rounded-full w-20 h-20 md:w-28 md:h-28 duration-200 overflow-hidden object-cover group-hover:scale-110'
              />
              <div>
                <p>mushroom</p>
                <p class='text-lg md:text-2xl font-sans opacity-80 mt-2'>常に眠い</p>
              </div>
            </div>
            <div class='flex items-center gap-5 text-2xl md:text-4xl'>
              <img
                alt='あんころもち'
                src='/img/staff/ankoromoti.jpg'
                class='rounded-full w-20 h-20 md:w-28 md:h-28 duration-200 overflow-hidden object-cover group-hover:scale-110'
              />
              <div>
                <p>あんころもち</p>
                <p class='text-lg md:text-2xl font-sans opacity-80 mt-2'>紹介文をここに入力。</p>
              </div>
            </div>
            <div class='flex items-center gap-5 text-2xl md:text-4xl'>
              <img
                alt='wamo'
                src='/img/staff/wamo.jpg'
                class='rounded-full w-20 h-20 md:w-28 md:h-28 duration-200 overflow-hidden object-cover group-hover:scale-110'
              />
              <div>
                <p>wamo</p>
                <p class='text-lg md:text-2xl font-sans opacity-80 mt-2'>多忙。</p>
              </div>
            </div>
            <div class='flex items-center gap-5 text-2xl md:text-4xl'>
              <img
                alt='pnuts2872ykr'
                src='/img/staff/pnuts.jpg'
                class='rounded-full w-20 h-20 md:w-28 md:h-28 duration-200 overflow-hidden object-cover group-hover:scale-110'
              />
              <div>
                <p>pnuts2872ykr</p>
                <p class='text-lg md:text-2xl font-sans opacity-80 mt-2'>VCbornのリーダー</p>
              </div>
            </div>
          </div>
        </div>
        <div class='pr-4 pl-8 py-16'>
          <h2 class='text-5xl font-semibold font-futura flex flex-wrap items-center'>
            VENUE：
            <a href='https://www.youtube.com/@vcborn' class='text-youtube flex items-center gap-3'>
              <span class='underline'>YouTube Live</span>
              <BsBoxArrowUpRight size={28} />
            </a>
          </h2>
        </div>
        <div>
          <div class='flex-col text-2xl'>
            <a href='https://www.youtube.com/@vcborn' target='_blank' rel='noopener noreferrer'>
              <div class='flex items-center font-bold gap-5 bg-youtube text-white px-8 py-6 duration-300 hover:opacity-80'>
                <BsYoutube size={32} />
                <span class='mb-1'>チャンネル登録</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/follow?screen_name=vcborn_support'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-5 bg-black text-white px-8 py-6 duration-300 hover:opacity-80'>
                <BsTwitterX size={32} />
                <span class='mb-1'>フォロー</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/tweet?hashtags=VCFes&related=vcborn_support&url=https%3A%2F%2Ffes.vcborn.com%2Ffes%2Fwinter2023'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-5 bg-black text-white px-8 py-6 duration-300 hover:opacity-80'>
                <BsTwitterX size={32} />
                <span class='mb-1'>#VCFes でツイート</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/tweet?hashtags=VCFes23W&related=vcborn_support&url=https%3A%2F%2Ffes.vcborn.com%2Ffes%2Fwinter2023'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-5 bg-black text-white px-8 py-6 duration-300 hover:opacity-80'>
                <BsTwitterX size={32} />
                <span class='mb-1'>#VCFes23W でツイート</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winter2023
