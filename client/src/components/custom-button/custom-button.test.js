import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";

it("Should render Custom Button Component", () => {
  const mockProps = {
    children: "test children",
    color: "red",
  };
  const wrapper = shallow(<CustomButton {...mockProps} />);
  expect(wrapper.props().children).toEqual("test children");
  expect(wrapper.props().color).toEqual("red");
  expect(wrapper).toMatchSnapshot();
});
