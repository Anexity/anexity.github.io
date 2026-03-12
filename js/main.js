var dc = "officialanexity"

function hideSocials() {
    document.getElementById("soc").classList.toggle('hidesocials');
    document.getElementById("tagS").classList.toggle('colorize')
}

function hideContact() {
    document.getElementById("cont").classList.toggle('hidecontacts');
    document.getElementById("contit").classList.toggle('colorize')
}

function CtC() {
    navigator.clipboard.writeText(dc);
}

async function popup() {
    document.getElementById("cop").style.display = 'flex';
    await new Promise(resolve => setTimeout(resolve, 5000));
    document.getElementById("cop").style.display = 'none'
}