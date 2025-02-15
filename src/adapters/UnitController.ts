import Phaser from "phaser";
import WebColMapAdapter from "./WebColMapAdapter";
import Unit from "../core/domain/Unit";

export default class UnitController {
	private scene: Phaser.Scene;
	private unit: Unit;
	private adapter: WebColMapAdapter;

	constructor(scene: Phaser.Scene, unit: Unit, adapter: WebColMapAdapter) {
		this.scene = scene;
		this.unit = unit;
		this.adapter = adapter;

		this.setupControls();
		this.adapter.renderUnit(this.unit)
	}

	private setupControls(): void {
		this.scene.input.keyboard?.on("keydown", (event: KeyboardEvent) => {
			let moved = false;
			switch (event.key) {
				case "ArrowUp":
					this.unit.move("up", 1);
					moved = true;
					break;
				case "ArrowDown":
					this.unit.move("down", 1);
					moved = true;
					break;
				case "ArrowLeft":
					this.unit.move("left", 1);
					moved = true;
					break;
				case "ArrowRight":
					this.unit.move("right", 1);
					moved = true;
					break;
			}
			if (moved) {
				this.adapter.renderUnit(this.unit);
			}
		});
	}
}
