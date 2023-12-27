import { Component, createSignal, createEffect } from "solid-js";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import supportsWebP from "supports-webp";

const Home: Component<{}> = () => {
  const [support, isSupport] = createSignal(false);
  supportsWebP.then((supported) => {
    isSupport(supported);
  });
  return (
    <div class="mt-16">
      <Title>VCFes Portal</Title>
      <Meta property="og:title" content="VCFes Portal" />
      <Meta
        property="og:description"
        content="VCbornのオンラインイベント「VCFes」"
      />
      <Meta name="description" content="VCbornのオンラインイベント「VCFes」" />
      <Meta property="og:title" content="VCFes Portal" />
      <Meta property="og:url" content="https://fes.vcborn.com" />
      <Meta property="og:image" content="https://fes.vcborn.com/img/ogp.png" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:image" content="https://fes.vcborn.com/img/ogp.png" />
      <Meta name="twitter:site" content="@vcborn_support" />
      <div class="flex flex-col justify-center h-96 bg-gradient-to-br from-blue-900 to-black text-white">
        <div class="max-w-5xl mx-auto container">
          <div class="mx-4 flex flex-col gap-3">
            <h2 class="text-5xl pb-2 font-bold italic underline decoration-double decoration-blue-500">
              楽しむ・学ぶ・観る
            </h2>
            <p class="text-3xl pb-4 font-bold">
              VCborn主催のオンラインイベント「VCFes」
            </p>
          </div>
        </div>
      </div>
      <div class="px-4 max-w-5xl mx-auto container mt-10 mb-20">
        {/* <h2 class="text-3xl font-semibold">開催中のイベント</h2> */}
        {/* <h2 class='text-3xl font-semibold'>開催予定のイベント</h2>
        <div class='my-10'>
          <A href='/fes/winter2022' aria-label='VCFes Winter 2022'>
            <img
              alt='VCFes Winter 2022 Banner'
              class='hidden md:block shadow-lg duration-200 hover:shadow-md'
              src={`/img/banner/vcfeswin2022.${support() ? 'webp' : 'jpg'}`}
            />
            <img
              alt='VCFes Winter 2022'
              class='block md:hidden shadow-lg duration-200 hover:shadow-md'
              src={`/img/banner/vcfeswin2022-sm.${support() ? 'webp' : 'jpg'}`}
            />
          </A>
        </div>
        */}

        <h2 class="text-3xl font-semibold">過去のイベント</h2>
        <div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <A href="/fes/winter2022" aria-label="VCFes Winter 2022">
            <img
              alt="VCFes Winter 2022"
              class="shadow rounded-md duration-200 hover:shadow-sm"
              src={`/img/banner/vcfeswin2022-sm.${support() ? "webp" : "jpg"}`}
            />
          </A>
          <div>
            <a
              href="https://vcborn-fes2022.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VCFes Summber 2022"
            >
              <img
                alt="VCFes Summer 2022"
                src={`/img/fes/summer2022.${support() ? "webp" : "jpg"}`}
                class="shadow rounded-md duration-200 hover:shadow-sm"
              />
            </a>
          </div>
        </div>
        <h2 class="text-3xl font-semibold">VCFesとは？</h2>
        <p class="text-lg mt-3">
          VCFesは、VCborn主催の一部参加型オンラインイベントです。
          <br />
          ゲーム大会やライトニングトーク、進捗発表など様々なイベントをやります。
        </p>
      </div>
    </div>
  );
};

export default Home;
