export class Board {
    constructor(
        public id: string,
        public name: string,
        public author: string,
    ) {}

    static fromJSON(json: any): Board {
        return new Board(
            json.id,
            json.name,
            json.author,
        );
    }

    toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            author: this.author
        };
    }
}