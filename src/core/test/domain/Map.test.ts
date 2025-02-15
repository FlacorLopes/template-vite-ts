import { describe, expect, it, suite } from "vitest";
import WebColMap from "../../domain/Map";

describe("Map.ts", () => {
	suite("Terrain", () => {
		it("deve inicializar o terreno", () => {
			const map = new WebColMap(100, 10);
			expect(map.terrainMatrix[0]?.length).toBe(100);
			expect(map.terrainMatrix.length).toBe(10);

			expect(map.terrainMatrix[0][0]?.coord.x).toBe(0);
			expect(map.terrainMatrix[0][0].coord.y).toBe(0);
			expect(map.terrainMatrix[9][0].coord.x).toBe(0)
			expect(map.terrainMatrix[9][0].coord.y).toBe(9)
		});
	});
});
