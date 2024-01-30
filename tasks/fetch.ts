const allowListUrl =
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/master/allowlist.conf";

const disposableListUrl =
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/master/disposable_email_blocklist.conf";

const freeUrl =
  "https://raw.githubusercontent.com/ihmpavel/free-email-domains-list/master/data/data.txt";

async function fetcher(url: string, fileName: string) {
  const response = await fetch(url);
  const data = await response.text();
  await Deno.writeTextFile(fileName, data);
}

async function fetchAllowList() {
  await fetcher(allowListUrl, "./data/allowlist.txt");
}

async function fetchDisposableList() {
  await fetcher(disposableListUrl, "./data/disposable.txt");
}

async function fetchFreeList() {
  await fetcher(freeUrl, "./data/free.txt");
}

await fetchAllowList();
await fetchDisposableList();
await fetchFreeList();
