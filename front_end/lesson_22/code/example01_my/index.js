
//  ---  для примера  ---
// const player = {
//     weight: 80,
//     height: 180,
// }
// console.log(player);
// console.log(typeof player);

// const jsonPlayer = JSON.stringify(player);
// console.log(jsonPlayer);
// console.log(typeof jsonPlayer);


//  создаем функцию, которая нам вернет промис с результатом запроса по адресу'q'
// fetch('https://api.github.com/users/kate8kate')

const getGithubData = (q) => {
    return fetch(q);
}
const githubDtaKate = getGithubData('https://api.github.com/users/kate8kate');
//console.log(githubDtaKate);

githubDtaKate
    .then((response) => {return response.json()})  // -> вернет промис
    .then((result) => {
        console.log(result)
        showAvatar(result.avatar_url);
        showName(result.name);
        // showRepos(result.repos_url);
        return result.repos_url;
})
    .then((repos) => {
        const githubDtaKateRepos = getGithubData(repos);
        githubDtaKateRepos
            .then((response) => {return response.json()})
            .then((result) => {
                //console.log(result)})
                console.log(result[0].name)})
})


function showAvatar(avatarUrl) {
    const containerForAvatar = document.querySelector('#ava');
    const avatarElement = document.createElement('img');
    avatarElement.src = avatarUrl;
    containerForAvatar.append(avatarElement);
}
//showAvatar('https://avatars.githubusercontent.com/u/153351347?v=4');

function showName(nameUrl) {
    const containerForName = document.querySelector('#info');
    const nameElement = document.createElement('h1');
    nameElement.textContent = nameUrl;
    containerForName.append(nameElement);
}

// function showRepos(reposUrl) {
//     const containerForRepos = document.querySelector('#info');
//     const reposElement = document.createElement('div');
//     reposElement.textContent = reposUrl;
//     containerForRepos.append(reposElement);
// }