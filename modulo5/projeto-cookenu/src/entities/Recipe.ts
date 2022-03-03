export class Recipe{
    constructor(
        private id: string,
        private user_id: string,
        private title: string,
        private description: string,
        private cratedAt: Date
    ){}
    static toUserModel(data: any): Recipe {
        return new Recipe(data.id, data.user_id, data.title, data.description, data.date)
    }
    public getId(){
        return this.id
    }
    public getUserId(){
        return this.user_id
    }
    public getTitle(){
        return this.title
    }
    public getDescription(){
        return this.description
    }
    public getDate(){
        return this.cratedAt
    }
}