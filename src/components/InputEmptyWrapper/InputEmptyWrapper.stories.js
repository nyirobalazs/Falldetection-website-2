import { InputEmptyWrapper } from ".";

export default {
  title: "Components/InputEmptyWrapper",
  component: InputEmptyWrapper,
  argTypes: {
    input: {
      options: ["filled", "empty"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    input: "filled",
    className: {},
    textInputContent: "jane.doe",
    textInputLabel: "Username",
  },
};
