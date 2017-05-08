import { YummyFish } from "../src/YummyFish";
import { HungryShark } from "../src/HungryShark";
import { assert } from "chai";

describe("HungryShark", function() {
  beforeEach(function() {
    this.fish = new YummyFish();
    this.shark = new HungryShark();
  })
  it("can eat a dozen fish", function() {
    assert.equal(this.shark.canEat(this.fish), 12);
  });
  it("can swim", function() {
    assert.isTrue(this.shark.canSwim());
  });
});