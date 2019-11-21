import formatDates from "./formatDates";

describe("formatDates", () => {
  it("returns a new array", () => {
    let result = formatDates([]);
    expect(result).toEqual([]);
  });
  it("formats the date of an array containing a single object", () => {
    let arrayOfOne = [
      {
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        article_id: 33,
        topic: "cooking",
        created_at: "2018-05-30T15:59:13.341Z",
        votes: 0,
        comment_count: "6"
      }
    ];
    let result = formatDates(arrayOfOne);
    let expected = [
      {
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        article_id: 33,
        topic: "cooking",
        created_at: "2018-05-30 15:59:13",
        votes: 0,
        comment_count: "6"
      }
    ];
    expect(result).toEqual(expected);
  });
  it("formats the date of an array of multile objects", () => {
    let arrayOfMany = [
      {
        author: "weegembump",
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: "football",
        created_at: "2018-04-16T19:29:32.774Z",
        votes: 0,
        comment_count: "6"
      },
      {
        author: "grumpy19",
        title:
          "The People Tracking Every Touch, Pass And Tackle in the World Cup",
        article_id: 18,
        topic: "football",
        created_at: "2018-03-28T03:03:58.717Z",
        votes: 0,
        comment_count: "8"
      },
      {
        author: "grumpy19",
        title:
          "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        article_id: 6,
        topic: "coding",
        created_at: "2018-03-14T10:27:39.137Z",
        votes: 0,
        comment_count: "11"
      }
    ];
    let result = formatDates(arrayOfMany);
    let expected = [
      {
        author: "weegembump",
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: "football",
        created_at: "2018-04-16 19:29:32",
        votes: 0,
        comment_count: "6"
      },
      {
        author: "grumpy19",
        title:
          "The People Tracking Every Touch, Pass And Tackle in the World Cup",
        article_id: 18,
        topic: "football",
        created_at: "2018-03-28 03:03:58",
        votes: 0,
        comment_count: "8"
      },
      {
        author: "grumpy19",
        title:
          "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        article_id: 6,
        topic: "coding",
        created_at: "2018-03-14 10:27:39",
        votes: 0,
        comment_count: "11"
      }
    ];
    expect(result).toEqual(expected);
  });
});
