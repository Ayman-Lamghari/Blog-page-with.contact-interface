// Sample pet data (replace with actual data)
const pets = [
    {
        name: 'alish',
        image: 'img/pets-img/tn_alish.jpg',
        description: 'Meet Alish, the cheerful and bouncy Golden Doodle. He was discovered as a stray, but his radiant personality and playful demeanor are sure to bring happiness to any family. Alish adores chasing after tennis balls and taking long walks in the park.',
        adoptionStatus: 'Available',
    },
    {
        name: 'Edson',
        image: 'img/pets-img/tn_edson.jpg',
        description: 'Edson the Shih Tzu: Edson, the adorable Shih Tzu, was found abandoned in a cardboard box. His endearing nature and charming appearance make him a delightful addition to any household. Edson loves gentle play and enjoys snuggling.',
        adoptionStatus: 'Available',
    },
    {
        name: 'David',
        image: 'img/pets-img/tn_david.jpg',
        description: 'David the Australian Kelpie: David, the intelligent Australian Kelpie, found his way to the shelter due to unforeseen circumstances. He\'s a hardworking and loyal dog, ready to be your partner in adventure and exploration.',
        adoptionStatus: 'Available',
    },
    {
        name: 'Hale',
        image: 'img/pets-img/tn_hale.jpg',
        description: 'Hale the Street Cat: Hale is a street-smart and resourceful feline who found his way to the shelter after navigating the urban jungle. He\'s developed a resilient and independent spirit and is now looking for a warm and loving forever home.',
        adoptionStatus: 'Available',
    }
    // Add more pets as needed
];

// Function to display pet listings
function displayPetListings() {
    const petList = document.getElementById('pet-list');

    pets.forEach((pet) => {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');

        const image = document.createElement('img');
        image.classList.add('pet-image');
        image.src = pet.image;
        image.alt = `${pet.name} - ${pet.adoptionStatus}`;

        const name = document.createElement('h2');
        name.textContent = pet.name;

        const description = document.createElement('p');
        description.textContent = pet.description;

        const status = document.createElement('p');
        status.textContent = `Adoption Status: ${pet.adoptionStatus}`;

        petCard.appendChild(image);
        petCard.appendChild(name);
        petCard.appendChild(description);
        petCard.appendChild(status);

        petList.appendChild(petCard);
    });
}

// Call the function to display pet listings when the page loads
window.onload = displayPetListings;
