import { people, getByID } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getByID(id)
    }
};

export default resolvers;