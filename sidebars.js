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
      label: "Introduction",
      type: "category",
      items: [
        "index",
        "introduction/key-concepts",
      ],
    },
    {
      label: "Connected Chains",
      type: "category",
      items: [
        "connected-chains/utxos",
        "connected-chains/solana",
        "connected-chains/ton",
        "connected-chains/xrpl",
      ],
    },
    {
      label: "Int3face Protocol",
      type: "category",
      items: [
        "int3face/int3face-overview",
        {
          label: "Modules",
          type: "category",
          items: [
            {
              label: "Bridge",
              type: "category",
              items: [
                "int3face/modules/bridge/bridge-overview",
              ],
            },
            {
              label: "Cross-chain Rate Limit",
              type: "category",
              items: [
                "int3face/modules/ratelimit/ratelimit-overview",
              ],
            },
            {
              label: "Quarantine",
              type: "category",
              items: [
                "int3face/modules/quarantine/quarantine-overview",
              ],
            },
            {
              label: "Token Factory",
              type: "category",
              items: [
                "int3face/modules/tokenfactory/tokenfactory-overview",
                "int3face/modules/tokenfactory/tokenfactory-messages",
                "int3face/modules/tokenfactory/tokenfactory-params",
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Bitfrost Protocol",
      type: "category",
      items: [
        "bitfrost/bitfrost-overview",
        {
          label: "Modules",
          type: "category",
          items: [
            "bitfrost/modules/liquidity-layer",
            "bitfrost/modules/liquid-staking",
            "bitfrost/modules/ai-agents",
          ],
        },
      ],
    },
    {
      label: "Guides",
      type: "category",
      items: [
        "guides/running-validator",
        "guides/running-observer",
        "guides/sending-transfers",
                  {
            label: "Demos",
            type: "category",
            items: [
              "guides/demos/btc-demo",
              "guides/demos/doge-demo"
            ],
          },
      ],
    },
    {
      label: "Resources",
      type: "category",
      items: [
        "resources/bitfrost-sdk",
        "resources/deployments",
        "resources/testnet-setup",
        {
          label: "Architecture Decision Records",
          type: "category",
          items: [
            "resources/adr/adr-overview",
            "resources/adr/adr-001-grace-period",
            "resources/adr/adr-002-dynamic-committee",
            "resources/adr/adr-003-babylon",
            "resources/adr/adr-004-solana-integration",
            "resources/adr/adr-005-ordinals",
            "resources/adr/adr-006-metrics",
            "resources/adr/adr-007-e2e-tests",
            "resources/adr/adr-008-automatic-signer-list",
            "resources/adr/adr-009-blockchain-explorer",
            "resources/adr/adr-010-node-ungrades",
            "resources/adr/adr-011-superfluid-staking",
            "resources/adr/adr-012-ton-integration",
            "resources/adr/adr-013-rate-limiting"
          ],
        },
        {
          label: "Comparisons",
          type: "category",
          items: [
            "resources/comparisons/int3face-thor-zeta",
            "resources/comparisons/tbtc-ibtc-nbtc",
            "resources/comparisons/tbtc-ibtc-nbtc-tech"
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
