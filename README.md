# PWAify

> Experimental project to convert your PWA (Progressive Web App) into a cross-platform Electron app. Brings PWAs to your desktop.

![](assets/pwaify.png)

## Usage

> Node 4+ required.

Install:

```
npm install -g pwaify
```

## Run against your PWA app

```
pwaify https://airhorner.com
pwaify https://voice-memos.appspot.com/ --platforms=darwin --icon chrome-touch-icon-384x384.icns
```

Open the app on your platform, test and send it to your friends!

More apps at [pwa.rocks](https://pwa.rocks/). At this moment you need to convert your icons for your platform, using something like [iconverticons.com/online/](https://iconverticons.com/online/).

## Advanced

### Custom platforms

Example, build only for OS X:
```
node bin/pwaify --platforms=darwin https://airhorner.com
```

## Known Issues / TODO

- Icons are a manual process right now :(.

## Changelog

* 1.0.0 - First experimental release
