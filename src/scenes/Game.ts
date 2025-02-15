import { Scene } from "phaser";
import WebColMap from "../core/domain/Map";
import WebColMapAdapter from "../adapters/WebColMapAdapter";
import Unit from "../core/domain/Unit";
import UnitController from "../adapters/UnitController";

export class Game extends Scene {
	camera!: Phaser.Cameras.Scene2D.Camera;
	background!: Phaser.GameObjects.Image;
	msg_text!: Phaser.GameObjects.Text;
	mapAdapter!: WebColMapAdapter;
	unitController!: UnitController;

	constructor() {
		super("Game");
	}

	create() {
		this.camera = this.cameras.main;
		this.camera.setBackgroundColor(0x00ff00);

		this.background = this.add.image(512, 384, "background");
		this.background.setAlpha(0.5);

		this.msg_text = this.add.text(
			512,
			384,
			"Make something fun!\nand share it with us:\nsupport@phaser.io",
			{
				fontFamily: "Arial Black",
				fontSize: 38,
				color: "#ffffff",
				stroke: "#000000",
				strokeThickness: 8,
				align: "center",
			}
		);
		this.msg_text.setOrigin(0.5);

		this.input.once("pointerdown", () => {
			// this.scene.start("GameOver");
		});

		const map = new WebColMap(25, 12); // Define o tamanho do mapa
		const unit = new Unit({ x: 1, y: 0 });

		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 5; x++) {
				map.setTerrainProperty({ x, y }, { type: "grass" });
			}
		}

		this.mapAdapter = new WebColMapAdapter(this, map);
		this.unitController = new UnitController(this, unit, this.mapAdapter);
		this.mapAdapter.render(); // Renderiza o mapa na cena
	}
}
