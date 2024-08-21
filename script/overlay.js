function overlayLoadOn() {
    document.getElementById('overlayLoad').classList.remove('d_none');
    document.getElementById('content').classList.add('d_none');
    document.getElementById('footerOff').classList.add('footerLoad');
    document.getElementById('footerOff').classList.remove('footer');
}

function overlayLoadOff() {
    document.getElementById('overlayLoad').classList.add('d_none');
    document.getElementById('content').classList.remove('d_none');
    document.getElementById('footerOff').classList.remove('footerLoad');
    document.getElementById('footerOff').classList.add('footer');
}

function overlayLoadNewPkmOn() {
    document.getElementById('overlayLoadNewPkm').classList.remove('d_none');
    document.getElementById('overlayLoadNewPkm').classList.add('overlayNewP');
}

function overlayLoadNewPkmOff() {
    document.getElementById('overlayLoadNewPkm').classList.add('d_none');
    document.getElementById('overlayLoadNewPkm').classList.remove('overlayNewP');
}

function footer() {
    let footer = document.getElementById('footerOff');
    footer.classList.remove('footer');
    footer.classList.add('footerBig');
}

function footerOff() {
    let footer = document.getElementById('footerOff');
    footer.classList.add('footer');
    footer.classList.remove('footerBig');
}

function overlayCard(i) {
    let bigCard = document.getElementById('overlayContent');
    bigCard.classList.remove('d_none');
    bigCard.innerHTML = '';
    bigCard.innerHTML = templatePkmBig(i);
    let div = document.getElementById('cardcloseArea');
    div.addEventListener('click', (event) => {
        event.stopPropagation()
    })
}

function overlayCardClose() {
    let bigCard = document.getElementById('overlayContent');
    bigCard.classList.add('d_none');
}

function overlayCardFilter(i, newArray) {
    let bigCard = document.getElementById('overlayContent');
    bigCard.classList.remove('d_none');
    bigCard.innerHTML = '';
    bigCard.innerHTML = templatePkmBigFilter(i, newArray);
    let div = document.getElementById('cardcloseArea');
    div.addEventListener('click', (event) => {
        event.stopPropagation()
    })
}

function picFor(i) {
    let controll = pkmName.length;
    if (i + 1 == controll) {
        i = 0;
    } else { i++ }
    overlayCard(i);
}

function picBack(i) {
    let controll = pkmName.length;
    if (i == 0) {
        i = controll - 1;
    } else {
        i--
    }
    overlayCard(i);
}

function picForFilter(i) {
    let controll = newArrayFilter[0].length;
    if (i + 1 == controll) {
        i = 0;
    } else { i++ }
    overlayCardFilter(i);
}

function picBackFilter(i) {
    let controll = newArrayFilter[0].length;
    if (i == 0) {
        i = controll - 1;
    } else {
        i--
    }
    overlayCardFilter(i);
}