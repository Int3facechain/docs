/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      label: "Int3face",
      type: "category",
      items: [
        "int3face/overview",
        {
          label: "Build and run",
          type: "category",
          items: [
            "int3face/build-and-run/bch_deploy",
            "int3face/build-and-run/brc20",
            "int3face/build-and-run/btc_deploy",
            "int3face/build-and-run/doge_deploy",
            "int3face/build-and-run/ltc_deploy",
          ],
        },
        {
          label: "Tokenomics",
          type: "category",
          items: [
            "int3face/tokenomics/overview",
          ],
        },
        {
          label: "Modules",
          type: "category",
          items: [
            {
              label: "Bridge",
              type: "category",
              items: [
              ],
            },
            {
              label: "IBC Rate Limit",
              type: "category",
              items: [
              ],
            },
            {
              label: "Cross-chain Rate Limit",
              type: "category",
              items: [
              ],
            },
            {
              label: "Quarantine",
              type: "category",
              items: [
              ],
            },
            {
              label: "Token Factory",
              type: "category",
              items: [
                "int3face/modules/tokenfactory/overview",
                "int3face/modules/tokenfactory/messages",
                "int3face/modules/tokenfactory/params",
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Comparison",
      type: "category",
      items: [
        "comparison/Int3face-THOR-Zeta",
        "comparison/tBTC-iBTC-nBTC",
        "comparison/tBTC-iBTC-nBTC-tech"
      ],
    },
    {
      label: "Deployments",
      type: "category",
      items: ["deployment/testnet"],
    },
    {
      label: "Demos",
      type: "category",
      items: [
        "demos/btc/btc_inbound_outbound",
        "demos/doge/doge_inbound_outbound"
      ],
    },
    {
      label: "ADR",
      type: "category",
      items: [
        "ADR/adr-001-grace-period",
        "ADR/adr-002-dynamic-committee",
        "ADR/adr-003-babylon",
        "ADR/adr-004-solana-integration",
        "ADR/adr-005-ordinals",
        "ADR/adr-006-metrics",
        "ADR/adr-007-e2e-tests",
        "ADR/adr-008-automatic-signer-list",
        "ADR/adr-009-blockchain-explorer",
        "ADR/adr-010-node-ungrades",
        "ADR/adr-011-superfluid-staking",
        "ADR/adr-012-ton-integration",
        "ADR/adr-013-rate-limiting"
      ],
    },
  ],
};

module.exports = sidebars;
