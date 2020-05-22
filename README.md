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
pwaify https://m.weibo.cn --platforms=darwin --manifest=https://m.weibo.cn/static/pwa/manifest.json
```

(Might require `sudo` at the moment if you get `pref.json` error).

Open the app on your platform, test and send it to your friends!

More apps at [pwa.rocks](https://pwa.rocks/). At this moment you need to convert your icons for your platform, using something like [iconverticons.com/online/](https://iconverticons.com/online/).

![](http://i.imgur.com/F76UA6h.gif)

## Advanced

### Custom platforms

Example, build only for OS X:
```
node bin/pwaify --platforms=darwin https://airhorner.com
```

## Known Issues / TODO

- `sudo` requirements and permission issues.
- icons are a manual process right now.

## Changelog

* 1.0.0 - First experimental release
