export class Recipes {
    public name: string;
    public description: string;
    public imagPath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagPath = imagePath;
    }
}