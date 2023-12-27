import { Component } from "solid-js";
import { A } from "@solidjs/router";

const Header: Component<{}> = () => {
  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-30 bg-white">
        <div class="container max-w-6xl mx-auto py-3">
          <nav class="mx-4 flex flex-row justify-between">
            <A href="/" aria-label="Home">
              <img src="/img/vcfes.svg" alt="VCFes Logo" class="h-10" />
            </A>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
