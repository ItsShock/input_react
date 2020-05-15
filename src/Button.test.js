import React from 'react';
import Button from './Button';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    label: 'Click me!',
    onBtnClick: jest.fn()
};

describe('Button tests', () => {
    it('Dodano poprawnie komponent przycisku', () => {
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.find('button').exists()).toBe(true);
    });
    it('Dodano parametr potrzebny do przekazania napisu w buttonie (label)', () => {
      const wrapper = render(<Button {...props} />);
      expect(wrapper.text()).toMatch(props.label);
    });
    it('Dodano parametr funkcji callback odpalanej na kliku w button (onBtnClick)', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<Button {...props} onBtnClick={onClick} />);
        wrapper.simulate('click')
        expect(onClick.mock.calls.length).toBe(1);
    });
  });