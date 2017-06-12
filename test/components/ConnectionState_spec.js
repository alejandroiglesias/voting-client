import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';
import {ConnectionState} from '../../src/components/ConnectionState';

describe('ConnectionState', () => {

  it('is not visible when connected', () => {
    const component = renderIntoDocument(<ConnectionState connected={true} />);
    const div = scryRenderedDOMComponentsWithTag(component, 'div');
    expect(div[0].style.display).to.equal('none');
  });

  it('is visible when not connected', () => {
    const component = renderIntoDocument(<ConnectionState connected={false} />);
    const div = scryRenderedDOMComponentsWithTag(component, 'div');
    expect(div[0].style.display).to.equal('block');
  });

  it('contains connection state message', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={false} state="Fail" />
    );
    const div = scryRenderedDOMComponentsWithTag(component, 'div');
    expect(div[0].textContent).to.contain('Fail');
  });

});
