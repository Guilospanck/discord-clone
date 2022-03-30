# Discord Clone
This is the frontend part of the attempt of cloning Discord just looking at the source code for information about the dimensions, colors and fonts.

<p align="center">
➡️ 👷🚧 <b>Under Construction...</b>
</p>

## Technologies
- React with TypeScript from scratch
- Webpack, Babel, ESLint
- Jest and React Testing Library for tests
- Husky as Git Hooks
- Styled Components

## Concepts
- Clean Code Architecture
- React Best Practices
- SOLID principles
- Design Patterns

## Tree Architecture
```
.
├── assets
│   └── images
├── components
│   ├── Link
│   └── Sidebar
│       ├── viewModels
│       └── views
├── pages
│   └── Home
│       ├── context
│       ├── useCases
│       ├── viewModels
│       │   ├── channels
│       │   └── chat
│       └── views
│           ├── channels
│           │   ├── channels_section
│           │   ├── channels_server_title
│           │   └── channels_sidebar
│           └── chat
│               ├── chat_form
│               ├── chat_main
│               └── chat_section
└── shared
```
I'm using Clean Code Architecture. Basically it tells us to divide our code into layers, in order to be more testable and to decouple our logic.

The names may vary from one person to another, but the basic concept is the separation of concerns.

Below it's an overview about the layers I'm using.

- `assets`: layer used to comport our images, videos, audios and so on.
- `components`: React components that we can use in different parts of the project. This parte could have been inside the `shared` layer as well.
- `shared`: any type of file that can be shared amongst pages and components, like JSON files, configurations, and so on.
- `pages`: here resides every single page that our application may have. I define page as something that will change routes. Inside each page we have the separation of concerns of the components of these pages.
  - `context`: here is where we can use the React.Context API in order to manage the state of your page through different components.
  - `useCases`: basically every connection with the outside world, like `fetch()`ing a API or something like that.
  - `viewModels`: this layer is responsible to manage what the `views` layer will present. So here resides everything related to data manipulation, like React Hooks and Events.
  - `views`: finally we have the `views` layer. It's responsible for showing the elements to the user. Here we retrieve data from the `viewModels` layer and then show it to the user. Also, here's where we will send events to that layer, like an `onClick` event, for example.