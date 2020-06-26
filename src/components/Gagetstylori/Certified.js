import React from "react";

export const Certified = (props) => {
    // height="500"
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="75"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 500 500"
      xmlSpace="preserve"
    >
      <circle cx="250.151" cy="258.705" r="164.253" fill={props.color}></circle>
      <g fill="#606262">
        <path d="M48.211 234.66l.129-.033c3.1.165 5.545 1.35 7.336 3.554 1.793 2.205 2.563 5.071 2.309 8.601-.254 3.571-1.662 6.387-4.225 8.449-2.561 2.063-5.713 2.959-9.451 2.692l-5.818-.416c-3.725-.267-6.717-1.588-8.975-3.967s-3.262-5.333-3.008-8.862c.258-3.613 1.41-6.393 3.457-8.335 2.047-1.944 4.67-2.773 7.873-2.488l.123.051-.354 4.936c-2.057-.147-3.701.296-4.93 1.327-1.229 1.03-1.918 2.632-2.074 4.802-.15 2.087.557 3.802 2.121 5.146 1.563 1.343 3.59 2.104 6.08 2.283l5.855.419c2.52.18 4.648-.297 6.389-1.434 1.742-1.134 2.688-2.767 2.84-4.896.152-2.114-.299-3.759-1.352-4.932s-2.611-1.834-4.678-1.981l.353-4.916zM51.971 200.97l-3.33 12.996 9.385 2.404 3.863-15.077 3.979 1.02-5.133 20.033-29.705-7.61 5.098-19.891 3.979 1.019-3.826 14.935 8.385 2.148 3.328-12.995 3.977 1.018zM60.705 180.569l11.551 5.329-2.145 4.647L42.27 177.7l4.746-10.288c1.436-3.111 3.244-5.191 5.43-6.24 2.184-1.048 4.576-.973 7.178.227 1.441.666 2.508 1.609 3.203 2.834.695 1.226 1.025 2.697.992 4.413 1.221-1.339 2.553-2.093 4-2.26 1.445-.169 2.99.127 4.635.886l2.314 1.067c.814.377 1.658.642 2.531.797.871.155 1.623.084 2.256-.212l.439.204-2.207 4.78c-.656.316-1.471.338-2.443.067a18.231 18.231 0 01-2.76-1.006l-2.236-1.032c-1.428-.659-2.75-.774-3.969-.347-1.217.429-2.156 1.356-2.814 2.784l-2.86 6.195zm-3.728-1.72l2.488-5.392c.859-1.861 1.129-3.383.807-4.567-.318-1.184-1.211-2.114-2.678-2.79-1.402-.647-2.695-.734-3.881-.261-1.186.475-2.174 1.572-2.969 3.292l-2.604 5.641 8.837 4.077zM76.582 126.192l-5.295 7.605 21.795 15.173-2.924 4.201-21.795-15.174-5.295 7.604-3.369-2.346 13.514-19.409 3.369 2.346zM110.357 128.091l-3.48 3.751-22.48-20.854 3.48-3.751 22.48 20.854zM127.471 95.335l-10.428 8.475 8.248 10.149-3.973 3.227L101.98 93.39l16.066-13.055 2.59 3.186-12.094 9.829 5.908 7.273 10.43-8.474 2.591 3.186zM152.826 94.509l-4.385 2.637-15.795-26.283 4.385-2.635 15.795 26.281zM178.088 67.184L165.73 72.4l3.766 8.925 14.34-6.052 1.596 3.783-19.053 8.044-11.924-28.25 18.918-7.985 1.596 3.783-14.201 5.996 3.365 7.975 12.359-5.218 1.596 3.783zM197.367 75.323l-6.656-29.932 9.705-2.158c3.797-.843 7.146-.345 10.053 1.498 2.904 1.843 4.771 4.628 5.6 8.356l1.01 4.543c.832 3.742.32 7.056-1.533 9.941-1.854 2.887-4.678 4.751-8.475 5.595l-9.704 2.157zm-.767-27.035l4.871 21.916 4.564-1.015c2.48-.552 4.252-1.793 5.311-3.725 1.059-1.931 1.305-4.176.734-6.737l-1.018-4.581c-.564-2.533-1.734-4.45-3.512-5.75-1.779-1.3-3.908-1.675-6.389-1.124l-4.561 1.016zM267.109 38.255l5.111.3-1.279 21.759c-.168 2.859-1.213 5.069-3.133 6.63-1.92 1.562-4.309 2.257-7.17 2.09-3.068-.181-5.455-1.087-7.16-2.721-1.703-1.633-2.434-3.919-2.191-6.858l.049-.125 4.941.291c-.102 1.732.256 3.026 1.068 3.887.814.86 1.994 1.335 3.535 1.426 1.346.079 2.484-.324 3.416-1.21.93-.888 1.441-2.129 1.535-3.727l1.278-21.742zM306.24 62.071l-13.063-3.061-2.209 9.433 15.152 3.55-.936 3.999-20.137-4.717 6.994-29.855 19.992 4.684-.938 3.998-15.01-3.517-1.973 8.428 13.061 3.06-.933 3.998zM327.174 75.35l-.018.038.064-.087 15.018-17.749 3.705 1.723-3.875 23.005-.043.142.107-.182 13.854-18.292 4.563 2.124-19.541 24.727-4.221-1.964 3.729-22.539-.115-.053-14.859 17.359-4.24-1.972 6.35-30.866 4.564 2.123-5.042 22.463zM380.947 101.025l-10.764-8.007-5.783 7.772 12.486 9.29-2.451 3.295-16.594-12.344 18.305-24.603 16.473 12.257-2.449 3.295-12.369-9.202-5.168 6.945 10.764 8.007-2.45 3.295zM390.201 122.758l9.748 10.172-2.967 2.841-13.287-13.868 22.141-21.214 3.541 3.696-19.176 18.373zM410.938 147.453l7.955 11.627-3.389 2.32-10.846-15.851 25.305-17.316 2.891 4.223-21.916 14.997zM441.764 183.331l-5.604-12.188-8.801 4.046 6.502 14.141-3.732 1.715-8.641-18.79 27.859-12.812 8.578 18.656-3.73 1.717-6.439-14.007-7.865 3.616 5.604 12.189-3.731 1.717zM447.836 204.679l-12.326 3.14-1.264-4.959 29.715-7.567 2.797 10.979c.844 3.32.75 6.075-.287 8.267-1.035 2.19-2.941 3.639-5.717 4.346-1.537.392-2.963.332-4.273-.183-1.311-.513-2.494-1.446-3.549-2.801-.104 1.809-.666 3.234-1.682 4.275-1.018 1.042-2.404 1.786-4.158 2.232l-2.471.629c-.871.222-1.693.548-2.467.977-.775.428-1.314.957-1.619 1.585l-.469.119-1.299-5.101c.311-.659.928-1.19 1.855-1.592a18.331 18.331 0 012.775-.957l2.389-.608c1.523-.389 2.623-1.133 3.301-2.231.676-1.1.82-2.412.432-3.935l-1.683-6.615zm3.978-1.013l1.467 5.755c.506 1.986 1.256 3.338 2.25 4.055.994.718 2.273.877 3.838.479 1.496-.381 2.555-1.129 3.178-2.244.621-1.114.697-2.59.23-4.427l-1.533-6.021-9.43 2.403zM458.197 246.554l15.404 6.326.406 5.693-20.609-9.185-10.736.771-.363-5.083 11.006-.791 18.828-11.845.41 5.693-14.346 8.421z"></path>
      </g>
      <g fill="#FFF">
        <path d="M181.105 274.265c2.798-6.932-1.125-11.645-7.799-15.126-1.656-.864-3.074-2.173-4.67-3.169-3.848-2.401-5.146-5.361-2.246-9.358.122-.169.227-.353.324-.537 9.012-16.917 9.246-10.516-.076-27.288-2.581-4.644-2.467-7.901 2.41-10.204 10.089-4.763 14.76-11.976 11.934-23.44-1.417-5.749.98-9.327 7.479-9.187 11.148.242 17.776-5.083 20.038-16.083 1.259-6.121 5.115-7.87 10.7-5.1 9.985 4.953 18.158 3.032 24.996-5.815 3.756-4.862 8.096-4.857 11.891.078 6.598 8.58 14.251 10.472 24.423 5.987 7.391-3.258 8.255-2.186 11.319 5.707.075.195.225.374.254.572 1.591 10.844 8.668 14.812 18.757 14.777 6.565-.022 9.496 3.217 7.981 9.437-2.705 11.107 1.6 18.256 11.469 23.016 4.827 2.328 6.266 5.956 2.663 10.63-.251.326-.329.79-.591 1.103-6.853 8.176-6.589 15.989-.241 24.698 4.955 6.8 4.217 7.639-2.628 12.409-.516.359-1.008.774-1.571 1.033-8.071 3.719-10.745 9.453-9.358 18.589 1.589 10.457.794 11.131-10.254 12.075-8.641.738-13.966 4.139-15.791 12.757-.426 2.007-1.07 4.42-2.482 5.654-1.831 1.599-4.527 2.21-6.861 3.222-.153.066-.418-.05-.601-.142-11.19-5.608-20.548-3.661-28.267 6.442-2.742 3.59-6.408 3.242-9.042-.174-7.569-9.815-16.573-12.026-27.723-6.403-4.262 2.149-7.196.112-8.603-4.271-.127-.397-.342-.772-.424-1.177-2.297-11.181-9.086-16.075-20.543-16.257-7.233-.116-7.589-1.7-6.867-14.455zm52.291-47.923c-3.634-.482-5.669-.859-7.721-.993-2.085-.136-4.188-.093-6.279-.02-6.519.227-8.591 2.269-8.661 8.729-.077 7.119-.033 14.238-.016 21.357.021 9.252 1.155 10.355 10.589 10.408 11.152.063 11.153.063 11.229-10.927.008-1.198.001-2.396.001-5.241 1.128 2.311 1.634 3.148 1.962 4.049 3.556 9.758 5.807 11.431 15.98 11.608 5.443.094 10.962.651 16.31-.05 4.786-.627 10.866-1.345 13.697-4.458 3.711-4.08 5.759-10.381 6.754-16.039 1.157-6.572.21-13.49.541-20.24.225-4.555-1.703-7.741-5.912-8.171-5.728-.585-11.744-.895-17.32.239-6.443 1.311-6.274-1.745-5.447-5.972 1.039-5.306 2.966-10.535 3.219-15.858.132-2.773-1.836-6.469-4.045-8.348-3.764-3.198-6.33-1.555-7.134 3.379-.56 3.441-1.021 7.129-2.614 10.129-4.766 8.973-10.066 17.66-15.133 26.419zM275.656 377.277c-1.535-3.842-2.464-5.847-3.147-7.931a6613.274 6613.274 0 01-11.969-36.828c-.854-2.652-2.623-5.438.877-7.694 4.028-2.598 6.008-8.825 12.993-5.939 7.104 2.934 14.639 5.543 22.072-1.338l15.305 47.644c-5.854-1.386-10.517-1.856-14.625-3.617-5.703-2.445-9.192-.874-12.327 4.048-2.301 3.611-5.294 6.782-9.179 11.655zM188.848 363.432l14.618-45.847c7.5 6.708 15.114 4.299 22.424 1.244 6.952-2.906 9.277 3.177 12.789 6.292 1.384 1.227 1.294 5.187.591 7.515-3.731 12.359-7.861 24.598-11.877 36.871-.619 1.889-1.363 3.737-2.707 7.393-4.365-5.254-8.071-9.051-10.959-13.393-2.445-3.674-4.969-4.186-8.854-2.785-4.647 1.675-9.483 2.824-14.238 4.2l-1.787-1.49z"></path>
      </g>
    </svg>
  );
};
