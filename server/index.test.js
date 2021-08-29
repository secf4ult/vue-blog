const rewire = require("rewire")
const index = rewire("./index")
const start = index.__get__("start")
// @ponicode
describe("start", () => {
    test("0", async () => {
        await start()
    })
})
