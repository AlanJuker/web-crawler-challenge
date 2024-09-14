class NewsCrawler {
    constructor() {
        this.url = 'https://news.ycombinator.com/';
    }

    async fetchHtmlPage() {
        const response = await fetch(url);

        if (!response.ok) {
            console.error('Error fetching html content');
            return;
        }

        const htmlContent = await response.text();
        return new DOMParser().parseFromString(htmlContent, 'text/html');
    }
}