async function setData(pokemon) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await result.json();

    let abilitiesArr = data.abilities.map((ability, i) =>
        ability.ability.name.replace("-", " ")).join(", ");

    pokeName.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
    pokeImg.src = data.sprites.front_default;
    pokeType.innerHTML = `<p>Type:</p><span>${data.types[0].type.name}</span>`;
    pokeHeight.innerHTML = `<p>Height:</p><span>${data.height}'</span>`;
    pokeWeight.innerHTML = `<p>Height:</p><span>${Math.floor(data.weight / 4.5)} kg</span>`;
    pokeAbility.innerHTML = `<p>Abilities:</p><span>${abilitiesArr}</span>`;

}

pokeBtn.addEventListener("click", e => {
    if (pokeInput.value != 0) {
        setData(pokeInput.value.toLowerCase());
    }
});



// Starting Functions
setData('entei');