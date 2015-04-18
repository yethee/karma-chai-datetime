# karma-chai-datetime

[chai-datetime](https://github.com/gaslight/chai-datetime) plugin for [Karma](http://karma-runner.github.io)

## Installation

Install the plugin from npm:

```sh
$ npm install karma-chai-datetime --save-dev
```

Add `chai-datetime` before `chai` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    // frameworks to use
    frameworks: ['mocha', 'chai-datetime', 'chai']

    // ...
```

## License

The MIT License (MIT)
