import type { ComponentType } from 'react';
import type { BlogEmbed } from '@/data/blog';
import { CrmCostCalculator } from './crm/CrmCostCalculator';
import { CrmDifferentiators } from './crm/CrmDifferentiators';
import { CrmFeatureMatrix } from './crm/CrmFeatureMatrix';
import { CrmKanbanDemo } from './crm/CrmKanbanDemo';
import { CrmRentVsOwn } from './crm/CrmRentVsOwn';
import { ProductArchitecture } from './product/ProductArchitecture';
import { ProductCostCalculator } from './product/ProductCostCalculator';
import { ProductDifferentiators } from './product/ProductDifferentiators';
import { ProductFeatureMatrix } from './product/ProductFeatureMatrix';
import { ProductLifecycle } from './product/ProductLifecycle';
import { ProductModuleExplorer } from './product/ProductModuleExplorer';
import { ProductRentVsOwn } from './product/ProductRentVsOwn';

/**
 * Maps a `{ type: 'embed', component }` blog block to the interactive widget
 * that renders it. `BlogPost.tsx` (a client component) looks up this table and
 * passes the block's optional `product` key through to the widget.
 */
export const BLOG_EMBEDS: Record<BlogEmbed, ComponentType<{ product?: string }>> = {
  crmCostCalculator: CrmCostCalculator,
  crmRentVsOwn: CrmRentVsOwn,
  crmFeatureMatrix: CrmFeatureMatrix,
  crmKanbanDemo: CrmKanbanDemo,
  crmDifferentiators: CrmDifferentiators,
  productCostCalculator: ProductCostCalculator,
  productRentVsOwn: ProductRentVsOwn,
  productFeatureMatrix: ProductFeatureMatrix,
  productDifferentiators: ProductDifferentiators,
  productArchitecture: ProductArchitecture,
  productModuleExplorer: ProductModuleExplorer,
  productLifecycle: ProductLifecycle,
};
