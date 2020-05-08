import selectors from './selectors';

export const loadGitRepoInfo = () => {
    fetch('https://api.github.com/repos/Gurwinder91/myPortfolio')
        .then(response => response.json())
        .then(json => {
            const { stargazers_count, forks_count } = json;
            selectors.gitFork.textContent = forks_count;
            selectors.gitStars.textContent = stargazers_count;
        })
        .catch(e => console.error(e));
}