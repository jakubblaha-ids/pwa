**Deploy:** https://pwa-pi-pink.vercel.app/

```
npx pwa-asset-generator logo.png icons
```

```
 ~/pwa │ on main  npx pwa-asset-generator logo.png icons                                                                                                                        ✔
npx: installed 183 in 22.518s
6:00:57 PM getBrowserInstance Chrome launcher could not connect to your system browser. Is your port 37741 accessible? 🤔
6:00:57 PM installer Chromium is not found in module folder, gonna have to download r901912 for you once 🤔
Downloading Chromium r901912 - 140.9 Mb [====================] 100% 0.0s
6:01:22 PM installer Chromium downloaded to /home/jakub/.npm/_npx/29292/lib/node_modules/pwa-asset-generator/node_modules/puppeteer-core/.local-chromium/linux-901912
6:01:22 PM getSplashScreenMetaData Initialising puppeteer to load latest splash screen metadata 🤖
6:01:22 PM getAppleSplashScreenData Navigating to Apple Human Interface Guidelines website - https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/
6:01:26 PM getAppleSplashScreenData Waiting for the data table to be loaded
6:01:26 PM getAppleSplashScreenData Retrieved splash screen data
6:01:26 PM getSplashScreenMetaData Loaded metadata for iOS platform 🙌
6:01:26 PM generateImages Looks like folder icons doesn't exist. Created one for you 🤔
6:01:26 PM saveImages Initialising puppeteer to take screenshots 🤖
6:01:26 PM getShellHtml Generating shell html with provided image source
6:01:26 PM getShellHtml Providing shell html as page content
6:01:27 PM saveImages Saved image apple-splash-2732-2048 🙌
6:01:27 PM saveImages Saved image apple-splash-1284-2778 🙌
6:01:27 PM saveImages Saved image apple-splash-2388-1668 🙌
6:01:27 PM saveImages Saved image apple-splash-2688-1242 🙌
6:01:28 PM saveImages Saved image apple-splash-2048-2732 🙌
6:01:28 PM saveImages Saved image apple-splash-1668-2224 🙌
6:01:28 PM saveImages Saved image apple-splash-1242-2688 🙌
6:01:28 PM saveImages Saved image apple-splash-1536-2048 🙌
6:01:28 PM saveImages Saved image apple-splash-1620-2160 🙌
6:01:28 PM saveImages Saved image apple-splash-2160-1620 🙌
6:01:28 PM saveImages Saved image apple-splash-2778-1284 🙌
6:01:28 PM saveImages Saved image apple-splash-1668-2388 🙌
6:01:28 PM saveImages Saved image apple-splash-2436-1125 🙌
6:01:28 PM saveImages Saved image apple-splash-1170-2532 🙌
6:01:28 PM saveImages Saved image apple-splash-2532-1170 🙌
6:01:28 PM saveImages Saved image apple-splash-2048-1536 🙌
6:01:29 PM saveImages Saved image apple-splash-1136-640 🙌
6:01:29 PM saveImages Saved image apple-splash-1242-2208 🙌
6:01:29 PM saveImages Saved image apple-splash-828-1792 🙌
6:01:29 PM saveImages Saved image apple-splash-1334-750 🙌
6:01:29 PM saveImages Saved image apple-icon-180 🙌
6:01:29 PM saveImages Saved image apple-splash-2208-1242 🙌
6:01:29 PM saveImages Saved image apple-splash-750-1334 🙌
6:01:29 PM saveImages Saved image apple-splash-1792-828 🙌
6:01:29 PM saveImages Saved image apple-splash-1125-2436 🙌
6:01:29 PM saveImages Saved image apple-splash-640-1136 🙌
6:01:29 PM saveImages Saved image apple-splash-2224-1668 🙌
6:01:29 PM saveImages Saved image manifest-icon-192 🙌
6:01:29 PM saveImages Saved image manifest-icon-512 🙌
6:01:30 PM cli Web App Manifest file is not specified, printing out the content to console instead 🤔
6:01:30 PM cli Below is the icons content for your manifest.json file. You can copy/paste it manually 🙌

[
  {
    "src": "icons/manifest-icon-192.maskable.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "any"
  },
  {
    "src": "icons/manifest-icon-192.maskable.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "maskable"
  },
  {
    "src": "icons/manifest-icon-512.maskable.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "any"
  },
  {
    "src": "icons/manifest-icon-512.maskable.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "maskable"
  }
]


6:01:30 PM cli Index html file is not specified, printing out the content to console instead 🤔
6:01:30 PM cli Below is the iOS meta tags content for your index.html file. You can copy/paste it manually 🙌


<link rel="apple-touch-icon" href="icons/apple-icon-180.png">

<meta name="apple-mobile-web-app-capable" content="yes">

<link rel="apple-touch-startup-image" href="icons/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2732-2048.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2388-1668.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2048-1536.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2224-1668.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2160-1620.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2778-1284.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2532-1170.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2436-1125.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2688-1242.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1792-828.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-2208-1242.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1334-750.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="icons/apple-splash-1136-640.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
```
