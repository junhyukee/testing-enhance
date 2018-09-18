const enhance = require('./enhance');

describe('enhance function', () => {
  describe('initialization', () => {
    const start = enhance.start();
    test('item should start at 0', () => {
      expect(start.item).toBe(0);
    });
    test('fail should start at 0', () => {
      expect(start.fail).toBe(0);
    });
    test('durability should start at 100', () => {
      expect(start.durability).toBe(100);
    });
  });
  describe('enhancement', () => {
    test('enhancement should increase item by 1', () => {
      expect(enhance.enhance(100).item).toBe(1);
      expect(enhance.enhance(100).item).toBe(2);
      expect(enhance.enhance(100).item).toBe(3);
    });
    test('enhancement should increase item by 1, represented by roman numerals >15', () => {
      enhance.item = 15;
      expect(enhance.enhance(100).item).toBe('I');
      expect(enhance.enhance(100).item).toBe('II');
      expect(enhance.enhance(100).item).toBe('III');
      expect(enhance.enhance(100).item).toBe('IV');
      expect(enhance.enhance(100).item).toBe('V');
    });
    test('enhancement should reset fail count', () => {
      enhance.fail = 100;
      enhance.item = 14;
      expect(enhance.enhance(100).fail).toBe(0);
    });
  });
  describe('fail', () => {
    test('failing an enhancement should increase fail count (1 if item<=15)', () => {
      enhance.item = 10;
      expect(enhance.enhance(0).item).toBe(9);
      expect(enhance.enhance(0).fail).toBe(1);
      expect(enhance.enhance(0).item).toBe(8);
      expect(enhance.enhance(0).fail).toBe(2);
      expect(enhance.enhance(0).item).toBe(7);
      expect(enhance.enhance(0).fail).toBe(3);
    });
    test('failing an enhancement should increase fail count (varies if item>15)', () => {
      enhance.item = 16;
      enhance.fail = 0;
      expect(enhance.enhance(0).item).toBe(15);
      expect(enhance.enhance(0).fail).toBe(2);
    });
    test('failing an enhancement should decrease durability by 5', () => {
      enhance.durability = 100;
      enhance.item = 15;
      expect(enhance.enhance(0).durability).toBe(95);
      expect(enhance.enhance(0).durability).toBe(90);
      expect(enhance.enhance(0).durability).toBe(85);
    });
  });
  describe('repair', () => {
    test('durability should increase by 10', () => {
      const repair = enhance.repair();
      expect(repair).toBe(100);
    });
  });
});
