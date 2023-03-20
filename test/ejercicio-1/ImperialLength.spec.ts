import "mocha";
import { expect } from "chai";
import { ImperialLength } from "../../src/ejercicio-1/ImperialLength";

describe(" Tests ImperialLength ", () => {
  let longitud : ImperialLength = new ImperialLength(26);

  it("get yardas()", () => {
    expect(longitud.yardas).to.be.equal(0.7222227999999999);
  });

  it("get pulgadas()", () => {
    expect(longitud.pulgadas).to.be.equal(26);
  });

  it("get pies()", () => {
    expect(longitud.pies).to.be.equal(2.1666658);
  });

  it("get millas()", () => {
    expect(longitud.millas).to.be.equal(41.0358);
  });


});
