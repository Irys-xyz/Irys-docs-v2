import React from "react"

interface CustomLayoutProps {
  getComponent: (name: string, noThrow?: boolean) => React.ComponentType<any>
}

class CustomLayout extends React.Component<CustomLayoutProps> {
  render() {
    const { getComponent } = this.props

    // Get the necessary components
    const Operations = getComponent("operations", true)

    return (
      <div className="swagger-ui">
        {/* Only render the operations section */}
        <Operations />
      </div>
    )
  }
}

// Create the plugin that provides our layout component
const CustomLayoutPlugin = () => {
  return {
    components: {
      CustomLayout: CustomLayout,
    },
  }
}

export default CustomLayoutPlugin
