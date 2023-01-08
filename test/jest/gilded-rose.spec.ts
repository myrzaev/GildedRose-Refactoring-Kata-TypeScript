import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  let gildedRose: GildedRose;

  beforeEach(() => {
    gildedRose = new GildedRose([
      new Item("Aged Brie", 2, 5),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Conjured Mana Cake", 3, 15),
      new Item("Normal Item", 5, 10),
    ]);
  });

  it("should update the quality and sell-in value for Aged Brie correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].name).toBe("Aged Brie");
    expect(updatedItems[0].sellIn).toBe(1);
    expect(updatedItems[0].quality).toBe(6);
  });

  it("should update the quality and sell-in value for Backstage correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[1].name).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(updatedItems[1].sellIn).toBe(9);
    expect(updatedItems[1].quality).toBe(22);
  });

  it("should update the quality and sell-in value for Sulfuras correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[2].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(updatedItems[2].sellIn).toBe(0);
    expect(updatedItems[2].quality).toBe(80);
  });

  it("should update the quality and sell-in value for Conjured correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[3].name).toBe("Conjured Mana Cake");
    expect(updatedItems[3].sellIn).toBe(3);
    expect(updatedItems[3].quality).toBe(13);
  });

  it("should update the quality and sell-in value of default items correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[4].name).toBe("Normal Item");
    expect(updatedItems[4].sellIn).toBe(4);
    expect(updatedItems[4].quality).toBe(9);
  });
});
