import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=Libre+Barcode+39&family=Train+One&family=Zen+Kaku+Gothic+New:wght@500;700&display=swap'
            rel='stylesheet'
          />
          <link rel='stylesheet' href='https://use.typekit.net/gdc2fvk.css'></link>
          <title data-sm>VCFes Portal</title>
          <meta data-sm property='og:title' content='VCFes Portal' />
          <meta data-sm property='og:description' content='VCbornのオンラインイベント「VCFes」' />
          <meta data-sm name='description' content='VCbornのオンラインイベント「VCFes」' />
          <meta data-sm property='og:title' content='VCFes Portal' />
          <meta data-sm property='og:url' content='https://fes.vcborn.com' />
          <meta data-sm property='og:image' content='https://fes.vcborn.com/img/ogp.png' />
          <meta data-sm name='twitter:card' content='summary_large_image' />
          <meta data-sm name='twitter:image' content='https://fes.vcborn.com/img/ogp.png' />
          <meta data-sm name='twitter:site' content='@vcborn_support' />
          {assets}
        </head>
        <body>
          <div id='app'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
