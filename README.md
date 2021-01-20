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

- [ ] Docker to deploy all projects
- [ ] Nginx to load balance the traffic
- [ ] Add monorepo structure with Lerna
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
