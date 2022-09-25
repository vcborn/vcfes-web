/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import { MetaProvider } from 'solid-meta'
import { Router } from 'solid-app-router'
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
