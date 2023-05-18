const Blog = () => {
  return (
    <div className="bg-color pb-5">
      <div ClassName="">
        <div className="container">
        
          <div className="">
            <h1 className="text-danger fw-bold text-center">
              {" "}
              Frequently Asked Questions
            </h1>
          </div>
          <div class="row row-cols-1 row-cols-md-2 g-2 mt-2">
            <div class="col rounded shadow p-3">
              <div class="card border border-0">
                <div class="card-body">
                  <h5 class="card-title text-primary">
                    Tell us the differences between uncontrolled and controlled
                    components.
                  </h5>
                  <p class="card-text">
                    Controlled components refer to components that have their
                    state and behavior controlled by the parent component. These
                    components rely on props passed down from the parent
                    component to update their state and behavior. Uncontrolled
                    components refer to components that manage their own state
                    internally.
                  </p>
                </div>
              </div>
            </div>
            <div class="col rounded shadow p-3">
              <div class="card border border-0">
                <div class="card-body">
                  <h5 class="card-title  text-primary">
                    How to validate React props using PropTypes?
                  </h5>
                  <p class="card-text">
                    React provides a library called PropTypes that allows you to
                    validate the props passed to your components. PropTypes
                    allows you to specify the data type and structure of the
                    props that your component expects, and will throw an error
                    in the console if the props passed to the component do not
                    match the specified data type or structure. To use PropTypes
                    in our React component, we need to import the PropTypes
                    module from the 'prop-types' package and then define the
                    propTypes property on our component.
                  </p>
                </div>
              </div>
            </div>
            <div class="col rounded shadow p-3">
              <div class="card border border-0">
                <div class="card-body">
                  <h5 class="card-title  text-primary">
                    Tell us the difference between nodejs and express js.
                  </h5>
                  <p class="card-text">
                    Node.js and Express.js are both popular technologies used
                    for building web applications in JavaScript. However, they
                    serve different purposes and have distinct functionalities.
                    NodeJS is an event-driven, non-blocking I/O model using
                    JavaScript as its main language. It helps to build scalable
                    network applications. Express is a minimal and flexible
                    Node. js web application framework that provides a robust
                    set of features for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>
            <div class="col rounded shadow p-3">
              <div class="card border border-0">
                <div class="card-body">
                  <h5 class="card-title  text-primary">
                    What is a custom hook, and why will you create a custom
                    hook?
                  </h5>
                  <p class="card-text">
                    In React, a custom hook is a JavaScript function that starts
                    with the prefix "use" and allows you to share logic between
                    components. A custom hook allows you to extract reusable
                    logic from a component, making your code more modular, and
                    making it easier to share functionality between different
                    components. We would create a custom hook to avoid code
                    duplication, increase reusability, and make our code more
                    maintainable.
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
