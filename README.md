# Eccenca test helpers

Offers a simple way to create an environment for testing.  
Currently includes:  

- [jsdom](https://github.com/tmpvar/jsdom) with [localStorage](https://github.com/lmaccherone/node-localstorage) for all your DOM needs
- [React](https://facebook.github.io/react/) and [TestUtils](https://facebook.github.io/react/docs/test-utils.html) (exposed via mocha `this` context)
- Container for rendering your component that is create before each test and disposed afterwards (exposed via mocha context)
- [Should.js](https://github.com/shouldjs/should.js) for your assertions (exposed as default module export)

## Usage

- Install module into your project (and save as dev deps) using `npm install --save-dev ecc-test-helpers`
- Import the module in the beginning of your test suite using `import should from 'ecc-test-helpers'`
- Access React, TestUtils and test container using `this` context, like so:

```js
describe('Component suite', function() {
    describe('Component', function() {
        it('Should render ...', function() {
            const React = this.React;
            const TestUtils = this.TestUtils;

            // render
            const comp = React.render(
                <TestComp handleModelSelect={() => {}}/>,
                this.container
            );
            // ...
        });
    });
});
```
