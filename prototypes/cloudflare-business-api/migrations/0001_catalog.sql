-- Module 07: local D1 catalogue schema (fictional sample records only).
CREATE TABLE IF NOT EXISTS businesses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  business_id TEXT NOT NULL REFERENCES businesses(id),
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  UNIQUE (business_id, slug)
);
CREATE TABLE IF NOT EXISTS catalog_items (
  id TEXT PRIMARY KEY,
  business_id TEXT NOT NULL REFERENCES businesses(id),
  category_id TEXT REFERENCES categories(id),
  type TEXT NOT NULL CHECK (type IN ('service','product')),
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  price_minor INTEGER CHECK (price_minor IS NULL OR price_minor >= 0),
  currency TEXT NOT NULL DEFAULT 'PHP',
  price_label TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published','archived')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_catalog_business_status ON catalog_items(business_id, status);
CREATE INDEX IF NOT EXISTS idx_catalog_category ON catalog_items(category_id);
