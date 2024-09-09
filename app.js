document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title:'Projeto 1',
            description: 'Mario Jump',
            link: '/Mario Jump/index.html'
        },
        {
            title:'Projeto 2',
            description: 'Calculo teste',
            link: '/Calculadora-main/calculo2.html'
        },
        {
            title: 'Projeto 3',
            description: 'Descrição do Projeto 3',
            link: '/snake/snake-ia.html'
        },
        {
            title: 'Projeto 4',
            description: 'Descrição do Projeto 4',
            link: '#'
        },

    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link">Ver Projeto</a>
        `;
        projectList.appendChild(projectDiv);
    });
});


/*function btn() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function btn() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = 'MODO ESCURO';
    }
else {
    this.textContent = 'MODO CLARO';
}
    console.log('current class name: ' + className);
}); */

/*const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', currentTheme === 'claro' ? 'escuro' : 'claro');
}

document.querySelector('#btn').addEventListener('click', toggleTheme);*/


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Verifica se o modo escuro está ativado no localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            toggleButton.textContent = 'Modo Escuro';
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro';
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
});