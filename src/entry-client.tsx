import { mount, StartClient } from "@solidjs/start/client";
import { MetaProvider } from "@solidjs/meta";

mount(
  () => (
    <MetaProvider>
      <StartClient />
    </MetaProvider>
  ),
  document.getElementById("app")
);
