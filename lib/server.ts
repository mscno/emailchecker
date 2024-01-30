import {
  loadAllowListDomains,
  loadDisposableDomains,
  loadFreeDomains,
} from "./email_checker.ts";

export async function initialize() {
  await Promise.all([
    loadFreeDomains(),
    loadDisposableDomains(),
    loadAllowListDomains(),
  ]);
}
