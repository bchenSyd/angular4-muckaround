# build
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