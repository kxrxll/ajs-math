import MagicianOrDeamon from '../app';

test('case 1', () => {
  const char = new MagicianOrDeamon(100, 2);
  char.stoned = true;
  expect(char.attack).toBe(85);
});

test('case 2', () => {
  const char = new MagicianOrDeamon(100, 2);
  char.stoned = false;
  expect(char.attack).toBe(90);
});

test('case 2', () => {
  const char = new MagicianOrDeamon(90, 2);
  char.attack = 100;
  char.stoned = false;
  expect(char.attack).toBe(90);
});
