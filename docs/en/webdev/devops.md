# Devops

It is the part of web development focused on the **deployment** of the application:

- where you can run the application **when it is developed**
- where you can run the application **in production**
- how the application is **updated** progressively across these environments

```mermaid
flowchart LR

local --> vcs[version control system]
vcs --> local
vcs --> ci[continuous Integration service]
ci --> dev 
ci --> prod
```