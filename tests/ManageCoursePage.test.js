import React from 'react';
import renderer from 'react-test-renderer';

import ManageCoursePage from '..\src\component\ManageCoursePage.js';

describe('<ManageCoursePage />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<ManageCoursePage />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });