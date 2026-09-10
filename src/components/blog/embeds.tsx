import type { ComponentType } from 'react';
import type { BlogEmbed } from '@/data/blog';
import { CrmCostCalculator } from './crm/CrmCostCalculator';
import { CrmDifferentiators } from './crm/CrmDifferentiators';
import { CrmFeatureMatrix } from './crm/CrmFeatureMatrix';
import { CrmKanbanDemo } from './crm/CrmKanbanDemo';
import { CrmRentVsOwn } from './crm/CrmRentVsOwn';

/**
 * Maps a `{ type: 'embed', component }` blog block to the interactive widget
 * that renders it. `BlogPost.tsx` (a client component) looks up this table.
 */
export const BLOG_EMBEDS: Record<BlogEmbed, ComponentType> = {
  crmCostCalculator: CrmCostCalculator,
  crmRentVsOwn: CrmRentVsOwn,
  crmFeatureMatrix: CrmFeatureMatrix,
  crmKanbanDemo: CrmKanbanDemo,
  crmDifferentiators: CrmDifferentiators,
};
