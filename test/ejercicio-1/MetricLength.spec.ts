import "mocha";
import { expect } from "chai";
import { MetricLength } from "../../src/ejercicio-1/MetricLength";
import {ImperialLength} from "../../src/ejercicio-1/ImperialLength";

describe(" Tests MetricLength ", () => {
  let longitud : MetricLength = new MetricLength(26); // está en metros

  it("get metros()", () => {
    expect(longitud.metros).to.be.equal(26);
  });

  it("get centimetos()", () => {
    expect(longitud.centimetros).to.be.equal(2600);
  });

  it("get kilometros()", () => {
    expect(longitud.kilometros).to.be.equal(0.026000000000000002);
  });


});

describe(" Tests ImperialLength -> MetricLength ", () => {

    let 
  let longitud : MetricLength = new MetricLength(26); // está en metros

  it("get metros()", () => {
    expect(longitud.metros).to.be.equal(26);
  });

});