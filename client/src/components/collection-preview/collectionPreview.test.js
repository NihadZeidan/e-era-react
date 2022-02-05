import { shallow } from "enzyme";
import CollectionPreview from "./collectionPreview.component";

it("Should render CollectionPreview component", () => {
  const mockTitle = "test title";
  const mockItems = [
    { id: 1, name: "test name", imageUrl: "test imageUrl", price: 10 },
  ];
  expect(
    shallow(<CollectionPreview title={mockTitle} items={mockItems} />)
  ).toMatchSnapshot();
});
