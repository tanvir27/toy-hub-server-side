const Blog = () => {
  return (
    <div className="bg-color py-5">
      <div ClassName="">
        <div className="container">
          <div className="">
            <h1 className="text-danger fw-bold mb-4 text-center">
              {" "}
              Frequently Asked Questions
            </h1>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-2 mt-2">
            <div className="col rounded shadow p-3">
              <div className="card border border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    What is an access token and refresh token? How do they work
                    and where should we store them on the client-side?
                  </h5>
                  <p className="card-text">
                    Access tokens are short-lived credentials used to access
                    protected resources, while refresh tokens are long-lived
                    credentials used to obtain new access tokens when the
                    current ones expire. Access tokens provide temporary
                    authorization, while refresh tokens allow for seamless
                    renewal of access tokens without requiring reauthentication.
                    It's recommended to store them securely on the client-side,
                    such as in secure HTTP-only cookies or in local storage with
                    appropriate security measures.
                  </p>
                </div>
              </div>
            </div>
            <div className="col rounded shadow p-3">
              <div className="card border border-0">
                <div className="card-body">
                  <h5 className="card-title  text-primary">
                    Compare SQL and NoSQL databases?
                  </h5>
                  <p className="card-text">
                    SQL databases are based on a structured schema, enforce data
                    integrity, use SQL as the query language, and support
                    relationships between tables. They are vertically scalable
                    and provide strong transactional support. NoSQL databases
                    offer flexibility in schema design, horizontal scalability,
                    use various query languages, and excel at handling large
                    amounts of data and high-performance operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col rounded shadow p-3">
              <div className="card border border-0">
                <div className="card-body">
                  <h5 className="card-title  text-primary">
                    What is express js? What is Nest JS ?
                  </h5>
                  <p className="card-text">
                    Express.js is a minimal and flexible web application
                    framework for Node.js. It provides a simple and intuitive
                    way to build web applications and APIs. It is lightweight,
                    unopinionated, and allows developers to handle HTTP
                    requests, define routes, and implement middleware. NestJS
                    follows the modular architecture pattern and provides
                    features like dependency injection, decorators, and powerful
                    CLI tools to simplify development and enhance code
                    maintainability. It is often used to build enterprise-grade
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col rounded shadow p-3">
              <div className="card border border-0">
                <div className="card-body">
                  <h5 className="card-title  text-primary">
                    What is MongoDB aggregate and how does it work
                  </h5>
                  <p className="card-text">
                    In MongoDB, the aggregate function is used to perform
                    advanced data aggregation operations on the data stored in a
                    collection. It allows you to process and transform
                    documents, perform calculations, and generate aggregated
                    results based on specified criteria. The aggregate function
                    works by taking an array of stages as input. Each stage
                    represents a specific operation or transformation that is
                    applied to the documents in the collection. The stages are
                    executed sequentially, and the output of one stage serves as
                    the input for the next stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
