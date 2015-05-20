Redis Benchmarks
================

A benchmark for Redis client libraries in various programming languages.

## Performed Work

The benchark sends 1,000,000 commands "SET foo bar" in pipeline mode.

## Measurements

For compiled languages, I simply use `time`. For languages with significant startup times (Java, Ruby) I measure only the net execution time including the initial connect.
