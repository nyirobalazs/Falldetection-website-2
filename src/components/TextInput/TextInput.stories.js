import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    size: {
      options: ["large", "medium"],
      control: { type: "select" },
    },
    state: {
      options: ["caption", "default", "success", "filled", "pressed", "typing", "error", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    message: "Here’s a hint that might help you.",
    content: "Text input content",
    label: "Text input label",
    size: "large",
    state: "caption",
    showIcon: true,
    className: {},
    loading: "https://c.animaapp.com/5n8oh5rl/img/loading-1.svg",
    divClassName: {},
  },
};
