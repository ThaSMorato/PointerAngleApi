const {calculateAngle} = require('../services/AngleService');


function validateHourAndMinute(hour, minute) {
    let error = false;
    let errorReturn = { }
    if(hour > 12 || hour < 0){
        error = true;
        errorReturn.hour = "Hour needs to be between 0 and 12";
    }
    if(minute > 59 || minute < 0){
        error = true;
        errorReturn.minute = "Minute needs to be between 0 and 59";
    }
    if(error) return errorReturn;
    return error;
}

function middlewareValidateHourAndMinutes(request, response, next){
    const hour = request.params.hour
    const minute = request.params.minute? request.params.minute : 0;
    const error = validateHourAndMinute(hour, minute);
    if(error) return response.status(400).json({data : error});
    next();
}

async function AngleBetweenHourAndMinute(request, response){
    const hour = request.params.hour
    const minute = request.params.minute? request.params.minute : 0;
    const calculatedAngle = await calculateAngle(hour, minute);
    return response.json({angle: calculatedAngle})
}

module.exports = {
    AngleBetweenHourAndMinute, middlewareValidateHourAndMinutes
}