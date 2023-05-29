# Beanbot

## Installation
You can install the beanbot via the bun commandline utilities.
To run the bot use the following steps:

>Install bun: <br>
>`curl -fsSL https://bun.sh/install | bash`

Eventually you will need to copy the config
so just `cp .env.example .env` and fill in the values.

Now you can install the project via git clone.
After that you should be able to run bun from your shell.
The following commands will install the bot and run it.

- `bun test`

## Development
Every time a new env var is added, please consider adding
it to the config interface, too.

## Deployment
First build an executable with bun:
> bun build ./main.ts --compile --outfile beanbot

Then you can run the executable with the following command:
> ./beanbot
