async function fetchHtmlPage() {
    const url = 'https://news.ycombinator.com/';
    const response = await fetch(url);

    if(!response.ok){
        console.error('Error fetching html content');
        return;
    }

    const text = await response.text();
    return new DOMParser().parseFromString(text, 'text/html');
}

fetchHtmlPage();