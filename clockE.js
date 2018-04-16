//Lin Alg Date
//6:30 PM December 08 2017

setTheCountdown('.lin-clock',((new Date("2018/04/17 14:00:00"))- (new Date()))/1000);
setTheCountdown('.esp-clock',((new Date("2018/04/19 14:00:00"))- (new Date()))/1000);
setTheCountdown('.che-clock',((new Date("2018/04/24 14:00:00"))- (new Date()))/1000);
setTheCountdown('.civ-clock',((new Date("2018/04/26 18:30:00"))- (new Date()))/1000);
setTheCountdown('.calc1-clock',((new Date("2018/04/30 09:30:00"))- (new Date()))/1000);
setTheCountdown('.calc2-clock',((new Date("2017/12/19 14:30:00"))- (new Date()))/1000);
setTheCountdown('.alex-clock',((new Date("2019/01/05 00:00:01"))- (new Date()))/1000);
setTheCountdown('.sha-clock',((new Date("2018/08/20 00:00:01"))- (new Date()))/1000);


function setTheCountdown(objectName, time) {
    var clock = $(objectName).FlipClock(time,{
        countdown: true,
        clockFace: 'DailyCounter'
    });
}
