class Github{
    constructor()
    {
        this.client_id = '73844bd89d19238fe8a2';
        this.client_secret= 'af24e78bdedfe3f29f5d4ad15918888001629352';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client-secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repo = await repoResponse.json();
        return {
            profile,
            repo
        }
    }
}