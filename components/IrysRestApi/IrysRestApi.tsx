import React, { useEffect } from "react";
import SwaggerUI, { SwaggerUIProps } from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { CustomLayoutPlugin } from "./CustomLayoutPlugin";
import openApiSpec from "./irys-open-api.json"; 

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

    const logTokenParameterField = () => {
      const tokenFields = document.querySelectorAll(
        ".parameter__name.required"
      );

      tokenFields.forEach((element) => {
        if (element.textContent?.trim() === "token *") {
          console.log("Token field found:", element.textContent?.trim());
          const linkElement = document.createElement("a");
          linkElement.href = "/build/d/features/supported-tokens";
          linkElement.textContent = "token";
          linkElement.target = "_blank";
          linkElement.classList.add("underline");

          element.textContent = "";
          element.appendChild(linkElement);
        }
      });
    };

    const observer = new MutationObserver(() => {
      disableTryItOutButtons();
      logTokenParameterField();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    disableTryItOutButtons();
    logTokenParameterField();

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const customConfig: SwaggerUIProps = {
    docExpansion: "list",
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    deepLinking: true,
    layout: "CustomLayout",
    plugins: [CustomLayoutPlugin],
    filter: tags.join(","),
    spec: openApiSpec, 
  };

  return (
    <main className="prose prose-invert mx-auto py-8 w-full max-w-7xl">
      <SwaggerUI {...customConfig} />
    </main>
  );
};

export default IrysRestApi;
