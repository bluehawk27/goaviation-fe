## Client Application Directory

This is the root directory of the [AngularJS](https://angularjs.org/) client-side application.  It also contains all front-end build tools and 3rd party vendor libraries.

## How To Setup Environment / Build Tools
This AngularJS application is built by [gulp.js](http://gulpjs.com/).

To set up your environment to use gulp.js, ensure you have node.js and npm installed.  Once installed, execute the following steps to install all build-tool dependencies:

1. ```npm install -g bower```
2. ```npm install -g gulp```

Once the above steps are completed, you can begin pulling in packages that are required during the runtime of the application.  Execute the following commands (within this client directory):

1. ```npm install```
2. ```bower install```

All project dependencies are now installed.

## Build Options

```gulp build ```  --
This is will execute the build tools and generate all necessary files to properly run the application.  This will generate a one-time build.  If you make changes to any files, you must re-run this command.

```gulp watch``` --
This is runs the standard build, in addition to spinning up a local dev server that hosts the angular app and opening a browser window where the app can be viewed


## Serving over SSL

The dev server must be served over SSL to contact the remote Go Aviation API's.

Install stunnel:

```
brew install stunnel
```

Run the client:

```
gulp watch
```

In a separate terminal run stunnel:

```
stunnel ssl.conf
```

Load the service on `https://127.0.0.1:4443/`.

Note: To avoid SSL warnings add the SSL certificate to your trust list in your
login keychain:

##### Google Chrome

* Load https://127.0.0.1:4443.
* Click the lock in the address bar. Then click "Certificate information".
* Click and drag the certificate image to your desktop.
* Double-click the image and add it to your login keychain.
* Open Keychain. Right-click on the certificate and click "Get Info".
* Set the trust status for Secure Sockets Layer (SSL) to "Always Trust".

##### Mozilla Firefox
* Run the Python server.
* Load https://127.0.0.1:4443.
* Click "Advanced"
* Click "Add Exception"
* At the bottom of the popup dialog, click "Confirm Security Exception"
