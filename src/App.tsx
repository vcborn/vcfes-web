import type { Component } from 'solid-js'
import { useRoutes, Router } from 'solid-app-router'
import { Suspense } from 'solid-js'
import { routes } from './routes'
import { preventSmoothScrollOnTabbing } from './utils'
import { AppContextProvider } from './AppContext'

import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

const App: Component = () => {
  const Routes = useRoutes(routes)
  preventSmoothScrollOnTabbing()
  return (
    <>
      <Header />
      <Loading />
      <AppContextProvider>
        <main>
          <Routes />
        </main>
      </AppContextProvider>
      <Footer />
    </>
  )
}

export default App
