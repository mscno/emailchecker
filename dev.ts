#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import { initialize } from "./lib/server.ts";
import "$std/dotenv/load.ts";

const port = Number(Deno.env.get("PORT")) || 8080;

config.server = {
  ...config.server,
  port,
};

await initialize();

await dev(import.meta.url, "./main.ts", config);
