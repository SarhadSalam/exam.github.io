//Lin Alg Date
//6:30 PM December 08 2017

setTheCountdown('.ece110-clock',((new Date("2018/04/23 18:30:00"))- (new Date()))/1000);
setTheCountdown('.aps105-clock',((new Date("2018/04/24 18:30:00"))- (new Date()))/1000);
setTheCountdown('.mie100-clock',((new Date("2018/04/26 14:00:00"))- (new Date()))/1000);
setTheCountdown('.eco101-clock',((new Date("2018/04/27 14:00:00"))- (new Date()))/1000);
setTheCountdown('.mat187-clock',((new Date("2018/04/28 14:00:00"))- (new Date()))/1000);

setTheCountdown('.sha-bday',((new Date("2018/04/20 00:00:01"))- (new Date()))/1000);
function setTheCountdown(objectName, time) {
var clock = $(objectName).FlipClock(time,{
        countdown: true,
        clockFace: 'DailyCounter'
    });
}
