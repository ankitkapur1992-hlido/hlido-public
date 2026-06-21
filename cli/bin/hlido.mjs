#!/usr/bin/env node
// hlido — CLI entrypoint. Routes argv to command handlers.
// Zero runtime dependencies. Node 18+.

import {
  cmdCheck,
  cmdSearch,
  cmdCompare,
  cmdTier,
  cmdRecommend,
} from "../src/commands.mjs";
import { renderHelp } from "../src/render.mjs";

const VERSION = "0.2.0";

function parseArgs(argv) {
  const positional = [];
  const flags = { json: false, help: false, version: false, noColor: false };
  // Wave 4.0 — `hlido recommend` reads --category and --k.
  const opts = { category: null, k: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--json" || arg === "-j") flags.json = true;
    else if (arg === "--help" || arg === "-h") flags.help = true;
    else if (arg === "--version" || arg === "-v") flags.version = true;
    else if (arg === "--no-color") flags.noColor = true;
    else if (arg === "--category" && i + 1 < argv.length) {
      opts.category = argv[++i];
    } else if (arg.startsWith("--category=")) {
      opts.category = arg.slice("--category=".length);
    } else if (arg === "--k" && i + 1 < argv.length) {
      const n = parseInt(argv[++i], 10);
      if (Number.isFinite(n)) opts.k = n;
    } else if (arg.startsWith("--k=")) {
      const n = parseInt(arg.slice("--k=".length), 10);
      if (Number.isFinite(n)) opts.k = n;
    } else {
      positional.push(arg);
    }
  }
  return { positional, flags, opts };
}

async function main() {
  const argv = process.argv.slice(2);
  const { positional, flags, opts } = parseArgs(argv);

  if (flags.noColor) process.env.NO_COLOR = "1";

  if (flags.version) {
    process.stdout.write(`hlido ${VERSION}\n`);
    return 0;
  }

  if (flags.help || positional.length === 0) {
    process.stdout.write(renderHelp());
    return 0;
  }

  const [cmd, ...rest] = positional;

  try {
    let result;
    switch (cmd) {
      case "check":
        result = await cmdCheck({ slug: rest[0], json: flags.json });
        break;
      case "search":
        // Allow multi-word queries: `hlido search voice agent` → "voice agent".
        result = await cmdSearch({ query: rest.join(" "), json: flags.json });
        break;
      case "compare":
        result = await cmdCompare({ slug1: rest[0], slug2: rest[1], json: flags.json });
        break;
      case "tier":
        result = await cmdTier({ tier: rest[0], json: flags.json });
        break;
      case "recommend":
        // Multi-word need: join all positional args after the subcommand.
        result = await cmdRecommend({
          need: rest.join(" "),
          category: opts.category,
          k: opts.k,
          json: flags.json,
        });
        break;
      case "help":
        process.stdout.write(renderHelp());
        return 0;
      default:
        process.stderr.write(`hlido: unknown command "${cmd}". Try \`hlido help\`.\n`);
        return 2;
    }
    process.stdout.write(result.output + (result.output.endsWith("\n") ? "" : "\n"));
    return result.exitCode || 0;
  } catch (err) {
    if (flags.json) {
      process.stdout.write(JSON.stringify({ ok: false, error: String(err.message || err) }, null, 2) + "\n");
    } else {
      process.stderr.write(`hlido: ${err.message || err}\n`);
    }
    return 1;
  }
}

// We set process.exitCode and let Node natural-exit instead of calling
// process.exit(). On Node 24 + win32, calling process.exit() while fetch /
// undici handles are still being torn down trips an assertion in libuv's
// async.c. Letting the event loop drain naturally avoids it without losing
// the exit code.
main().then(
  (code) => {
    if (code) process.exitCode = code;
  },
  (err) => {
    try {
      process.stderr.write(`hlido: fatal: ${err?.stack || err}\n`);
    } catch {}
    process.exitCode = 1;
  },
);
