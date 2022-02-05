import { shallow } from "enzyme";
import CheckoutItem from "./checkoutItem.component";
import * as reactRedux from "react-redux";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

it("Should render CheckoutItem Component", () => {
  const mockedDispatch = jest.fn();
  useDispatchMock.mockReturnValue(mockedDispatch);

  const mockCartItem = {
    name: "test name",
    price: 5,
    imageUrl: "test url",
    quantity: 1,
  };

  const wrapper = shallow(<CheckoutItem cartItem={mockCartItem} />);

  expect(wrapper).toMatchSnapshot();
});
