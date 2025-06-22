const state = {
    view: {
        form: document.querySelector('#heroForm'),
        heroName: document.querySelector('#name'),
        heroXP: document.querySelector('#xp'),
        result: document.querySelector('#result'),  
    }, 
    values: {
        classification: 0
    }
}


function calculateClassification() {
    const xp = parseInt(state.view.heroXP.value);
    let classification = '';
    console.log('Calculating classification for XP:',xp);

    if (xp < 1000) {
        classification = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        classification = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        classification = 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        classification = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        classification = 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        classification = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        classification = 'Imortal';
    } else if (xp > 10000) {
        classification = 'Radiante';
    }

    state.values.classification = classification;
}

function displayResult() {
    const name = state.view.heroName.value;
    const classification = state.values.classification;

    if (name && classification) {
        state.view.result.textContent = `O herói ${name} é classificado como ${classification}.`;
    } else {
        state.view.result.textContent = 'Por favor, preencha todos os campos.';
    }
}

function handleSubmit(event) {
    console.log('Form submitted');
    event.preventDefault();
    calculateClassification();
    displayResult();
}

state.view.form.addEventListener('submit', handleSubmit);