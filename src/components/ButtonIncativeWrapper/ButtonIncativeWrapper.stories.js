import { ButtonIncativeWrapper } from ".";

export default {
  title: "Components/ButtonIncativeWrapper",
  component: ButtonIncativeWrapper,
  argTypes: {
    button: {
      options: ["incative", "active", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    button: "incative",
    className: {},
  },
};
