# Eccenca test helpers

Offers a simple way to create an environment for testing.  
Currently includes:  
- JSDOM with localStorage for all your DOM needs
- React and TestUtils (exposed via mocha context)
- Container for rendering your component that is create before each test and disposed afterwards (exposed via mocha context)
- Should.js for your assertions (exposed as default module export)

It is recommended to import this file in the beginning of your test, e.g.:  
`import should from 'ecc-test-helpers'`
