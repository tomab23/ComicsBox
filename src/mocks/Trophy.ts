export default class Trophy{
     id: number;
     name: string;
     need: number;
     rarity: string;

    constructor(
     id: number,
     name: string,
     need: number,
     rarity: string,
    ){
        this.id = id;
        this.need = need;
        this.name = name;
        this.rarity = rarity;
    }


}