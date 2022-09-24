import { Component } from 'solid-js';
import { NavLink } from 'solid-app-router';

const Header: Component<{ title?: string }> = () => {
  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-10 bg-white">
        <div class="container max-w-6xl mx-auto py-3">
          <nav class="mx-4 flex flex-row justify-between">
            <NavLink href="/">
              <img src="/img/vcfes.svg" class='h-10' />
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;