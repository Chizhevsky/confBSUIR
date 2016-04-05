/**
 * Created by Лёша on 30.03.2016.
 */

$(document).ready(function() {
    var glob = {
        clickNumb: 0,
        arsNumb: 0,
        fulhNumb: 0,
        AVNumb: 0,
        LivNumb: 0,
        MCNumb: 0,
        EvNumb: 0,
        current: null,
        previous: null,
        mainCounter: 0
    };

    $('#ArsFirst').on('click', function() {
        $(this).attr('src','./img/Арсенал.jpg');
        ++glob.clickNumb;
        glob.current = $('#ArsFirst');
        forArs.call(glob, 'current', 'previous', 'clickNumb', 'arsNumb');
    });
    $('#ArsSec').on('click', function() {
        $(this).attr('src','./img/Арсенал.jpg');
        ++glob.clickNumb;
        glob.current = $('#ArsSec');
        forArs.call(glob, 'current', 'previous', 'clickNumb', 'arsNumb');
    });
    $('#FulhFirst').on('click', function() {
        $(this).attr('src','./img/Фулхэм.jpg');
        ++glob.clickNumb;
        glob.current = $('#FulhFirst');
        forFulh.call(glob, 'current', 'previous', 'clickNumb', 'fulhNumb');
    });
    $('#FulhSec').on('click', function() {
        $(this).attr('src','./img/Фулхэм.jpg');
        ++glob.clickNumb;
        glob.current = $('#FulhSec');
        forFulh.call(glob, 'current', 'previous', 'clickNumb', 'fulhNumb');
    });
    $('#AVFirst').on('click', function() {
        $(this).attr('src','./img/Астон Вилла.jpg');
        ++glob.clickNumb;
        glob.current = $('#AVFirst');
        forAV.call(glob, 'current', 'previous', 'clickNumb', 'AVNumb');
    });
    $('#AVSec').on('click', function() {
        $(this).attr('src','./img/Астон Вилла.jpg');
        ++glob.clickNumb;
        glob.current = $('#AVSec');
        forAV.call(glob, 'current', 'previous', 'clickNumb', 'AVNumb');
    });
    $('#LivFirst').on('click', function() {
        $(this).attr('src','./img/Ливерпуль.jpg');
        ++glob.clickNumb;
        glob.current = $('#LivFirst');
        forLiv.call(glob, 'current', 'previous', 'clickNumb', 'LivNumb');
    });
    $('#LivSec').on('click', function() {
        $(this).attr('src','./img/Ливерпуль.jpg');
        ++glob.clickNumb;
        glob.current = $('#LivSec');
        forLiv.call(glob, 'current', 'previous', 'clickNumb', 'LivNumb');
    });
    $('#MCFirst').on('click', function() {
        $(this).attr('src','./img/Манчестер сити.jpg');
        ++glob.clickNumb;
        glob.current = $('#MCFirst');
        forMC.call(glob, 'current', 'previous', 'clickNumb', 'MCNumb');
    });
    $('#MCSec').on('click', function() {
        $(this).attr('src','./img/Манчестер сити.jpg');
        ++glob.clickNumb;
        glob.current = $('#MCSec');
        forMC.call(glob, 'current', 'previous', 'clickNumb', 'MCNumb');
    });
    $('#EvFirst').on('click', function() {
        $(this).attr('src','./img/Эвертон.jpg');
        ++glob.clickNumb;
        glob.current = $('#EvFirst');
        forEv.call(glob, 'current', 'previous', 'clickNumb', 'EvNumb');
    });
    $('#EvSec').on('click', function() {
        $(this).attr('src','./img/Эвертон.jpg');
        ++glob.clickNumb;
        glob.current = $('#EvSec');
        forEv.call(glob, 'current', 'previous', 'clickNumb', 'EvNumb');
    });

    function forEv(current, previous, clickNumb, EvNumb) {
        if(this[clickNumb] == 1 && this[EvNumb] == 0) {
            ++glob.EvNumb;
            glob.previous = this[current];
            //return 0;
        } else if (this[clickNumb] == 2 && this[EvNumb] == 1) {
            var clubName = prompt('How is it called?');
            if (clubName == 'Everton') {
                alert('Right. Lets continue');
            } else {
                alert('Lets start again');
                location.reload();
                return 0;
            }
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            this[current].removeAttr('id');
            this[previous].removeAttr('id');
            glob.previous = null;
            glob.current = null;
            ++glob.mainCounter;
            if (glob.mainCounter >= 6) {
                forEnd();
            }
            //return 0;
        } else if (this[clickNumb] == 2 && this[EvNumb] == 0) {
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            setTimeout(function(){
                $(glob.current).attr('src', './img/АПЛ.jpg');
                $(glob.previous).attr('src', './img/АПЛ.jpg');
                glob.previous = null;
                glob.current = null;
            }, 2000);
            //return 0;
        }
    }

    function forMC(current, previous, clickNumb, MCNumb) {
        if(this[clickNumb] == 1 && this[MCNumb] == 0) {
            ++glob.MCNumb;
            glob.previous = this[current];
            //return 0;
        } else if (this[clickNumb] == 2 && this[MCNumb] == 1) {
            var clubName = prompt('How is it called?');
            if (clubName == 'Manchester City') {
                alert('Right. Lets continue');
            } else {
                alert('Lets start again');
                location.reload();
                return 0;
            }
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            this[current].removeAttr('id');
            this[previous].removeAttr('id');
            glob.previous = null;
            glob.current = null;
            ++glob.mainCounter;
            if (glob.mainCounter >= 6) {
                forEnd();
            }
            //return 0;
        } else if (this[clickNumb] == 2 && this[MCNumb] == 0) {
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            setTimeout(function(){
                $(glob.current).attr('src', './img/АПЛ.jpg');
                $(glob.previous).attr('src', './img/АПЛ.jpg');
                glob.previous = null;
                glob.current = null;
            }, 2000);
            //return 0;
        }
    }

    function forLiv(current, previous, clickNumb, LivNumb) {
        if(this[clickNumb] == 1 && this[LivNumb] == 0) {
            ++glob.LivNumb;
            glob.previous = this[current];
            //return 0;
        } else if (this[clickNumb] == 2 && this[LivNumb] == 1) {
            var clubName = prompt('How is it called?');
            if (clubName == 'Liverpool') {
                alert('Right. Lets continue');
            } else {
                alert('Lets start again');
                location.reload();
                return 0;
            }
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            this[current].removeAttr('id');
            this[previous].removeAttr('id');
            glob.previous = null;
            glob.current = null;
            ++glob.mainCounter;
            if (glob.mainCounter >= 6) {
                forEnd();
            }
            //return 0;
        } else if (this[clickNumb] == 2 && this[LivNumb] == 0) {
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            setTimeout(function(){
                $(glob.current).attr('src', './img/АПЛ.jpg');
                $(glob.previous).attr('src', './img/АПЛ.jpg');
                glob.previous = null;
                glob.current = null;
            }, 2000);
            //return 0;
        }
    }

    function forAV(current, previous, clickNumb, AVNumb) {
        if(this[clickNumb] == 1 && this[AVNumb] == 0) {
            ++glob.AVNumb;
            glob.previous = this[current];
            //return 0;
        } else if (this[clickNumb] == 2 && this[AVNumb] == 1) {
            var clubName = prompt('How is it called?');
            if (clubName == 'Aston Villa') {
                alert('Right. Lets continue');
            } else {
                alert('Lets start again');
                location.reload();
                return 0;
            }
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            this[current].removeAttr('id');
            this[previous].removeAttr('id');
            glob.previous = null;
            glob.current = null;
            ++glob.mainCounter;
            if (glob.mainCounter >= 6) {
                forEnd();
            }
            //return 0;
        } else if (this[clickNumb] == 2 && this[AVNumb] == 0) {
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            setTimeout(function(){
                $(glob.current).attr('src', './img/АПЛ.jpg');
                $(glob.previous).attr('src', './img/АПЛ.jpg');
                glob.previous = null;
                glob.current = null;
            }, 2000);
            //return 0;
        }
    }

    function forArs(current, previous, clickNumb, arsNumb) {
        if(this[clickNumb] == 1 && this[arsNumb] == 0) {
            ++glob.arsNumb;
            glob.previous = this[current];
            //return 0;
        } else if (this[clickNumb] == 2 && this[arsNumb] == 1) {
            var clubName = prompt('How is it called?');
            if (clubName == 'Arsenal') {
                alert('Right. Lets continue');
            } else {
                alert('Lets start again');
                location.reload();
                return 0;
            }
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            this[current].removeAttr('id');
            this[previous].removeAttr('id');
            glob.previous = null;
            glob.current = null;
            ++glob.mainCounter;
            if (glob.mainCounter >= 6) {
                forEnd();
            }
            //return 0;
        } else if (this[clickNumb] == 2 && this[arsNumb] == 0) {
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            setTimeout(function(){
                $(glob.current).attr('src', './img/АПЛ.jpg');
                $(glob.previous).attr('src', './img/АПЛ.jpg');
                glob.previous = null;
                glob.current = null;
            }, 2000);
            //return 0;
        }
    }

    function forFulh(current, previous, clickNumb, fulhNumb) {
        if(this[clickNumb] == 1 && this[fulhNumb] == 0) {
            ++glob.fulhNumb;
            glob.previous = this[current];
            //return 0;
        } else if (this[clickNumb] == 2 && this[fulhNumb] == 1) {
            var clubName = prompt('How is it called?');
            if (clubName == 'Fulham') {
                alert('Right. Lets continue');
            } else {
                alert('Lets start again');
                location.reload();
                return 0;
            }
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            this[current].removeAttr('id');
            this[previous].removeAttr('id');
            glob.previous = null;
            glob.current = null;
            ++glob.mainCounter;
            if (glob.mainCounter >= 6) {
                forEnd();
            }
            //return 0;
        } else if (this[clickNumb] == 2 && this[fulhNumb] == 0) {
            glob.arsNumb = 0;
            glob.fulhNumb = 0;
            glob.clickNumb = 0;
            glob.AVNumb = 0;
            glob.LivNumb = 0;
            glob.MCNumb = 0;
            glob.EvNumb = 0;
            setTimeout(function(){
                $(glob.current).attr('src', './img/АПЛ.jpg');
                $(glob.previous).attr('src', './img/АПЛ.jpg');
                glob.previous = null;
                glob.current = null;
            }, 2000);
            //return 0;
        }
        return 0;
    }
});

function forEnd() {
    return location.href = 'finish.html';
}

function forFinish() {
    $('#body').replaceWith('<h1><font>Goodbay!</font></h1>');
    $('body h1').addClass('end');
}
