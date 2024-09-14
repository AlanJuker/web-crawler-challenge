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

            const title = entry.querySelector('.titleline a')?.textContent.trim() || '';
            const rank = entry.querySelector('.rank')?.textContent.trim() || '';
            const points = nextElement.querySelector('.score')?.textContent.trim() || '';
            const comments = nextElement.querySelector('.subline a:last-of-type')?.textContent.trim() || ''; 

            entries.push({
                title,
                rank: parseInt(rank.replace(/[^0-9]/, '')) || 0,
                points: parseInt(points.replace(/[^0-9]/, '')) || 0,
                comments: parseInt(comments.replace(/[^0-9]/, '')) || 0
            });
        }

        return entries;
    }

    wordCounter(word) {
        return word.split(/[\s]/).length;
    }

    filterEntriesMoreThanFiveWords(entries) {
        return entries
            .filter(e => this.wordCounter(e.title) > 5)
            .sort((a, b) => b.comments - a.comments);
    }

    filterEntriesFiveWordsOrLess(entries) {
        return entries
            .filter(e => this.wordCounter(e.title) <= 5)
            .sort((a, b) => b.points - a.points);
    }
}

async function renderResults() {
    const crawler = new NewsCrawler();
    const entries = await crawler.getEntries();

    const filter1Results = crawler.filterEntriesMoreThanFiveWords(entries);
    const filter2Results = crawler.filterEntriesFiveWordsOrLess(entries);

    document.getElementById('filter1').innerHTML = filter1Results
        .map(entry => `
            <p>
                <strong>Comments:</strong> ${entry.comments}, 
                <strong>Rank:</strong> ${entry.rank}, 
                <strong>Title:</strong> ${entry.title}, 
                <strong>Points:</strong> ${entry.points}
            </p>`)
        .join('');

    document.getElementById('filter2').innerHTML = filter2Results
        .map(entry => `
            <p>
                <strong>Points:</strong> ${entry.points}, 
                <strong>Rank:</strong> ${entry.rank}, 
                <strong>Title:</strong> ${entry.title},  
                <strong>Comments:</strong> ${entry.comments}
            </p>`)
        .join('');
}

renderResults();