import { FreshContext } from "$fresh/server.ts";
import Logger from "https://deno.land/x/logger@v1.1.4/logger.ts";

const logger = new Logger();

export const handler = [
  loggermw,
  cors,
];

export async function cors(req: Request, ctx: FreshContext) {
  const origin = req.headers.get("Origin") || "*";
  const resp = await ctx.next();
  const headers = resp.headers;

  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  );
  headers.set(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS, GET, PUT, DELETE",
  );

  return resp;
}

export async function loggermw(req: Request, ctx: FreshContext) {
  const start = Date.now();
  const resp = await ctx.next();
  const ms = Date.now() - start;
  const ts = new Date().toISOString();
  logger.info(`${req.method} ${req.url} - ${ms}ms`);
  return resp;
}
