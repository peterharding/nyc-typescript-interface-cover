import { Fish } from "./Fish";

export interface Shark {
  name: string;
  teeth: number;
  canEat(fish: Fish): number;
  canSwim(): boolean;
}
