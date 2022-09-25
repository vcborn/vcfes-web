import { Component, createSignal } from 'solid-js'
import { MetaProvider, Title, Meta } from 'solid-meta'
import { BsYoutube, BsTwitter } from 'solid-icons/bs'
import {
  Dialog,
  DialogOverlay,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from 'solid-headless'

const Winter2022: Component<{}> = () => {
  const [open, setOpen] = createSignal('')
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
      <Meta property='description' content='VCbornのオンラインイベント「VCFes」' />
      <Meta property='og:title' content='VCFes Winter 2022' />
      <Meta property='og:url' content='https://fes.vcborn.com/fes/winter2022' />
      <Meta property='og:image' content='https://fes.vcborn.com/img/fes/winter2022.png' />
      <Meta name='twitter:card' content='summary_large_image' />
      <Meta name='twitter:image' content='https://fes.vcborn.com/img/fes/winter2022.png' />
      <Meta name='twitter:site' content='@vcborn_support' />
      <div class='flex flex-col justify-center h-[80vh] bg-gradient-to-br from-blue-900 to-black text-white'>
        <div class='max-w-5xl mx-auto container'>
          <div class='mx-4 flex flex-col items-center gap-3'>
            <h2 class='text-7xl pb-2 font-bold'>VCFes Winter 2022</h2>
            <p class='text-4xl'>12月 OR 1月</p>
          </div>
        </div>
      </div>
      <div class='px-4 max-w-4xl mx-auto container mt-10 mb-20 text-center'>
        {/*<img src='/img/antenna.png' class='h-36 mx-auto' />
        <div class='relative bg-blue-900 inline-block text-white rounded-lg px-8 py-7 overflow-hidden mb-10'>
          <h2 class='absolute text-xl font-bold bg-black -rotate-12 pl-12 pr-64 py-1 -left-2 top-2'>
            ライブ配信
          </h2>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/jfKfPfyJRdk'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
  </div>*/}
        <div>
          <h2 class='text-3xl font-semibold'>タイムスケジュール</h2>
          <table class='border-black border-collapse w-full md:w-3/4 mx-auto my-10 text-lg'>
            <thead>
              <tr>
                <th class='bg-orange-400 text-white' colSpan={2}>
                  昼の部
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border-r border-black w-48'>13:00~</td>
                <td>未決定</td>
              </tr>
              <tr>
                <td class='border-r border-black w-48'>14:00~</td>
                <td>未決定</td>
              </tr>
              <tr>
                <td class='border-r border-black w-48'>15:00~</td>
                <td>未決定</td>
              </tr>
            </tbody>
          </table>
          <table class='border-black border-collapse w-full md:w-3/4 mx-auto mt-10 mb-20 text-lg'>
            <thead>
              <tr>
                <th class='bg-blue-900 text-white' colSpan={2}>
                  夜の部
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border-r border-black w-48'>22:00~</td>
                <td>未決定</td>
              </tr>
              <tr>
                <td class='border-r border-black w-48'>23:00~</td>
                <td>未決定</td>
              </tr>
              <tr>
                <td class='border-r border-black w-48'>0:00~</td>
                <td>未決定</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 class='text-3xl font-semibold'>参加型イベント</h2>
          <div class='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-20 text-xl'>
            <button class='focus:outline-none' onClick={() => openModal('game')}>
              <div>
                <img src='/img/events/game.png' class='mb-2 rounded-md' />
                <h3>ゲーム大会</h3>
              </div>
            </button>
            <button class='focus:outline-none' onClick={() => openModal('quiz')}>
              <div>
                <img src='/img/events/quiz.png' class='mb-2 rounded-md' />
                <h3>クイズ大会</h3>
              </div>
            </button>
            <button class='focus:outline-none' onClick={() => openModal('food')}>
              <div>
                <img src='/img/events/food.png' class='mb-2 rounded-md' />
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
                    <img src='/img/events/game.png' class='rounded-md mb-4' />
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
                    <img src='/img/events/quiz.png' class='rounded-md mb-4' />
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
                    <img src='/img/events/food.png' class='rounded-md mb-4' />
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
        <div>
          <h2 class='text-3xl font-semibold'>スタッフ</h2>
          <div class='mt-10 mb-20 flex flex-col md:flex-row gap-6 items-center justify-center'>
            <button class='focus:outline-none' onClick={() => openModal('mushroom')}>
              <div class='flex flex-col items-center gap-3 text-xl'>
                <img src='/img/staff/mushroom.jpg' class='rounded-full w-36' />
                <p>mushroom</p>
              </div>
            </button>
            <button class='focus:outline-none' onClick={() => openModal('wamo')}>
              <div class='flex flex-col items-center gap-3 text-xl'>
                <img src='/img/staff/wamo.jpg' class='rounded-full w-36' />
                <p>wamo</p>
              </div>
            </button>
            <button class='focus:outline-none' onClick={() => openModal('pnuts2872ykr')}>
              <div class='flex flex-col items-center gap-3 text-xl'>
                <img src='/img/staff/pnuts2872ykr.jpg' class='rounded-full w-36' />
                <p>pnuts2872ykr</p>
              </div>
            </button>
          </div>
          <div>
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
                    <DialogPanel class='text-center z-30 flex flex-col items-center w-full max-w-md py-6 px-20 my-8 overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                      <img src='/img/staff/mushroom.jpg' class='rounded-full w-24 mb-4' />
                      <DialogTitle as='h3' class='text-2xl font-bold'>
                        mushroom
                      </DialogTitle>
                      <div class='mt-4 text-base'>
                        <p class='text-xl font-bold'>司会</p>
                        <p>しゃべりがうまい</p>
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
                    <DialogPanel class='text-center z-30 flex flex-col items-center w-full max-w-md py-6 px-20 my-8 overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                      <img src='/img/staff/wamo.jpg' class='rounded-full w-24 mb-4' />
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
                    <DialogPanel class='text-center z-30 flex flex-col items-center w-full max-w-md py-6 px-20 my-8 overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl bg-white'>
                      <img src='/img/staff/pnuts2872ykr.jpg' class='rounded-full w-24 mb-4' />
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
        <div>
          <h2 class='font-bold text-3xl'>SNS</h2>
          <div class='inline-flex flex-col gap-3 mt-5'>
            <a href='https://vcborn.com/youtube' target='_blank' rel='noopener noreferrer'>
              <div class='flex items-center font-bold gap-3 bg-youtube rounded-full text-white px-8 py-2'>
                <BsYoutube size={24} />
                <span class='mb-1'>チャンネル登録</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/follow?screen_name=vcborn_support'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-3 bg-twitter rounded-full text-white px-8 py-2'>
                <BsTwitter size={24} />
                <span class='mb-1'>フォロー</span>
              </div>
            </a>
            <a
              href='https://twitter.com/intent/tweet?hashtags=VCFes&related=vcborn_support&url=https%3A%2F%2Ffes.vcborn.com%2Ffes%2Fwinter2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div class='flex items-center font-bold gap-3 bg-twitter rounded-full text-white px-8 py-2'>
                <BsTwitter size={24} />
                <span class='mb-1'>#VCFes でツイート</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winter2022
