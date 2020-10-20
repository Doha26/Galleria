import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import GalleryImageItem from '~/modules/Home/components/GalleryList/GalleryImage';

describe('Gallery Image Component', () => {
  it('should render without issues', () => {
    const imageItem = {
      height: 230,
      author: 'Sample author',
      id: 1,
      url: 'https://i.imgur.com/0y8Ftya.jpg',
      download_url: 'https://i.imgur.com/0y8Ftya.jpg',
    };
    // @ts-ignore
    const component = shallow(<GalleryImageItem onPress={() => null} imageItem={imageItem} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
