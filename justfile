set dotenv-load

just: fmt check test

fmt:
    deno fmt

check:
    deno task check

dev:
    deno task start

deploy:
    deployctl deploy --project=full-zebra-44 --allow-net --allow-env --allow-read --prod main.ts

test:
    deno test --allow-read --allow-env --allow-net