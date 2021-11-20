import { weatherIamgesUrl } from '../constants/api'


/** check if a js object is empty according to the validation type*/
export const objectValidation = (object, validationType="or") => {
    switch(validationType){
        case "or":
            return (Object.keys(object).length === 0 ||
            object === undefined || object === null)
        case "and":
            return (Object.keys(object).length !== 0 &&
            object !== undefined && object !== null)
        default:
            return false
    }
} 

/** returns the correct url according to the icon number received  from the api */
export const returnUrlForWeatherIcon = (iconNumber) =>{
    if(iconNumber<10)
        iconNumber = `0${iconNumber}`
    return weatherIamgesUrl.replace("@@", iconNumber)
}