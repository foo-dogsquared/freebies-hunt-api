# freebies-hunt-api
![Freebies Hunt logo](./docs/assets/freebies-hunt-logo.svg)

API for the digital freebies from Freebies Hunt as an npm package. It's my personal list of digital freebies that I found quite useful. Of course, why not share it in a JSON file. 

This also serves as a production use case for my JSON database system, [`jayson-db`](https://github.com/foo-dogsquared/jayson-db) (and also save some money by creating my own little database management system thingamajig ~~It's expensive relative to my budget, OK?~~). Also, it's actually fun.

Anyways, this also represents the tools and resources that I personally use (or previously used) though I admittedly don't all of them at least just yet. If you want to send me feedback whether it regards to the resources or to the site, feel free to do so. Just make sure the suggested resources are legally free 👀 and free to use (as much as possible free as in free speech, not free beer). Also look for the [contributing section](#contributing) below for more information.

## Getting started
To get started on using the API, just head on over and download it from npm:

```sh
npm i freebies-hunt-api
```

Import it and presto! You are mostly done!

```js
const freebiesHuntApi = require("freebies-hunt-api");
```

Keep in mind that the module is basically a JavaScript object with four properties:

Property | Type | Description
--- | --- | --- |
`data` | `Object` | Contains all of the items without being categorized.
`schema` | `Object` | Contains the schema (according to [JSON Schema](http://json-schema.org/) spec) of the individual items in the `data`.
`categorizedData` | `Object` | Contains the categories and their items.
`categorizedDataSchema` | `Object` | Contains the schema (according to [JSON Schema](http://json-schema.org/) spec) of the categories in the `categorizedData` property.

So if you want to iterate through all of the items, just use the `data` property. You could also just take a look at the [`api/`](./api/) folder to see its exact properties and items.

Take note that the data is based in Markdown so you have to convert it from Markdown into HTML (or something).

```js
const { data } = require("freebies-hunt-api");

// all of the individual items will be logged
for (const item in data) {
    console.log(data[item]);
}
```

## Changelog
To see what potentially breaking changes have occured in the API, you can see the [changelog](./docs/CHANGELOG.md).

## Contributing
You can contribute mainly either by code, feedback, criticisms, or link suggestions. 

If you want to contribute through code, do the following for the development build:

- fork the repo (click the 'Fork' button)
- clone the repo into your machine (`git clone <GIT_FORKED_REPO_URL>`)
- go to the project directory (`cd freebies-hunt-api` or something similar)
- install the dependencies (`npm install`)
- start the `jayson-db` program (`npx jayson-db get freebies.json`)

Also, read the [code documentation I've written at the `docs/` folder](./docs/getting-started.md). It'll get you a general idea of how the API was built.

If you want to contribute through feedback either by constructive criticisms or suggestions, freely file an issue and spark a discussion about it.

If you want to add a resource to be included in the API, **don't edit the JSON** especially now since it's at a constructive phase. Instead, file an issue and I'll consider it. This may be a personal list but I'm open for suggestions. This also means that I'm quite strict when considering a resource. One more thing, make sure the suggested resource is free (or has generous free-tier services). There's one rule to this which is make sure that it is related to programming- and computer-related stuff (most of the time). But even with that rule, I can't really say a hard rule on this. It'll most likely be a case-by-case basis so really, feel free to suggest something.

Anyways, I'm looking forward for your contributions. 🙂

P.S. If you want to, you can use [`jayson-db`](https://github.com/foo-dogsquared/jayson-db) for a personal project or something. Like any of my publicly released projects, I'm open for suggestions, feedbacks, and contributions to make the better outcome of the project.
