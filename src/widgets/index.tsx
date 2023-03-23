import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let TextColorizerCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  const [
    skinnyTextRD,
    skinnyTextOR,
    skinnyTextYW,
    skinnyTextGR,
    skinnyTextBL,
    skinnyTextVT,
    revertRD,
    revertOR,
    revertYW,
    revertGR,
    revertBL,
    revertVT,
  ] = [
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.whitespace-pre-wrap {
  font-weight: 400;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.whitespace-pre-wrap {
  font-weight: 400;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.whitespace-pre-wrap {
  font-weight: 400;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.whitespace-pre-wrap {
  font-weight: 400;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.whitespace-pre-wrap {
  font-weight: 400;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.whitespace-pre-wrap {
  font-weight: 400;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
    `
#tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.whitespace-pre-wrap,
.dark #tile__document .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
  ];

  try {
    await fetch("snippet.css");
    const response = await fetch("snippet.css");
    TextColorizerCSS = await response.text();
    console.log("Text Colorizer Installed!");
    await plugin.app.registerCSS("text-colorizer", TextColorizerCSS);
  } catch (error) {
    console.error(error);
    const cdnResponse = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-TextColorizer/main/src/snippet.css"
    );
    TextColorizerCSS = await cdnResponse.text();
    console.log("Text Colorizer Installed from cdn");
    await plugin.app.registerCSS("text-colorizer", TextColorizerCSS);
  }
  await plugin.settings.registerBooleanSetting({
    id: "dieting-rd",
    title: "Reduce Text Weight in Red Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-or",
    title: "Reduce Text Weight in Orange Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-yw",
    title: "Reduce Text Weight in Yellow Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-gr",
    title: "Reduce Text Weight in Green Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-bl",
    title: "Reduce Text Weight in Blue Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-vt",
    title: "Reduce Text Weight in Purple Highlight",
    defaultValue: false,
  });
  await plugin.track(async (reactivePlugin) => {
    const rdWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-rd");
    rdWeight === true
      ? plugin.app.registerCSS("skinny-text-rd", skinnyTextRD)
      : plugin.app.registerCSS("skinny-text-rd", revertRD);

    const orWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-or");
    orWeight === true
      ? plugin.app.registerCSS("skinny-text-or", skinnyTextOR)
      : plugin.app.registerCSS("skinny-text-or", revertOR);

    const ywWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-yw");
    ywWeight === true
      ? plugin.app.registerCSS("skinny-text-yw", skinnyTextYW)
      : plugin.app.registerCSS("skinny-text-yw", revertYW);

    const grWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-gr");
    grWeight === true
      ? plugin.app.registerCSS("skinny-text-gr", skinnyTextGR)
      : plugin.app.registerCSS("skinny-text-gr", revertGR);

    const blWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-bl");
    blWeight === true
      ? plugin.app.registerCSS("skinny-text-bl", skinnyTextBL)
      : plugin.app.registerCSS("skinny-text-bl", revertBL);

    const vtWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-vt");
    vtWeight === true
      ? plugin.app.registerCSS("skinny-text-vt", skinnyTextVT)
      : plugin.app.registerCSS("skinny-text-vt", revertVT);
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
