import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      key={product.id}
      product={product}
      className="bg-dark text-white"
      initialValues={{
        count: 6,
        maxCount: 10,
      }}
    >
      {({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
