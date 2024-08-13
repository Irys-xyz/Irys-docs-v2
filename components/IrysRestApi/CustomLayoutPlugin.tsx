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

// Plugin to disable "Try it out" button for specific endpoints
const DisableTryItOutPlugin = () => {
  console.log("DisableTryItOutPlugin=");

  return {
    wrapComponents: {
      Operation: (Original: React.ComponentType<any>, { React }: any) => (props: any) => {
        const isDisabled = [
          "/account/balance/{currency}",
          "/account/approval"
          // Paths for which to hide the Try it out button
        ].includes(props.operationProps.path)
        console.log("DisableTryItOutPlugin=",props.operationProps.path);
        console.log({isDisabled})
        if (isDisabled) { 
          return <div>{props.operationProps.operation.operationId} (Try It Out disabled)</div>
        }

        return <Original {...props} />
      },
    },
  }
}

// Create the plugin that provides our layout component
const CustomLayoutPlugin = () => {
  return {
    components: {
      CustomLayout: CustomLayout,
    },
    plugins: [DisableTryItOutPlugin] 
  }
}

export default CustomLayoutPlugin
