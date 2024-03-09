## Getting Started

node version 12.13.0

npm version 6.12.0

### Installation

Yarn Installation 

```bash
npm install --global yarn
```

Clone the repo:

```bash
git clone https://github.com/JakcinManoj/Hotel_App.git
cd hotel-app
```

Install the dependencies:

```bash
yarn install
```

and create a new file .env in hotel-backend/services/\* if not present, It requires credentials for mongodb so if not present ask the owner or create it.

### Commands

Running app locally:

```bash
yarn start
```

the app will run on http://localhost:9000


## Code Testing

For ***Unit Testing*** use `yarn test`

For ***Automation Testing*** use `yarn cypress`

## Project Structure

```
hotel-backend\
 |--services\       # Apollo Federation services and gateway
    |--foods\       # Foods service
    |--gateway\     # Graphql gateway
    |--users\       # users service
hotel-backend\
 |--services\       # Single SPA microfrontend
    |--api\         # Graphql apollo client service
    |--auth\        # Authentication app
    |--food\        # Food order app
    |--root-config\ # root config for single spa
    |--styleguide\  # Common components and styles

```


Refer This Doc for further Understanding [Docs](https://docs.google.com/document/d/1wgoNeY6qE3Zt3yvmQAW7PLZRWcKzAHGBW7fQ2gtYAjM/edit)
