import { shallow } from "enzyme";
import Header from "./header.component";
import * as reactRedux from "react-redux";

const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useSelectorMockTwo = jest.spyOn(reactRedux, "useSelector");
let wrapper;

describe("Header when the user is present", () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    const currentUserMock = {
      id: "11111",
      email: "test@gmail.com",
      displayName: "test",
    };
    useSelectorMock.mockReturnValue(currentUserMock);

    const dispatchMock = jest.fn();
    useDispatchMock.mockReturnValue(dispatchMock);

    wrapper = shallow(<Header />);
  });
  it("Should render Header Component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render Contact when there is no user", () => {
    expect(wrapper.find("Link").at(1).text()).toEqual("CONTACT");
  });

  it("Should render SHOP when there is no user", () => {
    expect(wrapper.find("Link").at(2).text()).toEqual("SHOP");
  });

  it("Should render sign-out when there is a user", () => {
    expect(wrapper.find('[id="signOut"]').text()).toEqual(" SIGN OUT ");
  });

  it("Should call Sign out method when clicked", () => {
    wrapper.find('[id="signOut"]').simulate("click");
    expect(useDispatchMock).toHaveBeenCalled();
  });
});

describe("Header when the user is null", () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useSelectorMockTwo.mockClear();
    const currentUserMock = null;
    const hidden = false;

    useSelectorMockTwo.mockReturnValue(hidden);
    useSelectorMock.mockReturnValue(currentUserMock);

    const dispatchMock = jest.fn();
    useDispatchMock.mockReturnValue(dispatchMock);

    wrapper = shallow(<Header />);
  });
  it("Should render Header Component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render Contact when there is no user", () => {
    expect(wrapper.find("Link").at(1).text()).toEqual("CONTACT");
  });

  it("Should render SHOP when there is no user", () => {
    expect(wrapper.find("Link").at(2).text()).toEqual("SHOP");
  });
  it("Should render sign-in when there is no user", () => {
    expect(wrapper.find("Link").at(3).text()).toEqual("SIGN IN");
  });

  it("Should render Register when there is no user", () => {
    expect(wrapper.find("Link").at(4).text()).toEqual("REGISTER");
  });

  it("Should not find sign-out button", () => {
    expect(wrapper.find('[id="signOut"]').exists()).toBe(false);
  });

  it("Should find CartIcon component", () => {
    expect(wrapper.find("CartIcon").exists()).toBe(true);
  });
});
