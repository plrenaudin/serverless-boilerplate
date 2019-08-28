import PropTypes from "prop-types";
import fetcher from "../modules/fetcher";
import logger from "../modules/logger";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Index = ({ users = [] }) => (
  <>
    <h1>User list</h1>
    <UserList users={users} />
    <UserForm />
  </>
);

Index.propTypes = {
  users: PropTypes.array.isRequired
};

Index.getInitialProps = async ({ req }) => {
  let users = [];
  try {
    users = await fetcher("/api/users", {}, req ? req.headers : null);
  } catch (error) {
    logger.error("Couldn't fetch user list", error);
  }

  return { users };
};

export default Index;
