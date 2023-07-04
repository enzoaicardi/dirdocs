### Folder structure

- `doc-*` -> sous-documentation
- `v-*` -> sous documentation de version

```
# root "/"

    # doc
        # v-0.2
            - config.js
            # introduction
                - config.js
                - part-1.md
                - part-2.md

        # v-0.1
            # introduction
                - config.js
                - part-1.md

    # doc-angular

```

### export structure

Rediriger si utilisateur deja sur route a l'index principal avec le layout

```
# doc
    - index.html
    # v-0.2
        - index.html ->
        # introduction
        - index.html ->
        - part-1.html
```
        
### Config structure

```js
// global minidoc.config.js
export default {
    "My Project doc": {
        input: '/dev/doc',
        output: '/doc',
        title: (name)=>{ name + ' | project documentation'},
        description: (description) => "description of the documentation : " + description,
    }, 
    "Angular documentation": {
        input: '/dev/doc-angular',
        output: '/doc-angular',
        title: (name)=>{ name + ' | project documentation'},
        description: (description) => "description of the documentation : " + description,
    }, 
}
```

```js
// folder config
export default {
    // files and folders
    files: {
        "/^part-*/": {
            title: (name)=>{ return ':emoji: '+name ; }
        },
        "part-1": {
            order: -100 > 100 | 0,
            title: "File Name Rewrite",
            description: "Kind of useless but ok",
            visible: true | false
        }
    }
}
```

### Commands

Pas besoin de commandes de version, tout se passe dans les dossiers directement et il suffit de relancer un build.

```
build
```