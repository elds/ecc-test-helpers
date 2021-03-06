// imports
import should from '../index';

import Alert from './alert.js';

const noop = () => {
}

describe('Gui Elements Suite', function() {
    describe('Alert', function() {
        it('should render', function() {
            const React = this.React;
            const TestUtils = this.TestUtils;

            // render
            const comp = TestUtils.renderIntoDocument(
                <Alert border={true} vertSpacing={true} handlerDismiss={noop}>
                    <p>This is a</p>
                    <p>untyped message.</p>
                </Alert>
            );

            // check that div structure is rendered correctly
            const divs = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'div');
            should(divs.length).equal(3);
            // check that children rendered correctly
            const p = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'p');
            should(p.length).equal(2);
            // check that dismiss button is rendered correctly
            const button = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'button');
            should(button.length).equal(1);
            const i = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'i');
            should(i.length).equal(1);
        });
    });
});
