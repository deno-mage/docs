# Contributing

## Repository

The repository contains a Mage Server application.

| Directory                  | Description                                     |
| -------------------------- | ----------------------------------------------- |
| [`.git-hooks`](.git-hooks) | [pre-commit](https://pre-commit.com/) git hooks |
| [`.github`](.github)       | GitHub Actions workflows                        |
| [`.vscode`](.vscode)       | Common VSCode settings                          |
| [`src`](src)               | Source code                                     |

## Development

### Requirements

- [Deno](https://deno.land/)
- [Pre-commit](https://pre-commit.com/)

### Setup

1. Clone the repository
2. Install the pre-commit hooks by running `pre-commit install`
3. Install dependencies by running `deno install`

### Testing

### Running development server

When making changes to the server in the [src](./src) directory, it is
recommended to run the server locally to test the changes.

The styles are powered by [tailwindcss](https://tailwindcss.com/) and are build
using the tailwind CLI. To build the styles run the following command:

```sh
deno task css

# or in watch mode:
deno task css --watch
```

Run the server with the following command:

```sh
deno task dev
```

The server will run on `http://0.0.0.0:8000` or the next available port. It will
automatically restart on changes.

### Committing changes

**Ensure you have the pre-commit hooks installed.** These run in CI on the
server so you won't be able to merge if they aren't run but they're extremely
fast and will save you time.

When committing changes, loosely follow the
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification. Pull request titles are linted to be conventional commit format
and are then used as the commit message upon squash merging.

```sh
git commit -m "feat: add new feature"
git commit -m "fix: resolve issue"
git commit -m "docs: update documentation"
...
```

### Deploying

The site is deployed using GitHub Actions to Deno Deploy.

Pull requests are automatically deployed and the URL they are available on will
be printed in the PR logs.

The main branch is automatically deployed to the production URL.
