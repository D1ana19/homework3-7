fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())  
.then(users => {
    const usersContainer = document.getElementById('users');  
    users.forEach(user => {
        const userDiv = document.createElement('div');  
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>ID:</strong> ${user.id}</p>
            <hr class="line">  
        `;
        usersContainer.appendChild(userDiv);  
    });
})
.catch(error => console.error('Ошибка при загрузке данных:', error)); 