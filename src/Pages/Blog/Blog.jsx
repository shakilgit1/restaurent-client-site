import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="container mx-auto ">
      <Helmet>
        <title>Pizzan | Blog</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center my-8">Questions and Answers</h2>
      <div>
        <ul className="space-y-4">
          <h2 className="text-xl font-bold text-blue-500">
            What is One way data binding?
          </h2>
          <li>
            One-way data binding is a concept used in web development and user
            interface design, particularly in the context of frameworks and
            libraries like Angular, React, and Vue.js. It refers to the flow of
            data in a single direction, typically from a data source to the user
            interface, and not the other way around. In one-way data binding,
            changes in the data source are reflected in the user interface, but
            changes made in the user interface do not affect the data source.
            This approach helps maintain a clear and predictable data flow and
            can simplify the management of complex user interfaces.
          </li>
          <h2 className="text-xl font-bold text-blue-500">
          What is NPM in node.js?
          </h2>
          <li>
          NPM, which stands for Node Package Manager, is a package manager for the Node.js runtime environment. It is one of the most widely used package managers for JavaScript and Node.js applications. NPM is used for installing, managing, and sharing packages and dependencies (JavaScript libraries and tools) that are typically used in Node.js projects.
          </li>
          <div>
          <h2 className="text-xl font-bold text-blue-500 mb-4">
          Different between Mongodb database vs mySQL database
          </h2>
        <ul>
          <li>
            <strong>Data Model:</strong> MongoDB uses a document-based data model, while MySQL uses a tabular data model.
          </li>
          <li>
            <strong>Schema:</strong> MongoDB is schema-less, whereas MySQL enforces a predefined schema.
          </li>
          <li>
            <strong>Query Language:</strong> MongoDB uses a query language designed for document databases, while MySQL uses SQL.
          </li>
          <li>
            <strong>ACID Compliance:</strong> MongoDB is not inherently ACID compliant, while MySQL is known for its strong ACID compliance.
          </li>
          <li>
            <strong>Scaling:</strong> MongoDB is designed for horizontal scaling, while MySQL typically scales vertically.
          </li>
          <li>
            <strong>Use Cases:</strong> MongoDB is suitable for flexible data structures, while MySQL is used for traditional relational database use cases.
          </li>
          <li>
            <strong>Licensing:</strong> MongoDB is available under the Server Side Public License (SSPL) or a commercial license, while MySQL is available under the open-source GNU General Public License (GPL) or a commercial license.
          </li>
        </ul>
      </div>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
