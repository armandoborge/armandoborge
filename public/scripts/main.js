const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

if ('serviceWorker' in  navigator) {
    if (!isLocalhost) {
        navigator.serviceWorker.register('/sw.js').then(function() {
            console.log('service worker registered')
        });
    }
    else {
        console.log('service worker not register for local development')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var wtf = "=b!isfg>#nbjmup;bsnboep/cpshfAhnbjm/dpn#!ubshfu>#`cmbol#!ujumf>#Dpoubdu!Nf#!sfm>#oppqfofs!opsfgfssfs#?!!!!!!!!!!!!!!!!!!!!!!!!!!!!=j!dmbtt>#gbs!gb.fowfmpqf#?=0j?!!!!!!!!!!!!!!!!!!!!!!!!=0b?";
    var email = '';
    for (var i = 0; i < wtf.length; i++) {
        email += String.fromCharCode(wtf.charCodeAt(i) - 1);
    }
    document.getElementById('contactJS').innerHTML = email;
});
