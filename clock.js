//Lin Alg Date
//6:30 PM December 08 2017

setTheCountdown('.lin-clock',((new Date("2017/12/08 18:30:00"))- (new Date()))/1000);
setTheCountdown('.esp-clock',((new Date("2017/12/11 18:30:00"))- (new Date()))/1000);
setTheCountdown('.che-clock',((new Date("2017/12/13 14:30:00"))- (new Date()))/1000);
setTheCountdown('.civ-clock',((new Date("2017/12/14 14:30:00"))- (new Date()))/1000);
setTheCountdown('.calc1-clock',((new Date("2017/12/18 14:30:00"))- (new Date()))/1000);
setTheCountdown('.calc2-clock',((new Date("2017/12/19 09:30:00"))- (new Date()))/1000)

setTheCountdown('.sha-bday',((new Date("2017/12/25 00:00:01"))- (new Date()))/1000);
function setTheCountdown(objectName, time) {
var clock = $(objectName).FlipClock(time,{
        countdown: true,
        clockFace: 'DailyCounter'
    });
}
