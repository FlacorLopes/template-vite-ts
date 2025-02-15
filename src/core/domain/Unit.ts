import { Coord } from "./Map";

export default class Unit {
	constructor(readonly coord: Coord) {}

	move(direction: "up" | "down" | "left" | "right", amount: number) {
		switch (direction) {
			case "up":
				this.coord.y -= amount;
				break;
			case "down":
				this.coord.y += amount;
				break;
			case "left":
				this.coord.x -= amount;
				break;
			case "right":
				this.coord.x += amount;
				break;
		}
	}
}
