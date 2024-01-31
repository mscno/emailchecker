const allowListUrls = [
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/master/allowlist.conf",
];

const disposableListUrls = [
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/master/disposable_email_blocklist.conf",
  "https://raw.githubusercontent.com/disposable/disposable-email-domains/master/domains.txt",
  "https://raw.githubusercontent.com/unkn0w/disposable-email-domain-list/main/domains.txt",
];

const freeUrls = [
  "https://raw.githubusercontent.com/ihmpavel/free-email-domains-list/master/data/data.txt",
];

async function fetcher(urls: string[], fileName: string) {
  let data = "";

  for (const url of urls) {
    const response = await fetch(url);
    data += await response.text() + "\n";
  }

  const uniqueData = [
    ...new Set(data.split("\n").filter((item: string) => item != "")),
  ];

  console.log(`Writing ${uniqueData.length} items to ${fileName}`);

  await Deno.writeTextFile(fileName, uniqueData.join("\n"));
}

async function fetchAllowList() {
  await fetcher(allowListUrls, "./data/allowlist.txt");
}

async function fetchDisposableList() {
  await fetcher(disposableListUrls, "./data/disposable.txt");
}

async function fetchFreeList() {
  await fetcher(freeUrls, "./data/free.txt");
}

await fetchAllowList();
await fetchDisposableList();
await fetchFreeList();
