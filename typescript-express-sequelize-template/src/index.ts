import { ExpressApp } from "./app";
import Http from "http";
import { sequelize } from "./models";
import { Sequelize } from "sequelize/types";
// import * as Promise from 'bluebird';

export class Server {
  expressApp = new ExpressApp();
  httpServer: Http.Server;

  constructor() {
    this.httpServer = new Http.Server(this.expressApp.app);
  }

  runServer = (): Promise<void | Http.Server> => {
    return this.databaseConnection()
      .then(this.serverListen)
      .catch(this.serverErrorHandler);
  };

  databaseConnection = (): Promise<Sequelize> => {
    return this.sequelizeAuthenticate().then(this.sequelizeSync);
  };

  sequelizeAuthenticate = (): any => {
    return sequelize.authenticate();
  };

  sequelizeSync = (): any => {
    return sequelize.sync({ force: false });
  };

  serverListen = (): Http.Server => {
    const { PORT: port, HOST: host } = process.env;
    return this.httpServer.listen(port, (): void => {
      console.log(`Server is running on: http://${host}:${port}`);
    });
  };

  serverErrorHandler = (error: Error): void => {
    console.log("Server run error: ", error.message);
  };
}

const server = new Server();
server.runServer();
