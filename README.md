# BioDSL
A domain specific language for describing bioprocesses.

## How to use
in progress

## Problem Statement
A number of robust frameworks have been created for describing lab processes (OpenTrons, SiLa2, Autoprotocol, etc). These tools focus on how to instatiate, control, and describe processes at the instrumentation layer. Description of these processes is a quantized and finite task, yet the in-lab instation is highly variable. The physical instantiation is varied and subject to vendor and lab environment.

Tools can be so tightly specific to their domain that they don't translate to other domains. This leads to sparsnenss or lack of data across the value chain in development of life sciences products. What is needed is a more generic, more flexible tool grounded in the core processes elements that represent what occurs in the lab.

Determine how to attribute factors to outcomes.

## Approach
BioDSL builds on the ideas of ISA, OpenTrons, SiLa2, and Autoprotocol to create a domain specific language for the life sciences. It provides tools and examples for describing any processes with the 8 fundamental types of material transformation.
1. Setting the environment
2. Adding energy
3. Removing energy 
4. Testing and measuring
5. Preparation
6. Removal of material
7. Addition of material
8. Finalizing and completing material

These transformations are further combined with additional layers of description.
1. Process
2. Stage
3. Operation
4. Action
5. Unit

BioDSL creates the framework for these concepts so that any developer can implement models. A class is the blueprint for what objects will look like. An interface is a structure used for type-checking against the above concepts.

This approach does not prescribe how these models are implemented in the lab. This allows for black box abstration of these processes using existing tools.

## Benefits
Software defined biology allows for introspection and completion not possible with existing tools. Design of processes is largely a bespoke proccess using existing, pre-defined parts that are constructed during development. The instrument and materials in a lab are fixed, yet the process is remade each time. Using BioDSL allows one to codify the inherent restrictions of reality and couple them with the preferred patterns for use by the team. Usage of BioDSL when tied to results seen in the lab enables outcome oriented design.

Additional benefits that 'come for free' by using BioDSL in an IDE.
* Ability to know where existing process elements are used, and how frequently.
* Ability to become outcome driven when designing a process. Past performance _can_ be indicative of future performance when the success or failure is attributed to the factors used.

## Example
(Example process)
```typscript
ShakeFlask(
                {
                    id: "ShakeFlask 250ml",
                    "processParameters": {
                        "Seed Density": 0.25,
                        "Passage Density": 2.00,
                        "Target Temperature": Temperature.C(37),
                        "pH": 7.2,
                        "Agitation": RotationalSpeed.rpm(125),
                        "% CO2": 8
                    },
                    "materialInfo": {
                        Media: "not sure what should go here"
                    },
                    "equipmentInfo": {
                        "Flask": "id for flask?",
                        "Flask Volume": Volume.ml(250),
                        "Working Volume": Volume.ml(60),
                    }
                }
            )
```
