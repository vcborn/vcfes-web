import type { Component } from 'solid-js';
import { useRoutes, Router } from 'solid-app-router';
import { Suspense } from 'solid-js';
import { routes } from './routes';
import { preventSmoothScrollOnTabbing } from './utils';
import { AppContextProvider } from './AppContext';
import Header from './components/Header';
import { MetaProvider } from 'solid-meta';
import Footer from './components/Footer';

const App: Component = () => {
  const Routes = useRoutes(routes);
  preventSmoothScrollOnTabbing();
  return (
    <>
      <Router>
        <MetaProvider>
          <Header />
          <AppContextProvider>
            <main>
              <Suspense>
                <Routes />
              </Suspense>
            </main>
          </AppContextProvider>
          <Footer />
        </MetaProvider>
      </Router>
    </>
  );
};

export default App;
