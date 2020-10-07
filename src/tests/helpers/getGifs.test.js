const { getGifs } = require("../../helpers/getGifs");

describe("getGifs fetch group", () => {
  test("should gives you 10 elements", async () => {
    const gifs = await getGifs("one punch");
    expect(gifs.length).toBe(10);
  });

  test("should gives you 0 elements if there are not params", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
