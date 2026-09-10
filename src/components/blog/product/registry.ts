import { erp } from './data/erp';
import { framework } from './data/framework';
import { hr } from './data/hr';
import { learn } from './data/learn';
import { insights } from './data/insights';
import { desk } from './data/desk';
import { builder } from './data/builder';
import { lend } from './data/lend';
import { plan } from './data/plan';
import type { ProductDef } from './types';

/**
 * Every Guava product a blog post can render widgets for. The `product` string
 * on an `{ type: 'embed' }` block is a key into this map.
 */
export const PRODUCTS: Record<string, ProductDef> = {
  erp,
  framework,
  hr,
  learn,
  insights,
  desk,
  builder,
  lend,
  plan,
};

export function getProduct(key?: string): ProductDef | undefined {
  return key ? PRODUCTS[key] : undefined;
}
