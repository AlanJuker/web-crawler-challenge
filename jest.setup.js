global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      text: () => Promise.resolve(`
        <!DOCTYPE html>
        <html>
         <body>
          <table>
            <tr class="athing">
              <td class="titleline">
                <a href="item?id=12345">Title with more than five words</a>
              </td>
              <td class="rank">1.</td>
            </tr>
            <tr>
              <td class="subline">
                <a href="item?id=12345" class="score">100 points</a>
                <a href="item?id=12345">10 comments</a>
              </td>
            </tr>
            <tr class="athing">
              <td class="titleline">
                <a href="item?id=12346">Title Two</a>
              </td>
              <td class="rank">2.</td>
            </tr>
            <tr>
              <td class="subline">
                <a href="item?id=12346" class="score">50 points</a>
                <a href="item?id=12346">5 comments</a>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `),
    })
  );
  