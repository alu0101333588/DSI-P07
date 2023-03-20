import "mocha";
import { expect } from "chai";
import { ImperialMass } from "../../src/ejercicio-1/ImperialMass";

describe(" Tests ImperialMass ", () => {
  let masa : ImperialMass = new ImperialMass(26);

  it("get libras()", () => {
    expect(masa.libras).to.be.equal(26);
  });

  it("get onzas()", () => {
    expect(masa.onzas).to.be.equal(416);
  });

  it("get piedras()", () => {
    expect(masa.piedras).to.be.equal(1.8200000000000003);
  });

  it("get centenas()", () => {
    expect(masa.centenas).to.be.equal(0.23214282);
  });

  it("get toneladas()", () => {
    expect(masa.toneladas).to.be.equal(0.011793392);
  });


});
