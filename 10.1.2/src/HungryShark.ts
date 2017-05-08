import { Fish } from "./Fish";
import { Shark } from "./Shark";

export class HungryShark implements Shark {
  name: "hungry";
  teeth: 9001;
  canEat(fish: Fish) {
    return 12;
  }
  canSwim() {
    return true;
  }
}
