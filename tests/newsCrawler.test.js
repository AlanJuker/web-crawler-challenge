import { NewsCrawler } from '../js/newsCrawler';
import { wordCounter } from '../js/utils';

describe('NewsCrawler Filters', () => {
  let crawler;

  beforeEach(() => {
    crawler = new NewsCrawler();
  });

  test('should extract entries correctly', async () => {
    const entries = await crawler.getEntries();

    expect(entries[0]).toHaveProperty('title');
    expect(entries[0]).toHaveProperty('rank');
    expect(entries[0]).toHaveProperty('points');
    expect(entries[0]).toHaveProperty('comments');
  });

  test('should correctly filter entries with more than five words in the title', async () => {
    const entries = await crawler.getEntries();
    const filtered = crawler.filterEntriesMoreThanFiveWords(entries);

    //Based on the mock data
    expect(filtered).toHaveLength(1);
    expect(filtered.every(e => wordCounter(e.title) > 5)).toBe(true);
  });

  test('should correctly filter entries with five or fewer words in the title', async () => {
    const entries = await crawler.getEntries();
    const filtered = crawler.filterEntriesFiveWordsOrLess(entries);

    expect(filtered).toHaveLength(1); // Adjust based on actual expected result
    expect(filtered.every(e => wordCounter(e.title) <= 5)).toBe(true);
  });
});
