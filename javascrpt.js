
document.getElementById('person-details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const personId = document.getElementById('person-id').value;
    

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `POST/api/person/${personId}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            displayPersonDetails(response);
        }
    };
    xhr.send();
});

function displayPersonDetails(person) {
    const personDetailsContainer = document.getElementById('person-details-container');
    personDetailsContainer.innerHTML = `
        <h3>Name: ${person.name}</h3>
        <p>Age: ${person.age}</p>
        <p>Address: ${person.address}</p>
       
    `;
}

document.getElementById('picture-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const pictureLink = document.getElementById('picture-link').value;

    
});