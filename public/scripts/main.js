if ('serviceWorker' in  navigator) {
    navigator.serviceWorker.register('/sw.js').then(function() {
        //
        // service worked registered
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var wtf = "=b!isfg>#nbjmup;bsnboep/cpshfAhnbjm/dpn#!ubshfu>#`cmbol#!ujumf>#Dpoubdu!Nf#!sfm>#oppqfofs!opsfgfssfs#?!!!!!!!!!!!!!!!!!!!!!!!!!!!!=j!dmbtt>#gbs!gb.fowfmpqf#?=0j?!!!!!!!!!!!!!!!!!!!!!!!!=0b?";
    var email = '';
    for (var i = 0; i < wtf.length; i++) {
        email += String.fromCharCode(wtf.charCodeAt(i) - 1);
    }
    document.getElementById('contactJS').innerHTML = email;
});
