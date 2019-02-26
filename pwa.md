# Progressive web applications

[From Wikipedia](https://en.wikipedia.org/wiki/Progressive_web_applications): 
> Progressive web applications (PWAs) are web applications that load like regular web pages or websites but can offer the user functionality such as working offline, push notifications, and device hardware access traditionally available only to native applications.   
> PWAs combine the flexibility of the web with the experience of a native application.

How do we create a PWA?

## Requirements

This Setup assumes the Project is using webpack.

In addition to a Webpage, you require 2 more things:
1. A Manifest.
2. A Service Worker

### Manifest

The App Manifest is a json (named `manifest.json`) that describes how the app should appear for the user (for example on the home screen of the phone) once it's installed.  
The Manifest is required in order to install the PWA.

#### webpack-pwa-manifest plugin

In order to generate the Manifest, there is a webpack plugin called [webpack-pwa-manifest](https://github.com/arthurbergmz/webpack-pwa-manifest) that helps you generate the manifest.

It is fairly simple to use - just add the plugin and configure it.

![how to use webpack pwa manifest](./doc/manifest.png)

It even injects it into the index file, ready to use!

#### Install Banners

In order to show the install banners, there only needs to be a listener for the `beforeinstallpromt`.  
According to this documentation [here](https://developers.google.com/web/fundamentals/app-install-banners/), you have to call .prompt() on the `beforeinstallpromt` event, but in my case, that wasn't necessary.

### Service Worker

In order to cache data, send push notification, or do some other background work, there needs to be a Service Worker.  
A Sercice Worker is also required so that the browser sends a `beforeinstallprompt` event.

* Register the Service Worker
* Install the Service Worker (if there )


#### Workbox



## Links

* [Google Code Lab](https://codelabs.developers.google.com/codelabs/your-first-pwapp/)  
* [Wikipedia](https://en.wikipedia.org/wiki/Progressive_web_applications)
* [Web App Manifest Google Developers](https://developers.google.com/web/fundamentals/web-app-manifest/)
* [Webpack PWA Manifest](https://github.com/arthurbergmz/webpack-pwa-manifest)
* [Workbox](https://developers.google.com/web/tools/workbox/)
* [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/)