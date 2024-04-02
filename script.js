document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('search-button').addEventListener('click', function() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
      
        // Fetch data for the searched Pokémon
        fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}`)
          .then(response => response.json())
          .then(data => {
            const pokemonName = document.getElementById('pokemon-name');
            const pokemonId = document.getElementById('pokemon-id');
            const weight = document.getElementById('weight');
            const height = document.getElementById('height');
            const pokemonImage = document.getElementById('pokemon-image');
            const types = document.getElementById('types');
            const hp = document.getElementById('hp');
            const attack = document.getElementById('attack');
            const defense = document.getElementById('defense');
            const specialAttack = document.getElementById('special-attack');
            const specialDefense = document.getElementById('special-defense');
            const speed = document.getElementById('speed');
      
            if (data.error) {
              pokemonName.textContent = 'Pokémon not found';
            } else {
              pokemonName.textContent = `${data.name}`;
              pokemonId.textContent = `# ${data.id}`;
              weight.textContent = `Weight: ${data.weight}`;
              height.textContent = `Height: ${data.height}`;
            

              pokemonImage.innerHTML = '';
              types.innerHTML = '';
              
              // Create and set image element
              const imageElement = document.createElement('img');
              imageElement.src = data.sprites.front_default;
              imageElement.alt = data.name;
              pokemonImage.appendChild(imageElement);
              // Clear previous type values
            
            types.innerHTML = '';
            data.types.forEach(type => {
                const typeElement = document.createElement('span');
                typeElement.textContent = type.type.name;
                typeElement.classList.add("types");
                typeElement.classList.add(type.type.name);
                types.appendChild(typeElement);
            });
      
              // Fill in base stats
              hp.textContent = data.stats[0].base_stat;
              attack.textContent = data.stats[1].base_stat;
              defense.textContent = data.stats[2].base_stat;
              specialAttack.textContent = data.stats[3].base_stat;
              specialDefense.textContent = data.stats[4].base_stat;
              speed.textContent = data.stats[5].base_stat;
            }
          })
          .catch(error => console.error('Error fetching Pokémon data:', error));
      });
})
