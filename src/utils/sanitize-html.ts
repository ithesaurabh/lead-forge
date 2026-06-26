import sanitizeHtml from "sanitize-html";

const sanitizeRichText = (html: string): string => {
  return sanitizeHtml(html, {
    allowedTags: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "br",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "ul",
      "ol",
      "li",
      "blockquote",
      "code",
      "pre",
      "a",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "div",
      "span",
      "hr",
    ],

    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "title", "width", "height"],
      "*": ["class"],
    },

    allowedSchemes: ["http", "https", "mailto"],

    allowedSchemesByTag: {
      img: ["http", "https"],
    },

    disallowedTagsMode: "discard",
  });
};

export default sanitizeRichText;