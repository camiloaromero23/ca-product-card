import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';

import { product2 } from '../data/products';

describe('ProductImage', () => {
  it('should render the component correctly with its custom image', () => {
    const wrapper = renderer.create(<ProductImage img="https://hello.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should show the component with its product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
