const {hourMinuteAngle} = require('../models/');

function calculateAngle(hour, minute){
    return new Promise(async (resolve, reject) => {
        const alreadyCalculatedAngle = await hourMinuteAngle.findOne({ where: { hour, minute } });
        if(alreadyCalculatedAngle != null) resolve(alreadyCalculatedAngle.angle);
        else{
            const calculatedAngle = getAngle(hour, minute);
            await hourMinuteAngle.create({hour, minute, angle: calculatedAngle, date: new Date().toISOString()});
            resolve(calculatedAngle);
        }

    })
}

function getAngle(hour, minute){
    const hourAngle = (360/12);
    const minutesAngle = (360/60);
    const hourPointerAnglePerMinute = (hourAngle/60);

    let hourPointAngle = (hourAngle*hour) + (hourPointerAnglePerMinute*minute);
    let minutePointAngle = (minutesAngle*minute);

    let ret = Math.abs(hourPointAngle - minutePointAngle);
    ret = ret > 180? 360-ret : ret;
    return Math.floor(ret);
}

module.exports = {
    calculateAngle
}