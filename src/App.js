import ControlledInputs from "./components/ControlledInputs";
import FormSubmits from "./components/FormSubmits";
import LiftingUpState from "./components/LiftingUpState";

export default function App() {
  return (
    <>
      <h1>React State 2</h1>
      <ControlledInputs />
      <hr />
      <FormSubmits />
      <hr />
      <LiftingUpState />
    </>
  );
}
