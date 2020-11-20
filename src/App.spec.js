import { shallow, mount } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});
