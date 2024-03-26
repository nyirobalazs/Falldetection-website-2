import { ButtonPrimary } from ".";

export default {
  title: "Components/ButtonPrimary",
  component: ButtonPrimary,
  argTypes: {
    state: {
      options: ["default", "pressed", "focused", "hover", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "huge", "medium", "small"],
      control: { type: "select" },
    },
    iconPlacement: {
      options: ["icon-only", "left-justified", "no-icon", "right", "right-justified", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    content: "Button",
    state: "default",
    size: "large",
    iconPlacement: "icon-only",
    className: {},
  },
};
