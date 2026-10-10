-- Fictional demo only. Do not represent this as a real client catalogue.
INSERT OR IGNORE INTO businesses(id,name,slug) VALUES ('demo-business','Demo Business','demo-business');
INSERT OR IGNORE INTO categories(id,business_id,name,slug) VALUES ('demo-category','demo-business','Consultations','consultations');
INSERT OR IGNORE INTO catalog_items(id,business_id,category_id,type,name,description,price_minor,currency,price_label,status)
VALUES ('demo-service','demo-business','demo-category','service','Example consultation','Demonstration only',NULL,'PHP','Request a quote','published');
