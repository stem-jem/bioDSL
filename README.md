# BioDSL
A domain specific language for describing bioprocesses.

## Problem Statement
A number of robust frameworks have been created for describing lab processes (OpenTrons, SiLa2, Autoprotocol, etc). These tools focus on how to instatiate, control, and describe processes at the instrumentation layer. Description of these processes is a quantized and finite task, yet the in-lab instation is highly variable. The physical instantiation is varied and subject to vendor and lab environment.

Tools can be so tightly specific to their domain that they don't translate to other domains. This leads to sparsnenss or lack of data across the value chain in development of life sciences products. What is needed is a more generic, more flexible tool grounded in the core processes elements that represent what occurs in the lab.

Determine how to attribute factors to outcomes.

## Approach
BioDSL builds on the work of ISA, OpenTrons, SiLa2, and Autoprotocol to create a domain specific language for the life sciences. It provides tools and examples for translating any bioprocess to the 8 fundamental types of material transformation.
1. Setting the environment
2. Adding energy
3. Removing energy 
4. Testing and measuring
5. Preparation
6. Removal of material
7. Addition of material
8. Finalizing and completing material

This approach does not prescribe how these models are implemented in the lab. This allows for black box abstration of these processes using existing tools.

## Benefits
Software defined bology allows for introspection and completion not possible with existing tools. Design of processes is largely

Ability to know where existing process elements are used, and how frequently.
Ability to become outcome driven when designing a process. Past performance can be indicative of future performance when the success or failure is attributed to the factors used.
