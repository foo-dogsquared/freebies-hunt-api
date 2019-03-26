# Getting started

Hello! If you're here, that means you're interested to contribute or at least how the project's code works. Let's get things quick.

In a general manner, the way how this package was managed is inspired by how the [Simple Icons](https://github.com/simple-icons/simple-icons) [npm module](https://www.npmjs.com/package/simple-icons). 

If you're more of a visual person, I've made a workflow chart of how to build the API which you can see below. It also acts as a TL;DR version of this, as well.

![The code workflow of the project](./assets/freebies-hunt-api-workflow.png)

Let's discuss the individual components of this project. It's simple enough but a bit of a tour's still better than nothing.

## Markdown file input
In order to supply a dataset, we have a source of input. In this case, it's a simple list in Markdown. However, it does have its restrictions and it has a format to follow. Think of this as a little syntax on its own.

First, the Markdown list consists of types indicated by the Markdown subheader token (`##`) and any list items under that type is categorized as that type.

Each of the category has to provide a description, a name for its icon, and main color (either in RGB, HSL, valid color keyword, or a hex color). These type metadata are indicated by the Markdown `<h3>` syntax (`###`) and you have to enter the description, the icon name, and the main color in that order separated by a pipe (`|`) symbol.

Say that we want to have a new category of dogs and add some items categorized as dogs. We will just do it like so:

```md
## Dogs
### These are the list item of DOGS. | dog | brown
- LIST ITEM #1
- LIST ITEM #2
- LIST ITEM #3
```
 
Now we have a list of items under the category `Dogs`. The items can have a description and a personal comment on it. In order to insert them, you have to include a pipe symbol (`|`) after the link.

Either of the two things is optional: you can just insert a personal comment alone or the description or both.

```md
- [NAME](LINK) | **(PERSONAL_COMMENT)** DESCRIPTION
```

The only required parameters here is that the line should start with a Markdown list item syntax (`-`) and the Markdown link syntax with the `NAME` to be registered as the name and the `LINK` associated with the `NAME`.

Here's the detailed description of all of the parameters:

Parameter | Notes | Description
--- | --- | --- |
`NAME` | required | The name of the object. It'll also serve as an entry point for the resulting JSON file.
`LINK` | required | The link associated with the name.
`PERSONAL_COMMENT` | optional | The author's (which is yours truly, `foo-dogsquared`) personal comment. Has to be prepended by an em-dash HTML entity (`&mdash;`) and enclosed in GitHub-flavored Markdown bold syntax and a pair of parenthesis (`**()**`).
`DESCRIPTION` | optional | The description of the site/resource. Like the `PERSONAL_COMMENT`, it has to be prepended by an em-dash HTML entity (`&mdash;`) and goes for the rest of the line (that is, until a newline is encountered). Due to that behavior, if it does have a `PERSONAL_COMMENT` already, place it after that to prevent overtaking.

## Lexer
After you've built your Markdown URL list, we'll pass its contents through a lexer to create a list of tokens as indicated by the syntax we defined earlier. Here's a simple example:

```md
## Other Resource Lists
### Here's a meta-list of other resource lists. | list | #f453ab
- [/r/learnmath resource list](https://www.reddit.com/r/learnmath/comments/8p922p/list_of_websites_ebooks_downloads_etc_for_mobile/) | **(Best explanation right there, folks.)** It's a resource list for learning math made by the [/r/learnmath](https://www.reddit.com/r/learnmath/) community.
- [/r/learnprogramming wiki](https://www.reddit.com/r/learnprogramming/wiki/tools) | Contains an overview of tools and some recommendations that you'll be using for the process of programming.
- [awesome](https://github.com/sindresorhus/awesome) | **(This is one of the most starred project in GitHub and for a good reason. It's a very cool project suitable for all especially for tech.)** It's a curated list of lists; I guess you can say it's **awesome**, mwehehehehehehehe... 😎

## Podcasts
### A list of podcast series on different subjects, mainly computer science. | audio | #6b0f1a
- [BaseCS](https://www.codenewbie.org/basecs) | A podcast series that focuses on computer science concepts explained in such humanly way as possible.
- [CodeNewbie Podcast](https://www.codenewbie.org/podcast) | A tech podcast series that tackles a variety of subjects such as career advices, product management, and technical concepts.
- [Coding Blocks Podcast](https://www.codingblocks.net/category/podcast/) | Great for beginners.

```

Let's take [a part of the list](../src/list.md) and go through a lexer. The lexer items will have the following results:

```json
[
    {
        "type": "TYPE",
        "data": "Other Resource Lists"
    },
    {
        "type": "TYPE_METADATA",
        "data": {
            "DESCRIPTION": {
                "type": "DESCRIPTION",
                "data": "Here's a meta-list of other resource lists."
            },
            "ICON_NAME": {
                "type": "ICON_NAME",
                "data": "list"
            },
            "MAIN_COLOR": {
                "type": "MAIN_COLOR",
                "data": "#f453ab"
            }
        }
    },
    {
        "type": "LIST",
        "data": {
            "NAME": {
                "type": "NAME",
                "data": "/r/learnmath resource list"
            },
            "LINK": {
                "type": "LINK",
                "data": "https://www.reddit.com/r/learnmath/comments/8p922p/list_of_websites_ebooks_downloads_etc_for_mobile/"
            }
        }
    },
    {
        "type": "LIST",
        "data": {
            "NAME": {
                "type": "NAME",
                "data": "awesome"
            },
            "LINK": {
                "type": "LINK",
                "data": "https://github.com/sindresorhus/awesome"
            },
            "PIPE_SEPARATOR": {
                "type": "PIPE_SEPARATOR",
                "data": ""
            },
            "PERSONAL_RATING": {
                "type": "PERSONAL_RATING",
                "data": "very much recommended"
            },
            "DESCRIPTION": {
                "type": "DESCRIPTION",
                "data": "It's a curated list of lists; I guess you can say it's **awesome**, mwehehehehehehehe... 😎"
            }
        }
    },
    {
        "type": "TYPE",
        "data": "Podcasts"
    },
    {
        "type": "TYPE_METADATA",
        "data": {
            "DESCRIPTION": {
                "type": "DESCRIPTION",
                "data": "A list of podcast series on different subjects, mainly computer science."
            },
            "ICON_NAME": {
                "type": "ICON_NAME",
                "data": "audio"
            },
            "MAIN_COLOR": {
                "type": "MAIN_COLOR",
                "data": "#fed18c"
            }
        }
    },
    {
        "type": "LIST",
        "data": {
            "NAME": {
                "type": "NAME",
                "data": "BaseCS"
            },
            "LINK": {
                "type": "LINK",
                "data": "https://www.codenewbie.org/basecs"
            }
        }
    },
    {
        "type": "LIST",
        "data": {
            "NAME": {
                "type": "NAME",
                "data": "CodeNewbie Podcast"
            },
            "LINK": {
                "type": "LINK",
                "data": "https://www.codenewbie.org/podcast"
            }
        }
    },
    {
        "type": "LIST",
        "data": {
            "NAME": {
                "type": "NAME",
                "data": "Coding Blocks Podcast"
            },
            "LINK": {
                "type": "LINK",
                "data": "https://www.codingblocks.net/category/podcast/"
            },
            "PIPE_SEPARATOR": {
                "type": "PIPE_SEPARATOR",
                "data": ""
            },
            "DESCRIPTION": {
                "type": "DESCRIPTION",
                "data": "Great for beginners."
            }
        }
    }
]
```

You could also personally study on how the lexer works by uncommenting a specific line on [`../src/mdList.js`](../src/mdList.js) which will produce a JSON file.

## Parser
Now that we have our input tokenized by the lexer, we can parse through it to properly give the output needed. The parser simply returns a JavaScript object which is simply the data itself. You can see the result itself through the [JSON file of the API itself](../api/freebies.json) but it does not come from the parser, per se. Rather, it came from the schema validation. In order to see the raw results of the parser, you can just uncomment a certain line in [`../src/mdList.js`](../src/mdList.js) which will produce a JSON file unfiltered.

Now there are two types of results that you can get from here (aside from the errors):

- the uncategorized version
- the categorized version

The uncategorized version simply includes all of the items as the entry point of the JSON. This is useful if you just want to get all of the record listed in the Markdown list. Though, you can't get the full data of the listed categories from this one. The [`freebies.json`](../api/freebies.json) is one example of it.

The categorized version has the categories listed in the Markdown list as the entry point instead of the items. The categories includes the description, icon name, main color, and the items that are under it. See the [`freebies.categorized.json`](../api/freebies.categorized.json) file for an example of it.

## `jayson-db` Interface
To enforce consistency of the data, I've added an additional step to it which is to add a schema. It also doubly serves as a production use case for my [`jayson-db`](https://www.npmjs.com/package/jayson-db) npm package.

`jayson-db` requires a JSON schema compliant to the [JSON Schema spec](http://json-schema.org/). You can see the schema from [`../api/freebies.schema.json`](../api/freebies.schema.json). Some shameless plugging here, if you're interested in the JSON database management system, you can check out my project, [`jayson-db`](https://www.npmjs.com/package/jayson-db).

The usage of `jayson-db` can be seen from [`../src/mdList.js`](../src/mdList.js). The exporting of JSON also occurs with `jayson-db` simply with [`jaysonDBInstance.export`](https://github.com/foo-dogsquared/jayson-db/blob/master/docs/api.md#other-methods) method.
