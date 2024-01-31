# emailchecker

A simple Deno project to check if an email address is valid and whether it is a
disposable email address.

The project is a simple Deno server that accepts a GET request with a parameter
`email` containing an email address. It then checks the email address against a
list of disposable email addresses and returns a JSON response with the result.

The emailchecker site and API is available at https://emailchecker.deno.dev

### Example request

```
curl https://emailchecker.deno.dev/api/check?email=example@example
```

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project locally:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Testing

You can run the tests with:

```
deno test -A
```

### Refreshing the email lists

The email lists are stored in the `data` directory. To refresh them, run:

```
deno task fetch
```
