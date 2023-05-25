import {expect,test} from "bun:test";

const TEST_API = 'https://jsonplaceholder.typicode.com/todos/1'

test("Bot can use network", () => {
  fetch(TEST_API)
      .then(response => response.json())
      .then(json => expect(json).toBe({}))
})

test("Bot can authorize to discord", () => {

})

