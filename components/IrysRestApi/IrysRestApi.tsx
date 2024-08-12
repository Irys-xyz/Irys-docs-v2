import React from "react"
import SwaggerUI, { SwaggerUIProps } from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import CustomLayoutPlugin from "./CustomLayoutPlugin"

interface IrysRestApiProps {
  tags: string[]
}

const IrysRestApi: React.FC<IrysRestApiProps> = ({ tags }) => {
  const customConfig: SwaggerUIProps = {
    docExpansion: "full",
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    deepLinking: true,
    layout: "CustomLayout",
    plugins: [CustomLayoutPlugin],
    filter: tags.join(","),
    url: "/restapi/irys-open-api.json"
  }

  return (
    <main className="prose prose-invert mx-auto py-8 w-full max-w-7xl">
      <SwaggerUI {...customConfig} />
    </main>
  )
}

export default IrysRestApi
