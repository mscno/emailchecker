/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

import { initialize } from "./lib/server.ts";

const port = Number(Deno.env.get("PORT")) || 8080;

config.server = {
  ...config.server,
  port,
};

await initialize();

await start(manifest, config);
