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