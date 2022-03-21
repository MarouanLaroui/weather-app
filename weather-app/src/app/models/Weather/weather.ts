export class Weather {

    id : number;
    main_description : string;
    icon : string;
    temperature : number;
    temp_min : number;
    temp_max : number;
    humidity : number;
    wind_speed: number;

    constructor(
        id : number,
        main_description : string,
        icon : string,
        temperature : number,
        temp_min : number,
        temp_max : number,
        humidity : number,
        wind_speed: number
    ){
        this.id = id;
        this.main_description = main_description;
        this.icon = icon;
        this.temperature = temperature;
        this.temp_max = temp_max;
        this.temp_min = temp_min;
        this.humidity = humidity;
        this.wind_speed = wind_speed;
    }
}
