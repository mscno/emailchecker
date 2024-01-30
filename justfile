set dotenv-load

check:
    deno fmt
    deno task check

dev:
    deno task start

deploy:
    deployctl deploy --project=full-zebra-44 --allow-net --allow-env --allow-read --prod main.ts

test:
    deno test --allow-read --allow-env --allow-net