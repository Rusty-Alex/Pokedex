function templatePkm(i) {
    return `    
     <div class="card">
            <div class="cardName"><span>#${pkmAttribute[i].id}</span> 
            <span>${pkmAttribute[i].forms[0].name.charAt(0).toUpperCase() + pkmAttribute[i].forms[0].name.slice(1)}</span></div>
            <div class="cardPic bg_${pkmAttribute[i].types[0].type.name}">
            <img onclick="overlayCard(${i})" class="PkmPic"src="${pkmAttribute[i].sprites.other['official-artwork'].front_default}" alt=""></div>
            <div class="pkmType"> <div class="type_${pkmTypes[i].type1}"></div><div class="type_${pkmTypes[i].type2}"></div></div>
            <div class="cardInfo_2"><span>HP: ${pkmAttribute[i].stats[0].base_stat}</span>
            <span>Attack: ${pkmAttribute[i].stats[1].base_stat}</span>            
            </div>
    </div>`
}

function templatePkmBig(i) {
    return ` 
    <div class="cardBig">
    <div id="cardcloseArea"   class="cardBigPkm">
            <div  class="cardNameBig"><span>#${pkmAttribute[i].id}</span> 
            <span>${pkmAttribute[i].forms[0].name.charAt(0).toUpperCase() + pkmAttribute[i].forms[0].name.slice(1)}</span></div>
            <div   class="cardPicBig bg_${pkmAttribute[i].types[0].type.name}">
            <img  class="PkmPicBig"src="${pkmAttribute[i].sprites.other['official-artwork'].front_default}" alt=""></div>
            <div class="pkmType"> <div class="type_${pkmTypes[i].type1} "></div> <div class="type_${pkmTypes[i].type2} "></div></div>
            <div class="cardInfoBig"><span>Weight: ${pkmAttribute[i].weight} KG </span>
            <span>HP: ${pkmAttribute[i].stats[0].base_stat}</span>
            <span>Attack: ${pkmAttribute[i].stats[1].base_stat}</span>
            <span>Defense: ${pkmAttribute[i].stats[2].base_stat}</span>
            <span>Special-Attack: ${pkmAttribute[i].stats[3].base_stat}</span>
            <span>Special-Defense: ${pkmAttribute[i].stats[4].base_stat}</span>
            </div>
           <div class="arrow">
    <div><img onclick="picBack(${i})" src="./assets/img/icons8-reply-arrow-50.png" alt=""></div>
    <div class="closeBtn"><div><img onclick="overlayCardClose()" src="./assets/img/icons8-close-64.png" alt="bild vom x"></div></div>
    <div><img onclick="picFor(${i})" src="./assets/img/icons8-forward-arrow-50.png" alt=""></div>
    </div>
            
    </div>
    </div> `
}

function templatePkmFilter(i, newArray) {
    return `    
     <div class="card">
    <div class="cardName">
        <span>#${newArray[i].id}</span>
        <span>${newArray[i].forms[0].name.charAt(0).toUpperCase() + newArray[i].forms[0].name.slice(1)}</span>
    </div>
    <div class="cardPic bg_${newArray[i].types[0].type.name}">
        <img onclick="overlayCardFilter(${i})" class="PkmPic"
            src="${newArray[i].sprites.other['official-artwork'].front_default}" alt="">
    </div>
    <div class="pkmType">
        <div class="type_${pkmTypesFilter[i].type1}"></div>
        <div class="type_${pkmTypesFilter[i].type2}"></div>
    </div>
    <div class="cardInfo_2"><span>HP: ${newArray[i].stats[0].base_stat}</span>
        <span>Attack: ${newArray[i].stats[1].base_stat}</span>
    </div>
    </div>`
}

function templatePkmBigFilter(i,) {
    return `
    <div class="cardBig">
    <div id="cardcloseArea" class="cardBigPkm">
        <div class="cardNameBig">
            <span>#${newArrayFilter[0][i].id}</span>
            <span>${newArrayFilter[0][i].forms[0].name.charAt(0).toUpperCase() +
        newArrayFilter[0][i].forms[0].name.slice(1)}</span>
        </div>
        <div class="cardPicBig bg_${newArrayFilter[0][i].types[0].type.name}">
            <img class="PkmPicBig" src="${newArrayFilter[0][i].sprites.other['official-artwork'].front_default}" alt="">
        </div>
        <div class="pkmType">
            <div class="type_${pkmTypesFilter[i].type1}"></div>
            <div class="type_${pkmTypesFilter[i].type2}"></div>
        </div>
        <div class="cardInfoBig"><span>Weight: ${newArrayFilter[0][i].weight} KG </span>
            <span>HP: ${newArrayFilter[0][i].stats[0].base_stat}</span>            
            <span>Attack: ${newArrayFilter[0][i].stats[1].base_stat}</span>
            <span>Defense: ${newArrayFilter[0][i].stats[2].base_stat}</span>
            <span>Special-Attack: ${newArrayFilter[0][i].stats[3].base_stat}</span>
            <span>Special-Defense: ${newArrayFilter[0][i].stats[4].base_stat}</span>
        </div>
        <div class="arrow">
    <div><img onclick="picBackFilter(${i})" src="./assets/img/icons8-reply-arrow-50.png" alt=""></div>
    <div class="closeBtn"><div><img onclick="overlayCardClose()" src="./assets/img/icons8-close-64.png" alt="bild vom x"></div></div>
    <div><img onclick="picForFilter(${i})" src="./assets/img/icons8-forward-arrow-50.png" alt=""></div>
    </div>
    </div>
</div>`
}