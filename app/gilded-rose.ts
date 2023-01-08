export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  incrementQuality(item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  decrementQuality(item, times) {
    for (let i = 0; i < times; i++) {
      if (item.quality > 0) {
        item.quality--;
      }
    }
  }

  updateItems = {
    "Aged Brie": (item) => {
      this.incrementQuality(item);
      item.sellIn--;
      if (item.sellIn < 0) {
        this.incrementQuality(item);
      }
    },
    "Backstage passes to a TAFKAL80ETC concert": (item) => {
      this.incrementQuality(item);
      if (item.sellIn < 11 || item.sellIn < 6) {
        this.incrementQuality(item);
      }
      item.sellIn--;
      if (item.sellIn < 0) {
        item.quality = item.quality - item.quality;
      }
    },
    "Sulfuras, Hand of Ragnaros": (item) => {},
    "Conjured Mana Cake": (item) => {
      this.decrementQuality(item, 2);
      if (item.sellIn < 0) {
        this.decrementQuality(item, 2);
      }
    },
    default: (item) => {
      this.decrementQuality(item, 1);
      item.sellIn--;
      if (item.sellIn < 0) {
        this.decrementQuality(item, 1);
      }
    },
  };

  updateQuality() {
    for (let item of this.items) {
      this.updateItems[item.name]
        ? this.updateItems[item.name](item)
        : this.updateItems.default(item);
    }

    return this.items;
  }
}
