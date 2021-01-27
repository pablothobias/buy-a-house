# Buy a house - Origin

### Requirements:

- [Angular CLI](https://cli.angular.io/)
- [Node >=12](https://nodejs.org/en/)
- [NPM >= 6](https://www.npmjs.com/get-npm)
or
- [Docker](https://www.docker.com/)

### Get the code 
```sh
$ git clone https://github.com/pablothobias/buy-a-house
$ cd buy-a-house
$ npm i
```

### Development server
Run ```ng serve``` for a dev server. Navigate to  `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/directory`. 
Use the `-prod` flag for a production build.

### Run the application through Docker
tart the Docker application on your computer. Then, navigate to the `buy-a-house` app through the terminal:

Run the following command on the app root directory:
```sh
$ docker build -t buy-a-house .
```
This will generate an image based on the `buy-a-house app` requirements.

You can use the command below to check if the image was built in fact:

```sh
$ docker images
```

Now, run the image you've just built with the command:
```sh
$ docker run -p 8000:80 -d -it buy-a-house
```

Verify the deployment by navigating to your localhost address in your preferred browser.

```sh
http://localhost:8000
```

