import { Unity } from "../models/TemperatureUnity/Unity"

export class TemperatureConverter{

    static kelvinToCelsius(kelv_temperature : number):number{
        return kelv_temperature - 273.15
    }

    static kelvinToFahrenheit(kelv_temperature : number):number{
        return (kelv_temperature - 273.15) * 9/5 + 32
    }

    static convertKelvinToUnitMeasure(kelv_temperature : number, unity : Unity):number{
        switch(unity){
            case Unity.Celsius :
                return TemperatureConverter.kelvinToCelsius(kelv_temperature);
            case Unity.Fahrenheit : 
                return TemperatureConverter.kelvinToFahrenheit(kelv_temperature);
            default:
                return kelv_temperature;
        }
    }

}