export async function getPublishedCatalog(db) {
  if (!db || typeof db.prepare !== "function") return { error: "Database not configured", status: 503 };
  const statement = db.prepare(
    "SELECT id, type, name, description, price_minor, currency, price_label FROM catalog_items WHERE business_id = ? AND status = ? ORDER BY name LIMIT 100"
  );
  const result = await statement.bind("demo-business", "published").all();
  return { items: (result.results ?? []).map((row) => ({
    id: row.id,
    type: row.type,
    name: row.name,
    description: row.description,
    priceMinor: row.price_minor,
    currency: row.currency,
    priceLabel: row.price_label
  })), demo: true };
}
