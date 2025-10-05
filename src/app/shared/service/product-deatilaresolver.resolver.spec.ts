import { TestBed } from '@angular/core/testing';

import { ProductDeatilaresolverResolver } from './product-deatilaresolver.resolver';

describe('ProductDeatilaresolverResolver', () => {
  let resolver: ProductDeatilaresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductDeatilaresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
