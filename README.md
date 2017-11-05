# build
> https://github.com/angular/angular-cli/wiki#bundling

All builds make use of bundling, and using the `--prod flag` in `ng build --prod` or `ng serve --prod` will also make use of `uglifying` and `tree-shaking` functionality.

```bash
$ ng serve --port 3000  --prod
****************************************************************************************
This is a simple server for use in testing or debugging Angular applications locally.
It hasn't been reviewed for security issues.

DON'T USE IT FOR PRODUCTION USE!
****************************************************************************************

 find src/**/**  -name *.spec.ts | xargs rm -rf
```

## changeDetectionStrategy.onPush
```javascript
    // changes to @input will only cause doCheck return true if they
    // are new instances (shallowEqual false)
    @Input() user;
    @Input() systemNotification;
    // changes to ownProp will always cause doCheck return false;
    ownProp = 'init';
```

## protractor
run `e2e` tests using `protractor`
```bash
webpack: Compiled successfully.
# webdriver-manager udpate
[14:51:03] I/update - chromedriver: file exists D:\__work\angular-muckaround\node_modules\webdriver-manager\selenium\chromedriver_2.33.zip
[14:51:03] I/update - chromedriver: unzipping chromedriver_2.33.zip
[14:51:03] I/update - chromedriver: chromedriver_2.33.exe up to date
[14:51:03] I/launcher - Running 1 instances of WebDriver
[14:51:03] I/direct - Using ChromeDriver directly...
# webdriver-manager start
DevTools listening on ws://127.0.0.1:12206/devtools/browser/a65319ed-c43f-46a1-b13c-c6c2a29c8df9
# now Jasmine connects to selenium host
Jasmine started
[14:51:08] W/element - more than one element found for locator By(css selector, app-root h1) - the first result will be used

  angular-muckaround App
    √ should display welcome message

Executed 1 of 1 spec SUCCESS in 1 sec.
[14:51:08] I/launcher - 0 instance(s) of WebDriver still running
[14:51:08] I/launcher - chrome #01 passed
Done in 19.92s.
```

How it works?
```bash
#################################################
$ yarn webdriver-manager version
#################################################
yarn webdriver-manager v1.0.2
$ "D:\__work\angular-muckaround\node_modules\.bin\webdriver-manager" "version"
webdriver-manager: using local installed version 12.0.6
[14:53:38] I/version - webdriver-manager 12.0.6
Done in 0.70s.

#################################################
$ yarn webdriver-manager update
#################################################
yarn webdriver-manager v1.0.2
$ "D:\__work\angular-muckaround\node_modules\.bin\webdriver-manager" "update"
webdriver-manager: using local installed version 12.0.6
[14:56:39] I/update - chromedriver: file exists D:\__work\angular-muckaround\node_modules\webdriver-manager\selenium\chromedriver_2.33.zip
[14:56:39] I/update - chromedriver: unzipping chromedriver_2.33.zip
[14:56:39] I/update - chromedriver: chromedriver_2.33.exe up to date
[14:57:31] I/update - geckodriver: unzipping geckodriver-v0.19.1.zip
Done in 53.64s.

#################################################
$ yarn webdriver-manager start
#################################################
yarn webdriver-manager v1.0.2
$ "D:\__work\angular-muckaround\node_modules\.bin\webdriver-manager" "start"
webdriver-manager: using local installed version 12.0.6
[14:58:19] I/start - java -Dwebdriver.chrome.driver=D:\__work\angular-muckaround\node_modules\webdriver-manager\selenium\chromedriver_2.33.exe -Dwebdriver.gecko.driver=D:\__work\angular-m
uckaround\node_modules\webdriver-manager\selenium\geckodriver-v0.19.1.exe -jar D:\__work\angular-muckaround\node_modules\webdriver-manager\selenium\selenium-server-standalone-3.7.0.jar -p
ort 4444
[14:58:19] I/start - seleniumProcess.pid: 32880
14:58:25.659 INFO - Selenium build info: version: '3.7.0', revision: '2321c73'
14:58:25.674 INFO - Launching a standalone Selenium Server
2017-11-05 14:58:25.799:INFO::main: Logging initialized @4791ms to org.seleniumhq.jetty9.util.log.StdErrLog
14:58:25.959 INFO - Driver class not found: com.opera.core.systems.OperaDriver
14:58:26.230 INFO - Driver provider class org.openqa.selenium.safari.SafariDriver registration is skipped:
 registration capabilities Capabilities {browserName: safari, platform: MAC, version: } does not match the current platform VISTA
14:58:26.367 INFO - Using the passthrough mode handler
2017-11-05 14:58:26.438:INFO:osjs.Server:main: jetty-9.4.5.v20170502
2017-11-05 14:58:26.527:WARN:osjs.SecurityHandler:main: ServletContext@o.s.j.s.ServletContextHandler@4232c52b{/,null,STARTING} has uncovered http methods for path: /
2017-11-05 14:58:26.536:INFO:osjsh.ContextHandler:main: Started o.s.j.s.ServletContextHandler@4232c52b{/,null,AVAILABLE}
2017-11-05 14:58:27.472:INFO:osjs.AbstractConnector:main: Started ServerConnector@146983a0{HTTP/1.1,[http/1.1]}'{0.0.0.0:4444}'
2017-11-05 14:58:27.487:INFO:osjs.Server:main: Started @6470ms
14:58:27.488 INFO - Selenium Server is up and running
```

# rename `child-component.component.*` to `child.component.*`
> `%/*` and `#.*` are bash string manipulation, see http://tldp.org/LDP/abs/html/string-manipulation.html
  * ${string#substring}  strip off shortest match; from front;
  * ${string##substring} strip off longest match; from front;
  * ${string%substring}  strip off shortest match; from back;
  * in `${f%/*}`, `/` is also stripped off, that's why you have to add it back
  
```bash
$find ./**/** -name child-c* |xargs -n1 | while read -r f ;do echo "$f =>" "${f#*ent.}"; done
# shortest match of `*ent.` is `./src/app/child/child-component.`, so that's stripped off;
# `component.html` is left
./src/app/child/child-component.component.html => component.html
./src/app/child/child-component.component.less => component.less
./src/app/child/child-component.component.ts => component.ts
# now rename 

$find ./**/** -name child-c* |xargs -n1 | \
while read -r f ; do echo mv "$f" "${f%/*}/child.${f#*ent.}"; \
done

mv ./src/app/child/child-component.component.html ./src/app/child/child.component.html
mv ./src/app/child/child-component.component.less ./src/app/child/child.component.less
mv ./src/app/child/child-component.component.ts ./src/app/child/child.component.ts
```
another example:

```bash
# step 1: change folder name
mv src/page/createTraveller src/page/registerDriver
# step 2: change file names
$ for f in src/pages/regDriver/*;  do echo mv "$f" "${f%/*}/registerDriver.${f#*.}";done
mv src/pages/regDriver/createTraveller.js   src/pages/regDriver/registerDriver.js
mv src/pages/regDriver/createTraveller.json src/pages/regDriver/registerDriver.json
mv src/pages/regDriver/createTraveller.wxml src/pages/regDriver/registerDriver.wxml
mv src/pages/regDriver/createTraveller.wxss src/pages/regDriver/registerDriver.wxss
```
