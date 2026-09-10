/**
 * Shared data model for the Guava product blog widgets.
 *
 * Every Guava product post (GuavaERP, GuavaHR, GuavaLearn, …) is driven by a
 * single `ProductDef` object. The generic widgets in this folder read from it,
 * so a new product post is a data file plus a `body` array — no new components.
 *
 * All competitor figures trace to published list pricing captured in
 * September 2026 and are cited as "list price, annual billing, before tax".
 * The Guava figure is always the server cost only — setup is a separate,
 * one-time fee.
 */

export type AiLevel = 'yes' | 'partial' | 'no';

export interface ProductPlan {
  key: string;
  name: string;
  /** USD per user per month at list price. 0 = not seat-priced. */
  perUserMo: number;
  /** Fixed yearly cost independent of seats (the Guava server + AI usage). */
  flatYr?: number;
  ai: AiLevel;
  aiNote?: string;
  ours?: boolean;
}

export interface CostLadderRow {
  vendor: string;
  tier: string;
  perUserMo: number | null;
  tenUsersYr: number | null;
  ai: AiLevel;
  aiNote?: string;
  vsOurs: string;
  ours?: boolean;
}

export interface MatrixRow {
  capability: string;
  /** Cheapest competitor tier or paid add-on that unlocks the same thing. */
  elsewhere: string;
  note?: string;
}

export interface MatrixGroup {
  group: string;
  rows: MatrixRow[];
}

export interface DiffDef {
  /** Key into ICON_MAP in ProductDifferentiators.tsx. */
  icon: string;
  title: string;
  /** Plain text; wrap emphasis in **double asterisks**. */
  body: string;
}

export type ArchKind = 'channel' | 'module' | 'core' | 'automation' | 'cloud';

export interface ArchNode {
  id: string;
  label: string;
  /** 0-indexed column (left to right). */
  col: number;
  kind: ArchKind;
}

export interface ArchEdge {
  from: string;
  to: string;
}

export interface ProductArchitecture {
  title: string;
  caption: string;
  /** Column headings, left to right. */
  layers: string[];
  nodes: ArchNode[];
  edges: ArchEdge[];
}

export interface ModuleDef {
  name: string;
  tag: string;
  blurb: string;
  points: string[];
}

export interface LifecycleStep {
  label: string;
  detail: string;
  metric?: string;
}

export interface ProductLifecycle {
  title: string;
  caption: string;
  steps: LifecycleStep[];
}

export interface ProductAiFeature {
  name: string;
  desc: string;
}

export interface ProductDef {
  key: string;
  /** e.g. "GuavaERP" */
  name: string;
  /** Hex accent used across every widget for this product. */
  accent: string;
  /** What it replaces, one line. */
  replaces: string;

  /** Rent-vs-own meter: the single competitor the meter counts against. */
  refName: string;
  refPerYear10: number;
  refFiveYear: number;

  /** Flat server cost, in whole dollars per month. */
  serverMo: number;
  /** Flat server + AI cost, per year — the Guava row in every chart. */
  guavaYr: number;

  plans: ProductPlan[];
  ladder: CostLadderRow[];
  matrix: MatrixGroup[];
  diffs: DiffDef[];
  architecture: ProductArchitecture;
  modules: ModuleDef[];
  lifecycle: ProductLifecycle;
  ai: ProductAiFeature[];
}
