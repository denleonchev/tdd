import { isTSAnyKeyword } from "@babel/types";

describe('Smoke test', () => {
  it('makes sure the welcome message is displayed', () => {
    cy
      .visit('http://localhost:1234')
      .contains('Hi there!!');
  });
});