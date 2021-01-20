# Micro Frontends & Contentful

## Motivation

This is a Proof of Concept, about to orchestrate a set of micro frontends using Single SPA and integrate them with Contentful for CMS and CDN using the free account.

## Features

This project uses:

- [x] Monorepo approach
- [ ] Contentful as CMS & CDN
- [ ] Single SPA Architecture
- [ ] Shared Styles
- [ ] Deployment in Github pages or Netlify

## Wish list

- [ ] Integrate monorepo with https://pnpm.js.org/
- [ ] Docker to deploy all projects
- [ ] Nginx to load balance the traffic
- [ ] Create a CI/CD pipeline
- [ ] Deploy in a cloud platform

## Architecture

@TODO: Add architecture logical view or conceptual diagram.

| Micro Frontend | Description                                            | Technologies |
| :------------- | :----------------------------------------------------- | :----------- |
| Container      | Orchestrate all micro frontends                        | React        |
| Dashboard      | Dashboard to connect with other financial products     | Angular      |
| Insurance      | Domain to show information for insurance products      | React        |
| Credit cards   | Domain to show information for credit card products    | React        |
| Saving account | Domain to show information for saving account products | React        |

## Technologies

- [ ] Tailwind CSS
- [ ] Single SPA
- [ ] React 17.x
- [ ] Angular 11.x
- [x] npm for dependency resolution

## Steps

1. [Adding Single SPA root file](https://single-spa.js.org/docs/create-single-spa/)
2. Once you run the commands to create a new single-spa rootFile and application, you will get the option to run the `npm run start` command to show the step by step in the browser. http://single-spa-playground.org/playground/applications-guide
3. Add the configuration for the Micro frontend projects
   3.1. The `webpack.config.js` should looks like this:

```javascript
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codesandtags", // The orgName is really important, because this will be used in the root file.
    projectName: "navbar", // The projectName is really important, because this will be used in the root file.
    webpackConfigEnv,
  });

  // The rootFile for each project will be like: ${orgName}-${projectName}.js for more information, please check.
  // https://single-spa.js.org/docs/getting-started-overview#create-a-root-config

  return merge(defaultConfig, {
    // customizations can go here
  });
};
```

## Demo

TODO: Add link with demo

## Resources

|                                                        Resource                                                        | Description                                                                                                                                                                           |
| :--------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                        [Module Federation](https://webpack.js.org/concepts/module-federation/)                         | Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. |
|                                  [Micro Front-ends](https://micro-frontends-es.org/)                                   | The basic teory to understand Micro Frontends                                                                                                                                         |
| [Github Actions](https://docs.github.com/es/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions) | Github actions to add CI / CD to projects                                                                                                                                             |

## Contact

Feel free to contact me at:

- [Linkedin](https://www.linkedin.com/in/edwintorresdeveloper/)
- [Gmail](mailto:codesandtags@gmail.com)
- [Github](https://github.com/codesandtags)
