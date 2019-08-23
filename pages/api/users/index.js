import { findAll, create } from "models/users";

/**
 * Users controller
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
const Controller = async (req, res) => {
  // GET /users
  let response;
  switch (req.method) {
    case "GET":
      response = await findAll();
      break;

    case "POST":
      response = await create(req.body);
      break;

    default:
      throw new Error(`Invalid method ${req.method}`);
  }
  res.json(response);
};

export default Controller;
