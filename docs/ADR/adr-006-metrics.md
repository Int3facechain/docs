# ADR-006: Metrics And Logs

## Status

Done

## Context

We want to collect business and infrastructure metrics from both observer and int3face node binaries.

## Implementation

1. Implement log aggregation.
2. Add metrics for the number of incoming and outgoing transactions.
3. Add metrics for total vault supply.
4. Add metrics for total Cosmos-represented asset supply.
5. Calculate and monitor the ratio between vault and Cosmos asset supplies.
6. Monitor incoming and outgoing transaction volume.
7. Monitor node status, including health status and current height.
8. Implement TSS metrics.

Use [this template](https://grafana.com/grafana/dashboards/16846-aptos-validator-monitoring/) as a reference.  

## Steps to implement

1. Determine how to scrape metrics from nodes: [71](https://github.com/Int3facechain/bridge/issues/71).
2. Set up metrics storage: [72](https://github.com/Int3facechain/bridge/issues/72).
3. Research methods to expose and modify Cosmos-based metrics: [73](https://github.com/Int3facechain/bridge/issues/73).
4. Add business and infrastructure metrics for the Int3face node: [74](https://github.com/Int3facechain/bridge/issues/74).
5. Add business and infrastructure metrics for the Observer node: [75](https://github.com/Int3facechain/bridge/issues/75).
6. Deploy the metrics infrastructure to Hetzner: [76](https://github.com/Int3facechain/bridge/issues/76).
7. Set up a metrics dashboard using the reference template: [77](https://github.com/Int3facechain/bridge/issues/77).

## Solution

1. Implemented monitoring based on Prometheus and Grafana.
2. Prometheus and Grafana are deployed by docker-compose.
3. Also running as a demon:
    1. node-exporter to collect node metrics.
    2. cosmos-exporter to collect Cosmos metrics.
4. Monitoring repository: [int3face-monitoring](https://github.com/Int3facechain/monitoring) contains:
   1. Prometheus & Grafana configs 
   2. Deployment scripts
   3. Docker-compose file
   4. Dashboards
5. Grafana dashboard (Hetzner): [int3face-monitoring](http://95.217.153.1:3000/d/cosmos_validator/int3face-monitoring?orgId=1&refresh=1m)
   1. Login: `admin`
   2. Password: {please ask from a team member}
6. Prometheus (Hetzner): [prometheus-ui](http://95.217.153.1:9099/graph)

Architecture:
![monitoring_architecture](/img/common/monitoring_architecture.png)

## Metrics overview

### Observer Node Metrics
Configuration block in *observer.toml* file:
```toml
[monitoring]
  # The flag to enable the metrics server.
  enabled = true
  # The port to expose the metrics on.
  port = 27727
```

Metrics list:

| Metric name                                   | Metric Type | Labels                               | Description                                    |
|-----------------------------------------------|-------------|--------------------------------------|------------------------------------------------|
| `observer_transfer_success_total`             | Counter     | [from_chain, to_chain]               | Number of successful transfers                 |
| `observer_transfer_failed_total`              | Counter     | [from_chain, to_chain]               | Number of failed transfers                     |
| `observer_transfer_duration_seconds`          | Histogram   | [from_chain, to_chain]               | Time spent on processing transfer              |
| `observer_transfers_queue_size`               | Gauge       | [chain_id]                           | Size of transfers queue                        |
| `observer_transferred_amount_total`           | Counter     | [from_chain, to_chain]               | Amount of transferred assets                   |
| `observer_tss_sign_success_total`             | Counter     | []                                   | Number of successful TSS signs                 |
| `observer_tss_sign_failed_total`              | Counter     | []                                   | Number of failed TSS signs                     |
| `observer_tss_sign_duration_seconds`          | Histogram   | []                                   | Time spent on TSS                              |
| `observer_keygen_processing_success_total`    | Counter     | []                                   | Number of successful key generation processes  |
| `observer_keygen_processing_failed_total`     | Counter     | []                                   | Number of failed key generation processes      |
| `observer_keygen_processing_duration_seconds` | Histogram   | []                                   | Time spent on key generation                   |
| `observer_vault_migration_duration_seconds`   | Histogram   | []                                   | Time spent on vault migration                  |
| `observer_chain_client_health`                | Gauge       | [chain_id]                           | Chain client health status                     |
| `observer_chain_height`                       | Gauge       | [chain_id]                           | Chain height                                   |
| `observer_chain_last_observed_height`         | Gauge       | [chain_id]                           | Last observed chain height                     |
| `observer_total_supply`                       | Gauge       | [chain_id, asset_id, vault_address]  | Total supply of assets                         |


### Int3face Node Metrics
Configuration block in *config/config.toml* file:
```toml
#######################################################
###       Instrumentation Configuration Options     ###
#######################################################
[instrumentation]

# When true, Prometheus metrics are served under /metrics on
# PrometheusListenAddr.
# Check out the documentation for the list of available metrics.
prometheus = true

# Address to listen for Prometheus collector(s) connections
prometheus_listen_addr = ":26660"

# Maximum number of simultaneous connections.
# If you want to accept a larger number than the default, make sure
# you increase your OS limits.
# 0 - unlimited.
max_open_connections = 3

# Instrumentation namespace
namespace = "cometbft"
```

- Consensus metrics: link to [metrics](https://docs.cometbft.com/v0.37/core/metrics)
- Cosmos-exporter metrics (all the metrics provided by cosmos-exporter have the following prefixes):
    - cosmos_validator_* - metrics related to a single validator 
    - cosmos_validators_* - metrics related to a validator set 
    - cosmos_wallet_* - metrics related to a single wallet

### Node Exporter Metrics
- Node exporter metrics: link to [metrics](https://github.com/prometheus/node_exporter)