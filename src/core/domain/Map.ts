export default class WebColMap {
	readonly terrainMatrix: Terrain[][] = [];
	constructor(readonly width: number, readonly height: number) {
		this.initializeTerrain();
	}

	private initializeTerrain() {
		const makeLine = (width: number, lineIndex: number): Terrain[] =>
			Array(width)
				.fill(width)
				.map((_, index) => ({
					coord: {
						x: index,
						y: lineIndex,
					},
					baseType: "water",
					type: 'ocean',
				}));

		for (let i = 0; i < this.height; i++) {
			this.terrainMatrix.push(makeLine(this.width, i));
		}
	}

	getTerrainByCoord(coord: Coord) {
		return this.terrainMatrix[coord.y][coord.x];
	}
	setTerrainProperty(coord: Coord, payload: Partial<Terrain>) {
		const targetTerrain = this.getTerrainByCoord(coord);
		Object.assign(targetTerrain, payload);
	}
}

export type Terrain = {
	coord: Coord;
	baseType: TerrainBaseType;
	type: TerrainType;
};

type TerrainBaseType = "water" | "land";
type TerrainType = "ocean" | "river" | "grass" | "desert";

export type Coord = { x: number; y: number };
