const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("Checking if inputted alphabet is valid", () => {
  it("should return false if inputted alphabet is not 26 characters long", () => {
  const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnmaaa")
  expect(actual).to.be.false;
    });
  });

describe("Checking if inputted alphabet is valid", () => {
  it("should return false if inputted alphabet is not 26 characters long", () => {
  const actual = substitution("message", "qwertyuiopasdfghjkl")
  expect(actual).to.be.false;
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
  const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
  const expected = "ykrrpik"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if inputted alphabet is valid", () => {
  it("should return false if there are any duplicate characters in the given alphabet.", () => {
  const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnq")
  expect(actual).to.be.false;
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should maintain spaces in the message when encoding", () => {
  const actual = substitution("a message", "plmoknijbuhvygctfxrdzeswaq");
  const expected = "p ykrrpik"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should maintain spaces in the message when decoding", () => {
  const actual = substitution("p ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
  const expected = "a message"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should ignore capital letters when encoding", () => {
  const actual = substitution("A Message", "plmoknijbuhvygctfxrdzeswaq");
  const expected = "p ykrrpik"
  expect(actual).to.eql(expected);
    });
  });// Write your tests here!
