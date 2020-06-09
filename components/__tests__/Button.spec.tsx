import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../Button';

test('Button', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
