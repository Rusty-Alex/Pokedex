let contentPkm = document.getElementById('content');
let contentFilter = document.getElementById('contentFilterArea');
let pkmName = [];
let pkmAttribute = [];
let pkmTypes = [];
let pkmTypesFilter = [];
let newArrayFilter = [];
let PkmIndex = 0;
let PkmHold = 20;
let pkmstart = 0;
let loadingNewPkm = false;
let loadingOff = document.getElementById('overlayPicNewPkm');
let loadingPkmOff = true;
let pkmInput = document.getElementById('inputSearchPkm');
let filterSearch = false;
let pkmInputValue = pkmInput.value.toLowerCase();
window.addEventListener('scroll', checkScrollLoadingPkm);

async function loadInit() {
    overlayLoadOn();
    await pkmNameLoad(20);
    loadPkmData();
    overlayLoadOff();
}

async function pkmNameLoad(startliste) {
    let pkmN = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${startliste}&offset=${pkmstart}`);
    let pkmNames = await pkmN.json();
    pkmName.push(...pkmNames.results);
    await pkmAttributeLoad(startliste);
}

async function pkmAttributeLoad(startliste) {
    let pkmN = pkmName.slice(PkmIndex, PkmIndex + startliste);
    for (let i = 0; i < pkmN.length; i++) {
        let pkmA = await fetch(pkmN[i].url);
        let pkmAttributes = await pkmA.json();
        pkmAttribute.push(pkmAttributes);
        pkmTypePic(pkmAttributes);
    }
}

function pkmTypePic(pokemon) {
    let type1 = pokemon.types[0].type.name;
    let type2 = pokemon.types[1] ? pokemon.types[1].type.name : '';
    let pokemonTypeInfo = {
        type1: type1,
        type2: type2
    };
    pkmTypes.push(pokemonTypeInfo);
}

function loadPkmData() {
    for (let i = PkmIndex; i < PkmIndex + PkmHold && i < pkmAttribute.length; i++) {
        contentPkm.innerHTML += templatePkm(i);
    }
    PkmIndex += PkmHold;
}

function filterPkm() {
    let pkmInputValue = pkmInput.value.toLowerCase();
    filterClean();
    if (pkmInputValue === '') {
        filterLoad();
    } else if (pkmInputValue.length >= 3) {
        Filter2(pkmInputValue);
        let newArray = pkmAttribute.filter(function (pkm) {
            return pkm.species.name.toLowerCase().includes(pkmInputValue);})
        newArrayFilter.push(newArray);
        for (let i = 0; i < newArray.length; i++) {
            pkmTypePicFilter(newArray, i);
            contentFilter.innerHTML += templatePkmFilter(i, newArray);}
    } else if (pkmInputValue.length >= 1) { filteroff(); footerOff(); }
}

function pkmTypePicFilter(newArray, i) {
    let type1 = newArray[i].types[0].type.name;
    let type2 = newArray[i].types[1] ? newArray[i].types[1].type.name : '';
    let pokemonTypeInfo = {
        type1: type1,
        type2: type2
    };
    pkmTypesFilter.push(pokemonTypeInfo);
}

function filterArrayEmpty() {
    newArrayFilter = [];
    pkmTypesFilter = [];
}

function filteroff() {
    filterSearch = false;
    contentPkm.classList.remove('d_none');
    contentFilter.classList.add('d_none');
    document.getElementById('searchFilterBackOff').classList.add('d_none'); 
}

function filterOn() {
    filterSearch = true;
    footer();
    contentFilter.classList.remove('d_none');
    filterArrayEmpty()
    contentFilter.innerHTML = '';
}

function filterClean() {
    document.getElementById('searchFilterBackOff').classList.remove('d_none');  
    contentPkm.classList.add('d_none');  
}

function filterLoad() {
    footerOff();
    filteroff();
    filterArrayEmpty();
}

function Filter2() {
    footer();
    contentFilter.classList.remove('d_none');
    filterArrayEmpty()
    contentFilter.innerHTML = '';
}

function filterEmptyInput() {
    pkmInput.value= '';
    filterPkm();
}

async function loadPkm() {
    loadingNewPkm = true;
    overlayLoadNewPkmOn();
    pkmstart += PkmHold;
    await pkmNameLoad(20);
    loadPkmData();
    overlayLoadNewPkmOff();
    loadingNewPkm = false;
}

function checkScrollLoadingPkm() {
    if (!filterSearch && !loadingNewPkm && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        loadPkm();
    }
}