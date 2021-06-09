const minutestand = document.querySelector('.stand-minute')
const secondstand = document.querySelector('.stand-second')
const hourstand = document.querySelector('.stand-hour')


setInterval(() => {
    
    const date = new Date()
    const secondRatio = date.getSeconds() / 60;
    const minuteRatio = (date.getMinutes()+secondRatio) /60
    const hourRatio = (date.getHours()+minuteRatio ) /12
    // console.log(secondRatio*360 + '  '+minuteRatio+' '+hourRatio)
    setrotation(minutestand,minuteRatio)
    setrotation(secondstand,secondRatio)
    setrotation(hourstand,hourRatio)
}, 1000);

function setrotation(stand, ratio)
{
    stand.style.setProperty('--rotation', ratio*360)
}