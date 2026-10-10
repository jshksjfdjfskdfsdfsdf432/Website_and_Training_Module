import test from "node:test";
import assert from "node:assert/strict";
import { getPublishedCatalog } from "./src/catalog.js";

test("catalog requires configured database", async () => {
  assert.deepEqual(await getPublishedCatalog(undefined), { error: "Database not configured", status: 503 });
});

test("catalog binds business and published status", async () => {
  let sql = "", params = [];
  const db = { prepare(query) {
    sql = query;
    return { bind(...values) {
      params = values;
      return { all: async () => ({ results: [{ id:"1", type:"service", name:"Sample", description:"", price_minor:null, currency:"PHP", price_label:"Request quote" }] }) };
    } };
  } };
  const result = await getPublishedCatalog(db);
  assert.match(sql, /status = \?/);
  assert.deepEqual(params, ["demo-business","published"]);
  assert.equal(result.items[0].priceLabel, "Request quote");
  assert.equal(result.demo, true);
});
