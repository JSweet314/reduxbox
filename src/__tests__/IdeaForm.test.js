import React from 'react';
import {shallow, mount} from 'enzyme';
import IdeaForm from '../containers/IdeaForm';

describe('IdeaForm', () => {
  let ideaForm;

  beforeEach(() => {
    ideaForm = shallow(<IdeaForm />);
  });

  it('should render a form', () => {
    expect(ideaForm.find('form')).toBeDefined();
  });

  it('should contain an h1 tag with the text reduxbox', () => {
    const expected = <h1>reduxbox</h1>;
    
    expect(ideaForm.contains(expected)).toEqual(true);
  });

  it('should contain two input fields for title and body', () => {
    expect(ideaForm.find('input.title-input').length).toEqual(1);
    expect(ideaForm.find('input.body-input').length).toEqual(1);
  });

  it('should contain a save button', () => {
    expect(ideaForm.find('.saveBtn').length).toEqual(1);
  });
});
