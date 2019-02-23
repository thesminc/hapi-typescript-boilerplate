import * as Hapi from "Hapi";

export class App {

    server: Hapi.Server;

    constructor(private host: string) {
        this.server = new Hapi.Server({
            host: host,
            port: 3000
        });
    }

    start = async () => {
        try {
            await this.server.start();
            await this.init();
        } catch (err) {
            throw new Error(err);
            process.exit(1);
        }
    }

    init() {
        console.log('success on port: ' + this.server.info.port);
    }
}