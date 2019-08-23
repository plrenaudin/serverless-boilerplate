import { findById, edit, deleteOne } from "models/users";

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
      response = await findById(req.query.id);
      break;

    case "PATCH":
      response = await edit(req.query.id, req.body);
      break;

    case "DELETE":
      response = await deleteOne(req.query.id);
      break;

    default:
      throw new Error(`Invalid method ${req.method}`);
  }
  res.json(response);
};

export default Controller;
