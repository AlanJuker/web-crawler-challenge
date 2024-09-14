import {NewsCrawler} from './newsCrawler.js';

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