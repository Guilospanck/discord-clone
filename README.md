# Discord Clone
This is the frontend part of the attempt of cloning Discord just looking at the source code for information about the dimensions, colors and fonts.

![image](https://badges.aleen42.com/src/react.svg)
![image](https://badges.aleen42.com/src/typescript.svg)
![image](https://badges.aleen42.com/src/webpack.svg)
![image](https://badges.aleen42.com/src/jest_1.svg)
![image](https://badges.aleen42.com/src/react-router.svg)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?logo=testing-library&logoColor=white)
![Dependabot](https://img.shields.io/badge/dependabot-025E8C?logo=dependabot&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?logo=githubactions&logoColor=white)

<div align="center">
➡️ 👷🚧 <b>Under Construction...</b>

You can find it @ [Discord Clone](https://guilospanck.github.io/discord-clone/)
</div>

## Technologies
- React v18 with TypeScript from scratch
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
│   └── Link
├── pages
│   └── Home
│       ├── context
│       ├── types
│       ├── useCases
│       ├── viewModels
│       │   ├── channels
│       │   ├── chat
│       │   └── sidebar
│       └── views
│           ├── channels
│           │   ├── channels_section
│           │   ├── channels_server_title
│           │   └── channels_sidebar
│           ├── chat
│           │   ├── chat_form
│           │   ├── chat_main
│           │   └── chat_section
│           └── sidebar
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
  - `types`: here are the basic types we're using in the page.
  - `useCases`: basically every connection with the outside world, like `fetch()`ing a API or something like that.
  - `viewModels`: this layer is responsible to manage what the `views` layer will present. So here resides everything related to data manipulation, like React Hooks and Events.
  - `views`: finally we have the `views` layer. It's responsible for showing the elements to the user. Here we retrieve data from the `viewModels` layer and then show it to the user. Also, here's where we will send events to that layer, like an `onClick` event, for example.


## Checklist Features
- Frontend
    - [x] It shall have a MVP presenting some key concepts of Discord design.
    - [x] It shall be able to send messages and show those message in the main chat.
    - [x] It shall be able to change between servers and channels.
    - [ ] It shall be covered with at least 80% of tests.
    - [ ] It shall have options to create new servers.
    - [ ] It shall have options to create new categories.
    - [ ] It shall have options to create new channels.
    - [ ] It shall be able to receive messages in real-time.
    - [ ] It shall have a form of creating users and loging them.

- Backend
    - [ ] It shall be able to handle user creations.
    - [ ] It shall be able to handle user login.
    - [ ] It shall be able to handle messages through a websocket.
    - [ ] It shall be able to save info about the user.
    - [ ] It shall be able to save info about the servers.
    - [ ] It shall be able to save info about the categories.
    - [ ] It shall be able to save info about the channels.
    - [ ] It shall be able to save messages per channel.
