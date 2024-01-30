import { FreshContext } from "$fresh/server.ts";
import {
  isDisposableEmail,
  isFreeEmail,
  isValidEmailFormat,
} from "$lib/email_checker.ts";

export interface EmailResponse {
  valid_format: boolean;
  free: boolean;
  disposable: boolean;
}

export const handler = (req: Request, _ctx: FreshContext): Response => {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }
  const email = new URL(req.url).searchParams.get("email") || "";

  const disposable = isDisposableEmail(email);
  const free = isFreeEmail(email) || disposable;
  const valid_format = isValidEmailFormat(email);

  const response: EmailResponse = {
    valid_format: valid_format,
    free: free || disposable,
    disposable: disposable,
  };

  return new Response(JSON.stringify(response), {
    headers: { "content-type": "application/json" },
  });
};
