import { expect } from "chai";
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
    expect(updatedItems[0].name).to.equal("Aged Brie");
    expect(updatedItems[0].sellIn).to.equal(1);
    expect(updatedItems[0].quality).to.equal(6);
  });

  it("should update the quality and sell-in value for Backstage correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[1].name).to.equal(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(updatedItems[1].sellIn).to.equal(9);
    expect(updatedItems[1].quality).to.equal(22);
  });

  it("should update the quality and sell-in value for Sulfuras correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[2].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(updatedItems[2].sellIn).to.equal(0);
    expect(updatedItems[2].quality).to.equal(80);
  });

  it("should update the quality and sell-in value for Conjured correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[3].name).to.equal("Conjured Mana Cake");
    expect(updatedItems[3].sellIn).to.equal(3);
    expect(updatedItems[3].quality).to.equal(13);
  });

  it("should update the quality and sell-in value of default items correctly", () => {
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[4].name).to.equal("Normal Item");
    expect(updatedItems[4].sellIn).to.equal(4);
    expect(updatedItems[4].quality).to.equal(9);
  });
});
