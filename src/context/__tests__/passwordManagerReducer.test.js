import { initialState } from "../../constants/constants";
import { passwordManagerReducer } from "../PasswordManagerReducer";
import * as actions from "../passwordManagerActions";
describe("Test in passwordManagerReducer", () => {
  let expectedState = initialState;

  it("Should be return the initial state", () => {
    const state = passwordManagerReducer(initialState, {});

    expect(state).toBe(expectedState);
  });

  it("Test in acceptConditionActions", () => {
    const state = passwordManagerReducer(
      initialState,
      actions.acceptConditionsAction(true)
    );
    expectedState.acceptConditions = true;

    expect(state).toEqual(expectedState);
  });

  it("Test in changeStepAction", () => {
    const currentstate = passwordManagerReducer(
      initialState,
      actions.changeStepAction(2)
    );

    expectedState.obtainedSteps = [];
    expectedState.currentStep = 2;

    expect(currentstate).toEqual(expectedState);
  });

  it("Test in changeFullSucceededAction", () => {
    const state = passwordManagerReducer(
      initialState,
      actions.changeFullSucceededAction(3)
    );
    expectedState.obtainedSteps = [3];
    expectedState.fullSucceeded = true;
    expectedState.currentStep = 3;

    expect(state).toEqual(expectedState);
  });
  it("Test in startLoading", () => {
    const state = passwordManagerReducer(initialState, actions.startLoading());
    expectedState.loading = true;

    expect(state).toEqual(expectedState);
  });
  it("Test in stopLoading", () => {
    let state = passwordManagerReducer(initialState, actions.startLoading());
    expectedState.loading = true;

    expect(state).toEqual(expectedState);

    state = passwordManagerReducer(initialState, actions.stopLoading());
    expectedState.loading = false;

    expect(state).toEqual(expectedState);
  });
});
