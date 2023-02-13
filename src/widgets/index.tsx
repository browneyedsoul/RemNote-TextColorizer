import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let TextColorizerCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  await fetch("https://raw.githubusercontent.com/browneyedsoul/RemNote-TextColorizer/main/src/snippet.css")
    .then((response) => response.text())
    .then((text) => {
      TextColorizerCSS = text;
      console.log("Colorizer Installed!");
    })
    .catch((error) => console.error(error));
  await plugin.app.registerCSS("text-colorizer", TextColorizerCSS);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
