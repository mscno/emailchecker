let freeDomains: Set<string> = new Set();
let disposableDomains: Set<string> = new Set();
let allowListDomains: Set<string> = new Set();

export async function loadFreeDomains() {
  const text = await Deno.readTextFile("./data/free.txt");
  freeDomains = new Set(text.split("\n"));
  console.log(`Loaded free domains: ${freeDomains.size}`);
}

export async function loadDisposableDomains() {
  const text = await Deno.readTextFile("./data/disposable.txt");
  disposableDomains = new Set(text.split("\n"));
  console.log(`Loaded disposable domains: ${disposableDomains.size}`);
}

export async function loadAllowListDomains() {
  const text = await Deno.readTextFile("./data/allowlist.txt");
  allowListDomains = new Set(text.split("\n"));
  console.log(`Loaded allowlist domains: ${allowListDomains.size}`);
}

function extractDomain(email: string): string {
  return email.substring(email.lastIndexOf("@") + 1);
}
export function isValidEmailFormat(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isFreeEmail(email: string): boolean {
  const domain = extractDomain(email);
  return freeDomains.has(domain);
}

export function isDisposableEmail(email: string): boolean {
  const domain = extractDomain(email);
  return disposableDomains.has(domain) && !allowListDomains.has(domain);
}
