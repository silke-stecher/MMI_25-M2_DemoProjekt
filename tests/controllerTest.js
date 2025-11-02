const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

describe('Temperatur‑Umwandlungen', () => {
    // TC‑TEMP‑001
    describe('celsiusToFahrenheit()', () => {
      const cases = [
        { c: 0,       f: 32 },
        { c: 100,     f: 212 },
        { c: -40,     f: -40 },
        { c: 37,      f: 98.6 },
        { c: 20.5,    f: 68.9 },
        { c: -273.15, f: -459.67 },
      ];
      cases.forEach(({c, f}) => {
        it('should convert '+c+'°C -> '+f+'°F', () => {
          const result = apiTemperature.celsiusToFahrenheit(c);
          expect(result).within(f-.01,f+.01);
        });
      });
    });
  
    // TC‑TEMP‑002 
    describe('fahrenheitToCelcius()', () => {
      const cases = [
        { f: 32,      c: 0 },
        { f: 212,     c: 100 },
        { f: -40,     c: -40 },
        { f: 98.6,    c: 37 },
        { f: 68.9,    c: 20.5 },
        { f: -459.67, c: -273.15 },
      ];
      cases.forEach(({f, c}) => {
        it('should convert '+f+'°F -> '+c+'°C', () => {
          const result = apiTemperature.fahrenheitToCelcius(f);
          expect(result).within(c-.01,c+.01);
        });
      });
    });
  });

describe("getGreetingDependOnTime()", () => {
    // TC‑GREET‑001 
    it("should return 'Guten Morgen' at 12:00", () => {
        const date = new Date("2020-01-01T12:00:00");
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal("Guten Morgen");
    });

    // TC‑GREET‑002
    it("should return 'Guten Abend' at 23:00", () => {
        const date = new Date("2020-01-01T23:00:00");
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal("Guten Abend");
    });
});