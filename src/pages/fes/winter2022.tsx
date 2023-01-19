import { Component, createSignal, createEffect } from 'solid-js'
import { Title, Meta } from 'solid-meta'
import { BsYoutube, BsTwitter } from 'solid-icons/bs'
import { BiSolidBuilding } from 'solid-icons/bi'
import {
  Dialog,
  DialogOverlay,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from 'solid-headless'
import gsap from 'gsap'
import supportsWebP from 'supports-webp'

const Winter2022: Component<{}> = () => {
  const [open, setOpen] = createSignal('')
  const [support, isSupport] = createSignal(false)
  supportsWebP.then((supported) => {
    isSupport(supported)
  })
  createEffect(() => {
    document.querySelectorAll('.title-anim').forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        ease: 'power2',
        duration: 0.8,
        yPercent: 100,
        delay: i * 0.03,
      })
    })
    let wrap = document.querySelector('.snow-wrap')
    let total = 30
    if (wrap) {
      let w = wrap.getBoundingClientRect().width
      let h = wrap.getBoundingClientRect().height
      gsap.set('.snow-wrap', {
        perspective: 600,
      })
      const R = (min: number, max: number) => {
        return min + Math.random() * (max - min)
      }
      const animm = (elm: HTMLElement) => {
        gsap.to(elm, R(6, 15), { y: h + 100, ease: 'none', repeat: -1, delay: -15 })
        gsap.to(elm, R(4, 8), {
          x: '+=100',
          rotationZ: R(0, 180),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
        gsap.to(elm, R(2, 8), {
          rotationX: R(0, 360),
          rotationY: R(0, 360),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: -5,
        })
      }
      for (let i = 0; i < total; i++) {
        let Div = document.createElement('div')
        gsap.set(Div, { attr: { class: 'snow' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) })
        wrap.appendChild(Div)
        animm(Div)
      }
    }
  })
  function closeModal() {
    setOpen('')
  }
  function openModal(page: string) {
    setOpen(page)
  }
  return (
    <div class='mt-16'>
      <Title>VCFes Winter 2022</Title>
      <Meta property='og:title' content='VCFes Winter 2022' />
      <Meta property='og:description' content='VCbornのオンラインイベント「VCFes」' />
      <Meta name='description' content='VCbornのオンラインイベント「VCFes」' />
      <Meta property='og:title' content='VCFes Winter 2022' />
      <Meta property='og:url' content='https://fes.vcborn.com/fes/winter2022' />
      <Meta property='og:image' content='https://fes.vcborn.com/img/fes/winter2022.png' />
      <Meta name='twitter:card' content='summary_large_image' />
      <Meta name='twitter:image' content='https://fes.vcborn.com/img/fes/winter2022.png' />
      <Meta name='twitter:site' content='@vcborn_support' />
      <div class='snow-wrap overflow-hidden flex flex-col justify-center h-[80vh] bg-gradient-to-br from-blue-900 to-black text-white'>
        <div class='max-w-5xl mx-auto container'>
          <div class='mx-4 flex flex-col items-center gap-3'>
            <h2 class='flex flex-wrap text-7xl pb-2 font-bold'>
              <span class='title-anim'>V</span>
              <span class='title-anim'>C</span>
              <span class='title-anim'>F</span>
              <span class='title-anim'>e</span>
              <span class='title-anim'>s</span>
              <span class='title-anim block w-full md:w-auto h-0'>&nbsp;</span>
              <span class='title-anim'>W</span>
              <span class='title-anim'>i</span>
              <span class='title-anim'>n</span>
              <span class='title-anim'>t</span>
              <span class='title-anim'>e</span>
              <span class='title-anim'>r</span>
              <span class='title-anim block w-full md:w-auto h-0'>&nbsp;</span>
              <span class='title-anim'>2</span>
              <span class='title-anim'>0</span>
              <span class='title-anim'>2</span>
              <span class='title-anim'>2</span>
            </h2>
            <p class='text-4xl flex'>
              <span class='title-anim'>1</span>
              <span class='title-anim'>2</span>
              <span class='title-anim'>月</span>
              <span class='title-anim'>2</span>
              <span class='title-anim'>5</span>
              <span class='title-anim'>日</span>
            </p>
          </div>
        </div>
      </div>
      <div class='mt-10 mb-20 text-center schedule-trigger'>
        <h2 class='text-4xl font-semibold font-futura'>ARCHIVE</h2>
        <img src='/img/antenna.png' class='h-24 md:h-36 mx-auto mt-8' />
        <div class='relative bg-blue-900 inline-block text-white rounded-lg px-5 py-5 md:px-8 md:py-7 overflow-hidden mb-10 max-w-2xl w-full'>
          <iframe
            src='https://www.youtube.com/embed/nBXf6kwpy0k'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            class='aspect-video block w-full'
            allowfullscreen
          ></iframe>
        </div>

        <div class='schedule max-w-4xl mx-auto container px-4'>
          <h2 class='text-4xl font-semibold font-futura'>TIME TABLE</h2>
          <table class='shadow-md border-black border-collapse w-full md:w-3/4 mx-auto my-10 text-lg'>
            <thead>
              <tr>
                <th class='bg-gradient-to-r from-orange-400 to-red-400 text-white py-2' colSpan={2}>
                  昼の部
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>13:00~</td>
                <td>昼の部オープニング</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>13:10~</td>
                <td>ゲーム大会（１）</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>14:30~</td>
                <td>クイズ大会</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>14:50~</td>
                <td>昼の部エンディング</td>
              </tr>
            </tbody>
          </table>
          <table class='shadow-md border-black border-collapse w-full md:w-3/4 mx-auto mt-10 mb-20 text-lg'>
            <thead>
              <tr>
                <th class='bg-gradient-to-r from-blue-900 to-black text-white py-2' colSpan={2}>
                  夜の部
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>22:00~</td>
                <td>夜の部オープニング</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>22:10~</td>
                <td>飯テロ</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>22:30~</td>
                <td>開発進捗発表会</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>22:40~</td>
                <td>LT大会</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>23:00~</td>
                <td>ゲーム大会（２）</td>
              </tr>
              <tr>
                <td class='border-r border-black w-24 md:w-48'>23:50~</td>
                <td>夜の部エンディング</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class='max-w-4xl mx-auto container px-4'>
          <h2 class='text-4xl font-semibold font-futura'>EVENTS</h2>
          <div class='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-20 text-xl'>
            <button class='focus:outline-none group' onClick={() => openModal('game')}>
              <div>
                <img
                  alt='ゲーム大会'
                  src={`/img/events/game.${support() ? 'webp' : 'jpg'}`}
                  class='mb-2 rounded-md shadow-md duration-200 group-hover:shadow'
                />
                <h3>ゲーム大会</h3>
              </div>
            </button>
            <button class='focus:outline-none group' onClick={() => openModal('quiz')}>
              <div>
                <img
                  alt='クイズ大会'
                  src={`/img/events/quiz.${support() ? 'webp' : 'jpg'}`}
                  class='mb-2 rounded-md shadow-md duration-200 group-hover:shadow'
                />
                <h3>クイズ大会</h3>
              </div>
            </button>
            <button class='focus:outline-none group' onClick={() => openModal('food')}>
              <div>
                <img
                  alt='飯テロ'
                  src={`/img/events/food.${support() ? 'webp' : 'jpg'}`}
                  class='mb-2 rounded-md shadow-md duration-200 group-hover:shadow'
                />
                <h3>飯テロ</h3>
              </div>
            </button>
          </div>
        </div>
        <div>
          <Transition appear show={open() == 'game'}>
            <Dialog isOpen class='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
              <div class='min-h-screen px-4 flex items-center justify-center'>
                <TransitionChild
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <DialogOverlay class='fixed inset-0 bg-gray-900 bg-opacity-50' />
                </TransitionChild>
                <TransitionChild
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <DialogPanel class='z-30 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                    <img
                      alt='ゲーム大会'
                      src={`/img/events/game.${support() ? 'webp' : 'jpg'}`}
                      class='rounded-md mb-4'
                    />
                    <DialogTitle as='h3' class='text-xl font-bold'>
                      ゲーム大会
                    </DialogTitle>
                    <div class='mt-2'>
                      <p class='text-base'>色々なゲームをします。</p>
                    </div>

                    <div class='mt-4'>
                      <button
                        type='button'
                        class='focus:outline-none text-lg'
                        onClick={() => closeModal()}
                      >
                        閉じる
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </Dialog>
          </Transition>
          <Transition appear show={open() == 'quiz'}>
            <Dialog isOpen class='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
              <div class='min-h-screen px-4 flex items-center justify-center'>
                <TransitionChild
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <DialogOverlay class='fixed inset-0 bg-gray-900 bg-opacity-50' />
                </TransitionChild>
                <TransitionChild
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <DialogPanel class='z-30 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                    <img
                      alt='クイズ大会'
                      src={`/img/events/quiz.${support() ? 'webp' : 'jpg'}`}
                      class='rounded-md mb-4'
                    />
                    <DialogTitle as='h3' class='text-xl font-bold'>
                      クイズ大会
                    </DialogTitle>
                    <div class='mt-2'>
                      <p class='text-base'>VCbornやその他メンバーに関するクイズを出題！</p>
                    </div>

                    <div class='mt-4'>
                      <button
                        type='button'
                        class='focus:outline-none text-lg'
                        onClick={() => closeModal()}
                      >
                        閉じる
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </Dialog>
          </Transition>
          <Transition appear show={open() == 'food'}>
            <Dialog isOpen class='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
              <div class='min-h-screen px-4 flex items-center justify-center'>
                <TransitionChild
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <DialogOverlay class='fixed inset-0 bg-gray-900 bg-opacity-50' />
                </TransitionChild>
                <TransitionChild
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <DialogPanel class='z-30 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                    <img
                      alt='飯テロ'
                      src={`/img/events/food.${support() ? 'webp' : 'jpg'}`}
                      class='rounded-md mb-4'
                    />
                    <DialogTitle as='h3' class='text-xl font-bold'>
                      飯テロ
                    </DialogTitle>
                    <div class='mt-2'>
                      <p class='text-base'>投稿されたごはんの写真を使って人の腹を空かせよう！</p>
                    </div>

                    <div class='mt-4'>
                      <button
                        type='button'
                        class='focus:outline-none text-lg'
                        onClick={() => closeModal()}
                      >
                        閉じる
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </Dialog>
          </Transition>
        </div>
        <div class='bg-black text-white py-16'>
          <h2 class='text-4xl font-semibold font-futura'>STAFF</h2>
          <div class='my-10 flex flex-col md:flex-row gap-6 items-center justify-center'>
            <button class='focus:outline-none group' onClick={() => openModal('mushroom')}>
              <div class='flex flex-col items-center gap-3 text-xl'>
                <img
                  alt='mushroom'
                  src='/img/staff/mushroom.jpg'
                  class='rounded-full w-36 h-36 duration-200 overflow-hidden object-cover group-hover:scale-110'
                />
                <p>mushroom</p>
              </div>
            </button>
            <button class='focus:outline-none group' onClick={() => openModal('wamo')}>
              <div class='flex flex-col items-center gap-3 text-xl'>
                <img
                  alt='wamo'
                  src='/img/staff/wamo.jpg'
                  class='rounded-full w-36 h-36 duration-200 overflow-hidden object-cover group-hover:scale-110'
                />
                <p>wamo</p>
              </div>
            </button>
            <button class='focus:outline-none group' onClick={() => openModal('pnuts2872ykr')}>
              <div class='flex flex-col items-center gap-3 text-xl'>
                <img
                  alt='pnuts2872ykr'
                  src='/img/staff/pnuts2872ykr.jpg'
                  class='rounded-full w-36 h-36 duration-200 overflow-hidden object-cover group-hover:scale-110'
                />
                <p>pnuts2872ykr</p>
              </div>
            </button>
          </div>
          <div class='text-black'>
            <Transition appear show={open() == 'mushroom'}>
              <Dialog isOpen class='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
                <div class='min-h-screen px-4 flex items-center justify-center'>
                  <TransitionChild
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <DialogOverlay class='fixed inset-0 bg-gray-900 bg-opacity-50' />
                  </TransitionChild>
                  <TransitionChild
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <DialogPanel class='text-center z-30 flex flex-col items-center w-full max-w-md py-6 px-14 md:px-20 my-8 overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                      <img
                        alt='mushroom'
                        src='/img/staff/mushroom.jpg'
                        class='rounded-full w-24 mb-4'
                      />
                      <DialogTitle as='h3' class='text-2xl font-bold'>
                        mushroom
                      </DialogTitle>
                      <div class='mt-4 text-base'>
                        <p class='text-xl font-bold'>司会</p>
                        <p>イベント以外何もしてない人</p>
                      </div>

                      <div class='mt-8'>
                        <button
                          type='button'
                          class='focus:outline-none text-lg'
                          onClick={() => closeModal()}
                        >
                          閉じる
                        </button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </Dialog>
            </Transition>
            <Transition appear show={open() == 'wamo'}>
              <Dialog isOpen class='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
                <div class='min-h-screen px-4 flex items-center justify-center'>
                  <TransitionChild
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <DialogOverlay class='fixed inset-0 bg-gray-900 bg-opacity-50' />
                  </TransitionChild>
                  <TransitionChild
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <DialogPanel class='text-center z-30 flex flex-col items-center w-full max-w-md py-6 px-14 md:px-20 my-8 overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                      <img alt='wamo' src='/img/staff/wamo.jpg' class='rounded-full w-24 mb-4' />
                      <DialogTitle as='h3' class='text-2xl font-bold'>
                        wamo
                      </DialogTitle>
                      <div class='mt-4 text-base'>
                        <p class='text-xl font-bold'>配信・システム</p>
                        <p>迷走中</p>
                      </div>

                      <div class='mt-8'>
                        <button
                          type='button'
                          class='focus:outline-none text-lg'
                          onClick={() => closeModal()}
                        >
                          閉じる
                        </button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </Dialog>
            </Transition>
            <Transition appear show={open() == 'pnuts2872ykr'}>
              <Dialog isOpen class='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
                <div class='min-h-screen px-4 flex items-center justify-center'>
                  <TransitionChild
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <DialogOverlay class='fixed inset-0 bg-gray-900 bg-opacity-50' />
                  </TransitionChild>
                  <TransitionChild
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <DialogPanel class='text-center z-30 flex flex-col items-center w-full max-w-md py-6 px-14 md:px-20 my-8 overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                      <img
                        alt='pnuts2872ykr'
                        src='/img/staff/pnuts2872ykr.jpg'
                        class='rounded-full w-24 mb-4'
                      />
                      <DialogTitle as='h3' class='text-2xl font-bold'>
                        pnuts2872ykr
                      </DialogTitle>
                      <div class='mt-4 text-base'>
                        <p class='text-xl font-bold'>企画</p>
                        <p>VCbornのリーダーやってる人</p>
                      </div>

                      <div class='mt-8'>
                        <button
                          type='button'
                          class='focus:outline-none text-lg'
                          onClick={() => closeModal()}
                        >
                          閉じる
                        </button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
        <div class='mx-auto container max-w-2xl px-4 mt-16'>
          <h2 class='text-4xl font-semibold font-futura'>VENUE</h2>
          <h3 class='text-2xl font-semibold my-4'>昼の部</h3>
          <div class='flex gap-3 items-center'>
            <div class='p-2.5 bg-cyan-600 inline-block rounded-full'>
              <BiSolidBuilding class='fill-white' size={40} />
            </div>
            <a
              class='text-xl pb-1 font-medium'
              href='https://goo.gl/maps/WmwszFX6pchHCbeD8'
              rel='noopener noreferrer'
              target='_blank'
            >
              東京都新宿区西新宿7-10-17 新宿ダイカンプラザB館 1003号室
            </a>
          </div>
          <div class='flex gap-3 items-center my-4'>
            <div class='p-3.5 bg-[#ff0000] inline-block rounded-full'>
              <BsYoutube class='fill-white' size={30} />
            </div>
            <p class='text-xl pb-1 font-medium'>YouTube Live</p>
          </div>
          <h3 class='text-2xl font-semibold my-4'>夜の部</h3>
          <div class='flex gap-3 items-center my-4'>
            <div class='p-3.5 bg-[#ff0000] inline-block rounded-full'>
              <BsYoutube class='fill-white' size={30} />
            </div>
            <p class='text-xl pb-1 font-medium'>YouTube Live</p>
          </div>
        </div>
        <div class='max-w-4xl mx-auto container px-4 py-16'>
          <h2 class='text-4xl font-semibold font-futura'>SNS</h2>
          <div class='inline-flex flex-col gap-3 mt-5'>
            <a href='https://www.youtube.com/@vcborn' target='_blank' rel='noopener noreferrer'>
              <div class='flex items-center font-bold gap-3 bg-youtube rounded-full text-white px-8 py-2 duration-300 hover:opacity-80'>
                <BsYoutube size={24} />
                <span class='mb-1'>チャンネル登録</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/follow?screen_name=vcborn_support'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-3 bg-twitter rounded-full text-white px-8 py-2 duration-300 hover:opacity-80'>
                <BsTwitter size={24} />
                <span class='mb-1'>フォロー</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/tweet?hashtags=VCFes&related=vcborn_support&url=https%3A%2F%2Ffes.vcborn.com%2Ffes%2Fwinter2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-3 bg-twitter rounded-full text-white px-8 py-2 duration-300 hover:opacity-80'>
                <BsTwitter size={24} />
                <span class='mb-1'>#VCFes でツイート</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/tweet?hashtags=VCFes22W&related=vcborn_support&url=https%3A%2F%2Ffes.vcborn.com%2Ffes%2Fwinter2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-3 bg-twitter rounded-full text-white px-8 py-2 duration-300 hover:opacity-80'>
                <BsTwitter size={24} />
                <span class='mb-1'>#VCFes22W でツイート</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winter2022
