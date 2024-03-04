const getGithubData = (q) => {
    return fetch(q);
}

const serverWorks = async (q) => {
    const serverReponse = await getGithubData(q);
    const body = await serverReponse.json(); 
    showAvatar(body.avatar_url)
    showName(body.name)
    const repositoriReponse = await fetch(body.repos_url);
    const repositories = await repositoriReponse.json();
    showRepos(repositories)
}
serverWorks('https://api.github.com/users/loogatip');

function showAvatar(avatarUrl) {
    const containerForAvatar = document.querySelector('#ava');
    const avatarElement = document.createElement('img');
    avatarElement.src = avatarUrl;
    containerForAvatar.append(avatarElement);
}

function showName(nameUrl) {
    const containerForName = document.querySelector('#info');
    const nameElement = document.createElement('h1');
    nameElement.textContent = nameUrl;
    containerForName.append(nameElement);
}
function showRepos(reposArray) {
    const containerForRepos = document.querySelector('#info');
    reposArray.forEach((element) => { 
        const nameElement = document.createElement('li');
        nameElement.textContent = element.name;
        containerForRepos.append(nameElement);
    })
}