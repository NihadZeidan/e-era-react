import { shallow } from "enzyme";
import CollectionItems from "./collectionItem.component";
import * as reactRedux from "react-redux";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

it("Should render Custom Button Component", () => {
  const mockedDispatch = jest.fn();
  useDispatchMock.mockReturnValue(mockedDispatch);

  const mockItem = {
    name: "test name",
    price: 5,
    imageUrl: "test url",
  };

  const wrapper = shallow(<CollectionItems item={mockItem} />);

  expect.assertions(2);
  wrapper.find('[id="custom-button"]').simulate("click");
  expect(mockedDispatch).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});
