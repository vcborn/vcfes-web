/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import { MetaProvider } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import App from './App'

render(
  () => (
    <Router>
      <MetaProvider>
        <App />
      </MetaProvider>
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)
