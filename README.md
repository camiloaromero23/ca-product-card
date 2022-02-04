# CA-Product-Card

This is a NPM deployment package test

### Camilo Romero

## Example

```jsx
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../.';

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
</ProductCard>;
```
