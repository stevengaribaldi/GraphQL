import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { schema } from "./schema";

describe("Mutation", () => {
  const testSchema = makeExecutableSchema({ typeDefs: schema });

  it("should add a client", async () => {
    const mutation = `
      mutation {
        addClient(name: "John Doe", email: "john@example.com", phone: "1234567890") {
          name
          email
          phone
        }
      }
    `;

    const expectedData = {
      addClient: {
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
      },
    };

    const result = await graphql(testSchema, mutation);
    expect(result.data).toEqual(expectedData);
  });

  it("should add a project", async () => {
    const mutation = `
      mutation {
        addProject(name: "Project A", description: "Sample project", status: "In Progress", clientId: "123") {
          name
          description
          status
          clientId
        }
      }
    `;

    const expectedData = {
      addProject: {
        name: "Project A",
        description: "Sample project",
        status: "In Progress",
        clientId: "123",
      },
    };

    const result = await graphql(testSchema, mutation);
    expect(result.data).toEqual(expectedData);
  });
});
