import { shallow } from "enzyme";
import CartItem from "./cartItem.component";

it("Should render cartDropDown Component", () => {
  const mockCartItem = {
    name: "test name",
    price: 5,
    imageUrl: "test url",
    quantity: 1,
  };

  const wrapper = shallow(<CartItem item={mockCartItem} />);
  expect.assertions(2);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.exists()).toEqual(true);

});
