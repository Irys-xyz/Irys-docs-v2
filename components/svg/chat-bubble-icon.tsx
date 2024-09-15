import { SVGProps } from "react";

const ChatBubbleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 7H14M6 11H10M17.7165 20.0299V20.0299C18.5964 20.5578 19.0363 20.8218 19.3947 20.847C19.996 20.8893 20.5642 20.5676 20.8373 20.0302C21 19.71 21 19.1969 21 18.1708V9C21 6.19974 21 4.79961 20.455 3.73005C19.9757 2.78924 19.2108 2.02433 18.27 1.54497C17.2004 1 15.8003 1 13 1H9C6.19974 1 4.79961 1 3.73005 1.54497C2.78924 2.02433 2.02433 2.78924 1.54497 3.73005C1 4.79961 1 6.19974 1 9V11C1 13.8003 1 15.2004 1.54497 16.27C2.02433 17.2108 2.78924 17.9757 3.73005 18.455C4.79961 19 6.19974 19 9 19H13.9983C14.6103 19 14.9163 19 15.2154 19.0362C15.7122 19.0962 16.1972 19.2306 16.6542 19.4347C16.9293 19.5576 17.1917 19.715 17.7165 20.0299Z"
      stroke="#FF8451"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChatBubbleIcon;