# Version 6

## Experiment Topology

horizontal

## Isolation Mode

isolated-fresh-app

## Hypothesis

Forcing unique section-graph assignments per route should increase structural divergence and reduce repeated section skeletons across `/1.. /5`.

## Mutation Axis

Section graph diversity

## Exact Skill Change

Added a version-specific section-graph diversity gate that maps each route to a fixed unique graph id and adds pass/fail checks for repeated section order and repeated transition patterns.

## Expected Visual Delta

Routes should feel more architecturally distinct, with clearer rhythm differences between hero, middle bands, and conversion sections.

## Measured Result

Route-graph divergence improved materially across `/1.. /5` with stronger architectural separation and fewer repeated skeletons; interaction depth and visual finish remain mid-tier. Scored `14.2/20` (avg `1.42`), up from baseline.

## Keep / Drop

Keep as primary vertical-refinement parent.
