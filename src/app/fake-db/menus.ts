const _GROUP_TYPE = "group";
const _ITEM_TYPE = "item";
const _SEPARATOR_TYPE = "separator";

export const menus = [
  {
    id: "file",
    title: "File",
    type: _GROUP_TYPE,
    children: [
      {
        id: "about-unoceros",
        title: "About Unoceros",
        type: _ITEM_TYPE,
        message: "about"
      },
      {
        id: "close-windows",
        title: "Close Windows",
        type: _ITEM_TYPE,
        message: "close-windows"
      },
      {
        id: "separator-1",
        title: "",
        type: _SEPARATOR_TYPE
      },
      {
        id: "quit",
        title: "Quit",
        type: _ITEM_TYPE,
        message: "quit-app"
      }
    ]
  },
  {
    id: "go",
    title: "Go",
    type: _GROUP_TYPE,
    children: [
      {
        id: "blogs",
        title: "Blogs",
        type: _ITEM_TYPE,
        message: "blogs"
      },
      {
        id: "company",
        title: "Company",
        type: _ITEM_TYPE,
        message: "company"
      },
      {
        id: "projects",
        title: "Projects",
        type: _ITEM_TYPE,
        message: "projects"
      },
      {
        id: "products",
        title: "Products",
        type: _ITEM_TYPE,
        message: "products"
      },
      {
        id: "legal",
        title: "Legal",
        type: _ITEM_TYPE,
        message: "legal"
      }
    ]
  },
  {
    id: "view",
    title: "View",
    type: _GROUP_TYPE,
    children: [
      {
        id: "full-screen",
        title: "Enter Fullscreen",
        type: _ITEM_TYPE,
        message: "full-screen"
      },
      {
        id: "change-background",
        title: "Change Background",
        type: _ITEM_TYPE,
        message: "background-setting"
      }
    ]
  },
  {
    id: "help",
    title: "Help",
    type: _GROUP_TYPE,
    children: [
      {
        id: "contact-us",
        title: "Contact Us",
        type: _ITEM_TYPE,
        message: "contact-us"
      }
    ]
  }
];

export const mobileMenus = [
  {
    id: "about",
    title: "About",
    type: _ITEM_TYPE,
    message: "about"
  },
  {
    id: "legal",
    title: "Legal",
    type: _ITEM_TYPE,
    message: "legal"
  },
  {
    id: "contact",
    title: "Contact",
    type: _ITEM_TYPE,
    message: "contact-us"
  }
];
