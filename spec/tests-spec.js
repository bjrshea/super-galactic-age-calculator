describe('Galactic Age', function() {

  it('should calculate user age', function() {
    let userAge = new Date('1990,04,03')
    expect(mercuryAge.year).toEqual(1990);
    expect(mercuryAge.month).toEqual(04);
    expect(mercuryAge.day).toEqual(03);
  });
});
