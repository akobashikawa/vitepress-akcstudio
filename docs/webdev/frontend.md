# Frontend

Es la parte del **desarrollo web** enfocada en la **interface del usuario** (_UI_):

- lo que se ve (_HTML_, _CSS_)
- la interacción de los componentes (_JS_)
- la experiencia de uso (_UX_)

```mermaid
flowchart LR

style client stroke:teal
style database stroke:orange

client((client)) <--> view
subgraph frontend
    direction LR
    view[/view/] <--> services{{services}}
end
services <--> backend[backend] <--> database[(database)]

```