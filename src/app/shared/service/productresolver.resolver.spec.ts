import { TestBed } from '@angular/core/testing';

import { ProductresolverResolver } from './productresolver.resolver';

describe('ProductresolverResolver', () => {
  let resolver: ProductresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
