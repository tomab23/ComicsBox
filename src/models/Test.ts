export default class Test{
    id: number;
    name: string;
    vo: boolean;
    page: number;

    constructor(
        id: number,
        name: string,
        vo: boolean,
        page: number,
    ){
        this.id = id;
        this.page = page;
        this.vo = vo;
        this.name = name;
    }


}