document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Projeto 1',
            description: 'Descrição do Projeto 1',
            link: ''
        },
        {
            title: 'Projeto 2',
            description: 'Descrição do Projeto 2',
            link: '#'
        },
        {
            title: 'Projeto 3',
            description: 'Descrição do Projeto 3',
            link: '#'
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Ver Projeto</a>
        `;
        projectList.appendChild(projectDiv);
    });
});


//function btn() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
//}
const switcher = document.querySelector('btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = 'Dark';
    }
else {
    this.textContent = 'light';
}
    console.log('current class name: ' + className);
});