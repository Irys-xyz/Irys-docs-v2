import React from "react";

// Custom layout component
interface CustomLayoutProps {
  getComponent: (name: string, noThrow?: boolean) => React.ComponentType<any>;
}

class CustomLayout extends React.Component<CustomLayoutProps> {
  render() {
    const { getComponent } = this.props;
    const Operations = getComponent("operations", true);

    return (
      <div className="swagger-ui">
        <Operations />
      </div>
    );
  }
}


// Custom layout plugin
const CustomLayoutPlugin = () => {
  console.log("CustomLayoutPlugin initialized");

  return {
    components: {
      CustomLayout: CustomLayout,
    },
  };
};

export { CustomLayoutPlugin };
