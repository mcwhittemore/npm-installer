# NPM-INSTALL

A simple module to let your module install modules like it was npm.

## Usage

```
var npmInstall = require("npm-install");
npmInstall("./test/test-valid/", function(err, data) {
	console.log(data);
});
```

## Change Log

### 0.0.0

* First working copy. Does not display any children even if they are installed.