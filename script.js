class NewsCrawler {
    constructor() {
        this.url = 'https://news.ycombinator.com/';
    }

    async fetchHtmlPage() {
        const response = await fetch(this.url);

        if (!response.ok) {
            console.error('Error fetching html content');
            return;
        }

        const htmlContent = await response.text();
        return new DOMParser().parseFromString(htmlContent, 'text/html');
    }

    async getEntries() {
        const htmlPage = await this.fetchHtmlPage();
        const entries = [];
        const htmlEntries = htmlPage.querySelectorAll('.athing');


        for (let i = 0; i < htmlEntries.length && i < 30; i++) {
            const entry = htmlEntries[i];
            const nextElement = entry.nextElementSibling;

            const title = entry.querySelector('.titleline a')?.textContent.trim();
            const rank = entry.querySelector('.rank')?.textContent.trim();
            const points = nextElement.querySelector('.score')?.textContent.trim();
            const comments = nextElement.querySelector('.subline a:last-of-type')?.textContent.trim();

            entries.push({
                title,
                rank: parseInt(rank.replace(/[^0-9]/, '')),
                points: parseInt(points.replace(/[^0-9]/, '')),
                comments: parseInt(comments.replace(/[^0-9]/, ''))
            });
        }

        return entries;
    }

    wordCounter(word) {
        return word.split(/[\s]/).length;
    }
}