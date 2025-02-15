import { Terrain } from "./../core/domain/Map";
import Phaser from "phaser";
import WebColMap from "../core/domain/Map";
import Unit from "../core/domain/Unit";

export default class WebColMapAdapter {
	private unit!: Phaser.GameObjects.Graphics;
	private terrainColors: Record<string, number> = {
		ocean: 0x0000ff,
		river: 0x1e90ff,
		grass: 0x00ff00,
		desert: 0xffd700,
	};

	constructor(
		private scene: Phaser.Scene,
		private map: WebColMap,
		private tileSize: number = 64,
		public showGrid: boolean = true
	) {}

	public render(): void {
		this.map.terrainMatrix.forEach((row) => {
			row.forEach((tile: Terrain) => {
				const color = this.terrainColors[tile.type] || 0x0000ff;
				const graphics = this.scene.add.graphics();
				graphics.fillStyle(color, 1);
				graphics.fillRect(
					tile.coord.x * this.tileSize,
					tile.coord.y * this.tileSize,
					this.tileSize,
					this.tileSize
				);

				if (this.showGrid) {
					graphics.lineStyle(1, 0x000000, 0.4);
					graphics.strokeRect(
						tile.coord.x * this.tileSize,
						tile.coord.y * this.tileSize,
						this.tileSize,
						this.tileSize
					);
				}
			});
		});
	}

	public renderUnit(unit: Unit): void {
		if (this.unit) this.unit.destroy();
		this.unit = this.scene.add.graphics();
		this.unit.fillStyle(0xff0000, 1);
		this.unit.fillRect(
			unit.coord.x * this.tileSize,
			unit.coord.y * this.tileSize,
			this.tileSize,
			this.tileSize
		);
	}
}
