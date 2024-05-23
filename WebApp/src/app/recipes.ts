export class RecipesClass {
    title:string;
    ingredient:Array<string>;
    instruction:string;
    image:string;
    id?:number
    date_created?:string;
    constructor(t:string, ingred:Array<string>, instruct :string, img:string, num?:number){
        this.title=t;
        this.ingredient=ingred;
        this.instruction=instruct;
        this.image=img;
        if (typeof num !== 'undefined'){
            this.id=num;}
    }
}
