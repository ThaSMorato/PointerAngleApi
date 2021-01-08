const {calculateAngle} = require('./AngleService');

test('6 o clock', () => {
    expect(calculateAngle(6, 0)).toBe(180);
});
test('3 o clock', () => {
    expect(calculateAngle(3, 0)).toBe(90);
});
test('9 o clock', () => {
    expect(calculateAngle(9, 0)).toBe(90);
});
test('5:30', () => {
    expect(calculateAngle(5, 30)).toBe(15);
});
