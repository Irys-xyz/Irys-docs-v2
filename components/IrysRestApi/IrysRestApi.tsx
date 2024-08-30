import React, { useEffect } from "react";
import SwaggerUI, { SwaggerUIProps } from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { CustomLayoutPlugin } from "./CustomLayoutPlugin";

interface IrysRestApiProps {
  tags: string[];
}

const IrysRestApi: React.FC<IrysRestApiProps> = ({ tags }) => {
  useEffect(() => {
    const disableTryItOutForPaths = [
      "/account/withdraw",
      "/tx",
      "/chunks/{token}/{txid}/{offset}",
    ];

    // Function to disable "Try it out" buttons
    const disableTryItOutButtons = () => {
      const opblockElements = document.querySelectorAll(
        ".opblock-summary-path[data-path]"
      );

      opblockElements.forEach((element) => {
        const dataPath = (element as HTMLElement).getAttribute("data-path");

        if (dataPath && disableTryItOutForPaths.includes(dataPath)) {
          const opblockContainer = element.closest(".opblock");
          if (opblockContainer) {
            opblockContainer.classList.add("hide-try-it-out");
          }
        }
      });
    };

    // Function to find and log the "token" parameter field
    const logTokenParameterField = () => {
      // Select the div with the "parameter__name" class that contains "token"
      const tokenFields = document.querySelectorAll(
        ".parameter__name.required"
      );

      tokenFields.forEach((element) => {
        if (element.textContent?.trim() === "token *") {
          console.log("Token field found:", element.textContent?.trim());
          const linkElement = document.createElement("a");
          linkElement.href = "/build/d/features/supported-tokens"; // Constant for the target URL
          linkElement.textContent = "token";
          linkElement.target = "_blank"; // Opens link in a new tab
          linkElement.classList.add("underline");

          // Replace the original text content with the link
          element.textContent = ""; // Clear existing text content
          element.appendChild(linkElement); // Append the link
        }
      });
    };

    // Create a MutationObserver to watch for changes in the Swagger UI DOM
    const observer = new MutationObserver(() => {
      disableTryItOutButtons();
      logTokenParameterField();
    });

    // Observe changes in the entire document body for any child addition or modification
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial calls to disable buttons and log the token input on the first render
    disableTryItOutButtons();
    logTokenParameterField();

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array

  const customConfig: SwaggerUIProps = {
    docExpansion: "list",
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    deepLinking: true,
    layout: "CustomLayout",
    plugins: [CustomLayoutPlugin],
    filter: tags.join(","),
    url: "/restapi/irys-open-api.json",
  };

  return (
    <main className="prose prose-invert mx-auto py-8 w-full max-w-7xl">
      <SwaggerUI {...customConfig} />
    </main>
  );
};

export default IrysRestApi;
