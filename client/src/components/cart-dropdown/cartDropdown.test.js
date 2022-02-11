import { shallow } from "enzyme";
import CartDropdown from "./cartDropdown.component";
import * as reactRedux from "react-redux";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

it("Should render cartDropDown Component", () => {
  const mockedDispatch = jest.fn();
  const wrapper = shallow(<CartDropdown />);

  useDispatchMock.mockReturnValue(mockedDispatch);

  const mockCartItem = {
    name: "test name",
    price: 5,
    imageUrl: "test url",
    quantity: 1,
  };

  useSelectorMock.mockReturnValue(mockCartItem);

  expect.assertions(2);

  expect(mockedDispatch).not.toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});
