// Define a list of animals with associated numbers
const animals = {
    343: 'PAN LACTAL INTEGRAL MULTISEMILLA',
    24: 'PAN LACTAL NEGRO',
    161: 'PAN MIGA X 12',
    22: 'PAN MIGA X 6',
    28: 'PAN TOSTADAS',
    21: 'PAN VIENA',
    406: 'PDT POMELO LATA',
    371: 'PORCION BROWNIE DOBLE',
    370: 'PORCION BROWNIE SIMPLE',
    243: 'PORCION CHOCOTORTA DOBLE',
    132: 'PORCION CHOCTORTA SIMPLE',
    393: 'PORCION TIRAMISU BANDIJITA',
    392: 'PORCION TIRAMISU CHICO',
    402: 'PORCION TORTA',
    410: 'PORCION TORTA M L',
    178: 'POSTRE BROWNIE 10',
    116: 'POSTRE CHEESCAKE 14',
    240: 'POSTRE CHEESCAKE 10',
    118: 'POSTRE CHOCOTORTA 12',
    117: 'POSTRE CHOCOTORTA 6',
    412: 'POSTRE DOBLE',
    389: 'POSTRE IMPERIAL RUSO',
    115: 'POSTRE OREO 12',
    388: 'POSTRE TIRAMISU',
    409: 'POSTREB LINGOTES',
    26: 'PREPIZZA X3',
    25: 'PREPIZZETAS X2',
    332: 'PREPIZZETAS X2 A PRECIO DE COSTO',
    397: 'SANDWICH X2 JQ Y SQ 1000',
    340: 'SANDWICH X8 JQ Y SQ 500 C/U',
    252: 'SANDWICH X8 TQ 600 C/U',
    27: 'SEMOLADAS COMUNES CALAFATE',
    41: 'SEMOLADAS SEMILLAS',
    324: 'STRE CHOCOTORTA XL',
    236: 'SURTIDO BON O BON',
    248: 'SURTIDO ESPECIAL',
    347: 'SURTIDO GAROTO 2',
    348: 'SURTIDO NESTLE',
    238: 'SURTIDO ROCKLETS',
    237: 'SURTIDO SELECCION',
    130: 'TARTA B DOLCA 12',
    121: 'TARTA BB 12',
    122: 'TARTA CABSHA',
    127: 'TARTA CAYOTE 12',
    124: 'TARTA CHEESECAKE 12',
    123: 'TARTA CHOCOLINA 12',
    129: 'TARTA COCO 12',
    125: 'TARTA FRUTILLAS 12',
    126: 'TARTA IMPERIAL 12',
    128: 'TARTA LEMON PIE 12'
};

// Function to generate a random number between 1 and the number of animals
function generateRandomNumber() {
    const animalKeys = Object.keys(animals);
    const maxNumber = animalKeys.length;
    const randomIndex = Math.floor(Math.random() * maxNumber);
    return animalKeys[randomIndex];
}

function generateRandomAnimal() {
    const animalKeys = Object.keys(animals);
    const randomIndex = Math.floor(Math.random() * animalKeys.length);
    const randomAnimalKey = animalKeys[randomIndex];
    return animals[randomAnimalKey];
}

let randomNumber = generateRandomNumber();
let randomAnimal = generateRandomAnimal();
let animalMode = 'adivina el nombre';

// Get references to HTML elements
const animalDisplayElement = document.getElementById('animalDisplay');
const revealButton = document.getElementById('revealButton');
const refreshButton = document.getElementById('refreshButton');
const toggleButton = document.getElementById('toggleButton');
const modoDisplay = document.getElementById('modo');

// Function to display the random number associated with an animal
function displayRandomNumber() {
    animalDisplayElement.textContent = randomNumber;
}

function displayModo() {
    modoDisplay.textContent = animalMode;
}


function displayRandomAnimal() {
    animalDisplayElement.textContent = randomAnimal;
}

// Function to reveal the correct animal or number
function revealAnimal() {
    if (animalMode === 'adivina el nombre') {
        //const animalName = animals[randomNumber];
		const animalName = animals[randomNumber];
        animalDisplayElement.textContent = `${animalName}`;
    } else {
		// mostrar aqui la key the ${animalName}
        //animalDisplayElement.textContent = `${randomNumber}`;
        animalDisplayElement.textContent = getKeyByValue(randomAnimal); // REVISAR ESTA PARTE
    }
    revealButton.disabled = true; // Disable the "Reveal" button after revealing the animal
}

function getKeyByValue(value) {
  for (const [key, val] of Object.entries(animals)) {
    if (val === value) {
      return key;
    }
  }
  return null; // Return null if the value is not found
}

// Function to reset the game and start a new round
function refreshGame() {
    animalDisplayElement.textContent = ''; // Clear the displayed animal name or number
    revealButton.disabled = false; // Enable the "Reveal" button
    randomNumber = generateRandomNumber(); // Generate a new random number
	randomAnimal = generateRandomAnimal();
	if (animalMode === 'adivina el nombre') {
        displayRandomNumber();
    } else {
        displayRandomAnimal();
    }
	modoDisplay.textContent = animalMode;
     // Display the new random number associated with an animal
}

// Function to toggle between displaying the animal name and the animal code
/*function toggleMode() {
    if (animalMode === 'name') {
        animalMode = 'code';
        toggleButton.textContent = 'Switch to Animal Name';
    } else {
        animalMode = 'name';
        toggleButton.textContent = 'Switch to Animal Code';
    }
    refreshGame(); // Refresh the game to display the new mode
}*/

function toggleAnimals() {
  var toggle = document.getElementById("toggle");
  var animalText = document.getElementById("animal-text");
  var codeText = document.getElementById("code-text");
  
  if (toggle.checked) {
    // Code mode
	animalMode = 'adivina el codigo';
    animalText.style.display = "none";
    codeText.style.display = "block";
  } else {
    // Animal mode
	animalMode = 'adivina el nombre';
    codeText.style.display = "none";
    animalText.style.display = "block";
  }
  modoDisplay.textContent = animalMode;
  refreshGame();
}

// Display the initial random number associated with an animal
displayRandomNumber();
displayModo();
