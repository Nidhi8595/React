# React

# Parcel

- Dev Build
- Local Server (Hosting)
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Faster Builds (Caching)
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagonistic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# JSX is HTML like syntax not (HTML inside JS)

- uses camelCase

# Babel transpiles JSX code

# JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

# React Element using JSX

- const jsxHeading = <h1>id="heading">Hey</h1>;

# React Component :-

- Class Based Component - OLD
- Functional Component - NEW (normal JS function)

  - const HeadingComponent = () => {
    return <h1>It's a Functionl component</h1>
    };

  - root.render(<HeadingComponent/>);

# Component Composition

- const Title = () => {
  return <h1 className="head" tabIndex="5" >React using JSX</h1>
  }

- const HeadingComponent = () => {
  return <div id="container">
  <Title/>
  <h1 className = "heading"> It's a functional Component</h1>
    </div>
  }

# In JSX, {} can contain any JS expression insode them

- const elem = <span>React Element </span>;

- const Title = (
  <h1 className="head" tabIndex ="5">
  {elem}
  React using JSX
  </h1>
  );
