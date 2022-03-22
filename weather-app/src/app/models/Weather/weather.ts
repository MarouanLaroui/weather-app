export class Weather {

    id : number;
    main_description : string;
    icon : string;
    date : Date;
    hour : string;
    temperature : number;
    temp_min : number;
    temp_max : number;
    humidity : number;
    wind_speed: number;
    pressure : number;
    feels_like: number;


    constructor(
        id : number,
        main_description : string,
        icon : string,
        date : Date,
        hour : string,
        temperature : number,
        temp_min : number,
        temp_max : number,
        humidity : number,
        wind_speed: number,
        pressure : number,
        feels_like : number
    ){
        this.id = id;
        this.main_description = main_description;
        this.icon = icon;
        this.date = date,
        this.hour = hour;
        this.temperature = temperature;
        this.temp_max = temp_max;
        this.temp_min = temp_min;
        this.humidity = humidity;
        this.wind_speed = wind_speed;
        this.pressure = pressure;
        this.feels_like = feels_like
    }
}
