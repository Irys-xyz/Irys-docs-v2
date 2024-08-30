import React from "react";

// Custom layout component
interface CustomLayoutProps {
  getComponent: (name: string, noThrow?: boolean) => React.ComponentType<any>;
}

class CustomLayout extends React.Component<CustomLayoutProps> {
  render() {
    const { getComponent } = this.props;
    const Operations = getComponent("operations", true);
    const BaseLayout = getComponent("BaseLayout", true)

    return (
      <div className="swagger-ui">
        <Operations />
      </div>
    );
  }
}

// Simple test plugin to determine the current path
const SimpleTestPlugin = () => {
  console.log("SimpleTestPlugin initialized");

  return {
    wrapComponents: {
      Operation: (Original: React.ComponentType<any>) => (props: any) => {
        console.log({props})
        // Log the current path from the operation props
        const currentPath = props.operationProps.path;
        console.log("Current API path:", currentPath);

        // Render the original Operation component with all props
        return <Original {...props} />;
      },
    },
  };
};


// Custom layout plugin
const CustomLayoutPlugin = () => {
  console.log("CustomLayoutPlugin initialized");

  return {
    components: {
      CustomLayout: CustomLayout,
    },
  };
};

export { CustomLayoutPlugin, SimpleTestPlugin };
