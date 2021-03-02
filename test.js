import assert from "assert";
import test from "ava";
import * as buildingModule from "./Buildingmodule.js";

test("Test 1", (t) => {
    assert.strictEqual(typeof (buildingModule.Building), 'function');
    t.pass();
})