# Svelte-Esbuild-Electron template

A starter kit to build cross-platform desktop apps with [Electron](https://www.electronjs.org/), [Svelte](https://svelte.dev/), and [Esbuild](https://esbuild.github.io/) :

- Windows (portable executable)
- Linux (AppImage)

## Install

```bash
git clone https://github.com/Tazeg/electron-svelte-esbuild-template.git
cd electron-svelte-esbuild-template
yarn install # or npm
cd electron
yarn install
```

## Developpement

```bash
cd electron-svelte-esbuild-template
yarn run dev
```

The Hot Module Replacement (HMR) feature will reload the browser while you are coding (thanks to [electron-reloader](https://github.com/sindresorhus/electron-reloader))

## Build for production

```bash
cd electron-svelte-esbuild-template
yarn run buildlinux
yarn run buildwindows
```

The desktop portable apps are built in the `dist/` directory.
