export default class Test{
    id: number;
    name: string;
    vo: boolean;
    page: number;
    reading: boolean;

    constructor(
        id: number,
        name: string,
        vo: boolean,
        page: number,
        reading: boolean,
    ){
        this.id = id;
        this.page = page;
        this.vo = vo;
        this.name = name;
        this.reading = reading;
    }


}