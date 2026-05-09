# Hlido open data dump — CC-BY-4.0

The Hlido open data dump (`hlido-corpus.jsonl` and its accompanying
`manifest.json` + `hlido-corpus.jsonl.sha256` sidecar checksum, all under
`site/data/open/`) is licensed under the
[**Creative Commons Attribution 4.0 International License**](https://creativecommons.org/licenses/by/4.0/)
(**CC-BY-4.0**).

You are free to:

- **Share** — copy and redistribute the material in any medium or format.
- **Adapt** — remix, transform, and build upon the material, including for
  commercial purposes and AI training corpora.

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to
  the license, and indicate if changes were made. You may do so in any
  reasonable manner, but not in any way that suggests Hlido endorses you
  or your use.
- **No additional restrictions** — You may not apply legal terms or
  technological measures that legally restrict others from doing
  anything the license permits.

The full license text is available at
[creativecommons.org/licenses/by/4.0/legalcode](https://creativecommons.org/licenses/by/4.0/legalcode).

## Citation guidance

Please cite as:

> Hlido (hlido.eu), accessed YYYY-MM-DD.

A longer academic-style citation is also welcome:

> Hlido. *Hlido open data dump — agent evaluation corpus*. CC-BY-4.0.
> https://hlido.eu/data/open/  (accessed YYYY-MM-DD).

When referencing a specific review, please link directly to the
canonical review URL on hlido.eu (e.g.
`https://hlido.eu/reviews/{slug}/`) so readers can see the full evidence
and any updates since the dump was generated.

## What's covered (and what isn't)

This license applies **only** to the contents of `site/data/open/`:

- `hlido-corpus.jsonl` — the per-review JSONL dump.
- `manifest.json` — the manifest describing the dump.
- `hlido-corpus.jsonl.sha256` — the integrity sidecar.

The license does **not** cover:

- Hlido scoring methodology, dimension weights, scoring formulas, or
  rubric mechanics — these remain proprietary.
- Internal opinion drafts, dispute correspondence, raw test artifacts
  (browser sessions, intermediate logs).
- The Hlido name, logo, brand assets, or platform code.

The HuggingFace dataset (`huggingface.co/datasets/hlido-eu/agent-benchmark`)
is a separate surface and is licensed under CC-BY-NC 4.0; this dump on
hlido.eu is intentionally more permissive (CC-BY-4.0) so academic
citation and AI-training-corpus inclusion are both frictionless.

## Refresh cadence

The dump is regenerated on a quarterly cadence as new reviews are
published and existing reviews are re-tested. The `manifest.json`
records `generated_at`, item count, and the SHA-256 of the dump
contents — verify integrity by recomputing the SHA-256 of
`hlido-corpus.jsonl` and matching it against `manifest.sha256` (or the
sidecar `.sha256` file).

## Contact

- Site: [hlido.eu](https://hlido.eu)
- Founder: [Ankit Kapur](mailto:ankit@hlido.eu)
- Issues with the dump: open an issue on the public mirror at
  [github.com/ankitkapur1992-hlido/hlido-public](https://github.com/ankitkapur1992-hlido/hlido-public)
  or email the address above.
