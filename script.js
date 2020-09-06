// Array of haikus using constant reference to values.

const arrayOfHaikus = [
    {'haiku' : 'Blowing from the west\, Fallen leaves gather\, In the east\.',
    'author' : 'Yosa Buson'
    },
    {'haiku' : 'Consider me\, As one who loved poetry\, And persimmons\.',
    'author' : 'Masaoaka Shiki'
    },
    {'haiku' : 'Over the wintry\, Forest\, winds howl in rage\, With no leave to blow\.',
    'author' : 'Natsume Soseki'
    },
    {'haiku' : 'I kill an ant\, And realize my three children\, Have been watching\.',
    'author' : 'Kato Shuson'
    },
    {'haiku' : 'A world of dew\, And within every dewdrop\, A world of struggle\.',
    'author' : 'Kobayashi Issa'
    },
    {'haiku' : 'I write\, erase\, rewrite\, Erase again\, and then\, A poppy blooms\.', 
    'author' : 'Katsushika Hokusai'
    },
    {'haiku' : 'The taste\, Of rain\, \-\- Why kneel \?',
    'author' : 'Jack Kerouac'
    },
];

// Function declaration executed with the 'Read' button. Displays a random haiku from the array above.

function generateHaiku(){
    const random = Number.parseInt(Math.random()*arrayOfHaikus.length);
    document.querySelector('#haiku').textContent = `\"${arrayOfHaikus[random].haiku}\"`;
    document.querySelector('#author').textContent = `-${arrayOfHaikus[random].author}`;
}

// Event listener #1: Save to local storage

var textarea = document.getElementById("writeHaiku");
textarea.addEventListener('input', writeLocalStorage);

function writeLocalStorage() {
        localStorage.setItem("text", textarea.value);
}
 
 function readLocalStorage() {
    textarea.value = localStorage.getItem("text");
}

// Event listener #2: Check to see if "DOMContentLoaded" fires before the script runs

document.addEventListener("DOMContentLoaded", readLocalStorage);


