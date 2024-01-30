import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";
import { assertEquals } from "$std/testing/asserts.ts";
import { initialize } from "$lib/server.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("HTTP assert test.", async (t) => {
  const handler = await createHandler(manifest, config);
  await initialize();
  await t.step("#1 GET /", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
    assertEquals(resp.status, 200);
  });

  await t.step("#2 POST /api/check", async () => {
    const req = new Request("http://127.0.0.1/api/check", {
      method: "POST",
    });
    const resp = await handler(req, CONN_INFO);
    assertEquals(resp.status, 405);
  });

  await t.step("#3 GET /api/check empty", async () => {
    const resp = await handler(
      new Request("http://127.0.0.1/api/check"),
      CONN_INFO,
    );
    const body = await resp.json();
    assertEquals(resp.status, 200);
    assertEquals(body, {
      valid_format: false,
      free: false,
      disposable: false,
    });
  });

  await t.step("#4 GET /api/check free", async () => {
    const resp = await handler(
      new Request("http://127.0.0.1/api/check?email=user@gmail.com"),
      CONN_INFO,
    );
    const body = await resp.json();
    assertEquals(resp.status, 200);
    assertEquals(body, {
      valid_format: true,
      free: true,
      disposable: false,
    });
  });

  await t.step("#5 GET /api/check disposable", async () => {
    const resp = await handler(
      new Request("http://127.0.0.1/api/check?email=user@0-mail.com"),
      CONN_INFO,
    );
    const body = await resp.json();
    assertEquals(resp.status, 200);
    assertEquals(body, {
      valid_format: true,
      free: true,
      disposable: true,
    });
  });
});
