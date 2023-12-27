import { Component } from "solid-js";

const Footer: Component<{}> = () => {
  return (
    <>
      <footer>
        <div class="px-4 container max-w-5xl mx-auto py-4">
          <p>
            CopyRight &copy; 2022{" "}
            <a
              href="https://vcborn.com"
              class="text-blue-600 duration-200 hover:text-cyan-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              VCborn
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
