export class Recipe{
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private date: Date
    ){}
    static toUserModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.date)
    }
    public getId(){
        return this.id
    }
    public getTitle(){
        return this.title
    }
    public getDescription(){
        return this.description
    }
    public getDate(){
        return this.date
    }
}