import { Component, createContext, createEffect, createResource, useContext } from 'solid-js'
import { useIsRouting, useLocation } from '@solidjs/router'

type DataParams = {
  page: string
}

const AppContext = createContext()

export const AppContextProvider: Component<{}> = (props) => {
  const location = useLocation()
  const params = (): DataParams => {
    let page = location.pathname.slice(1)
    if (page == '') {
      page = 'home'
    }
    return { page }
  }

  return (
    <AppContext.Provider>
      <div>{props.children}</div>
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
