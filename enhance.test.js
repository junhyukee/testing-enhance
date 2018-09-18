const enhance = require('./enhance').enhance;

describe('enhance function', () => {
  describe('initialization', () => {
    test('item should start at 0', () => {
      expect(enhance.item).toBe(0);
    });
    test('fail should start at 0', () => {
      expect(enhance.fail).toBe(0);
    });
    test('durability should start at 100', () => {
      expect(enhance.durability).toBe(100);
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
      expect(enhance.enhance(0).fail).toBe(2);
      expect(enhance.enhance(0).item).toBe(7);
      expect(enhance.enhance(0).fail).toBe(4);
      expect(enhance.enhance(0).item).toBe(5);
      expect(enhance.enhance(0).fail).toBe(6);
    });
    test('failing an enhancement should increase fail count (varies if item>15)', () => {
      enhance.item = 'I';
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
      enhance.durability = 71;
      expect(enhance.repair().durability).toBe(81);
      expect(enhance.repair().durability).toBe(91);
      expect(enhance.repair().durability).toBe(100);
    });
  });
});
