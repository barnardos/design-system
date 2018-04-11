import slugify from "slugify";

export default node =>
  slugify(node.toString().toLowerCase(), {
    remove: /[$*_+~.,()'"!\-/:@]/g
  });
