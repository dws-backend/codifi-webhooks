import { EntityId, Repository, Schema } from "redis-om";
import { getRedisOMConnection, redis } from "./redisOM";

/* const eventSchema = new Schema("event", {
  id: { type: "number" },
  created_at: { type: "string" },
  updated_at: { type: "string" },
  account_id: { type: "number" },
  group: { type: "text" },
  event: { type: "text" },
  event_id: { type: "string" },
  trade_id: { type: "number" },
  ticket: { type: "number" },
  type: { type: "string" },
  symbol: { type: "string" },
  lots: { type: "number" },
  open_time: { type: "string" },
  open_price: { type: "number" },
  stop_loss: { type: "number" },
  take_profit: { type: "number" },
  close_time: { type: "string" },
  close_price: { type: "number" },
  commission: { type: "number" },
  swap: { type: "number" },
  profit: { type: "number" },
  balance: { type: "number" },
  credit: { type: "number" },
  equity: { type: "number" },
  comment: { type: "string" },
  magic: { type: "number" },
  digits: { type: "number" },
  tick_value: { type: "number" },
  tick_size: { type: "number" },
});
 */
const eventSchema = new Schema("event", {});

export const createEvent = async (data) => {
  await getRedisOMConnection();
  const repository = new Repository(eventSchema, redis);
  const event = await repository.save(data);
  return event[EntityId];
};

/**
export const createProductIndex = async () => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  await repository.createIndex();
};

export const quickSearchSuggestion = async (q) => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  const offset = 0;
  const count = 10;
  const query = removeDashes(q);
  const productsSuggestions = await repository
    .search()
    .where("quickSearch")
    .matches(query)
    .return.page(offset, count);
  return productsSuggestions;
};

export const searchProducts = async (q) => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  const offset = 0;
  const count = 12;
  const query = removeDashes(q);
  const products = await repository
    .search()
    .where("quickSearch")
    .matches(query)
    .or("description")
    .matches(query)
    .return.page(offset, count);
  return products;
};

export const getProductId = async (sku, wholesaler) => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  const productId = await repository
    .search()
    .where("sku")
    .eq(sku)
    .and("wholesaler")
    .eq(wholesaler)
    .return.firstId();
  return productId;
};

export const updateProductPriceBySkuMpn = async (data) => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  const product = await repository.fetch(data.entityId);
  product.msrp = data.msrp;
  product.msrpCurrency = data.msrpCurrency;
  product.unitPrice = data.unitPrice;
  product.unitPriceCurrency = data.unitPriceCurrency;
  const updatedProduct = await repository.save(product);
  return updatedProduct;
};

export const updateProductImgBySkuMpn = async (data) => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  const product = await repository.fetch(data.entityId);
  product.img = [data.img];
  const updatedProduct = await repository.save(product);
  return updatedProduct;
};

export const productExistsInDb = async (sku, mpn) => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  const products = await repository
    .search()
    .where("sku")
    .eq(sku)
    .or("mpn")
    .eq(mpn)
    .return.all();
  if (products.length >= 1) return true;
  return false;
};

export const getProductsByWholesaler = async (wholesaler) => {
  await getRedisOMConnection();
  const repository = redis.fetchRepository(eventSchema);
  const products = await repository
    .search()
    .where("wholesaler")
    .eq(wholesaler)
    .return.all();
  return products;
};
 */
