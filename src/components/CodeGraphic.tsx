const CodeGraphic = () => {
  return (
    <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-60">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Floating code brackets */}
        <g className="animate-float-slow">
          <text
            x="20"
            y="30"
            fill="hsl(var(--primary))"
            fontSize="24"
            fontWeight="bold"
            className="animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          >
            {'<'}
          </text>
          <text
            x="70"
            y="30"
            fill="hsl(var(--primary))"
            fontSize="24"
            fontWeight="bold"
            className="animate-pulse"
            style={{ animationDelay: '1.5s', animationDuration: '3s' }}
          >
            {'/'}
          </text>
          <text
            x="80"
            y="30"
            fill="hsl(var(--primary))"
            fontSize="24"
            fontWeight="bold"
            className="animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          >
            {'>'}
          </text>
        </g>

        {/* Network nodes */}
        <g className="animate-float-medium">
          <circle
            cx="30"
            cy="60"
            r="3"
            fill="hsl(var(--primary))"
            className="animate-pulse"
            style={{ animationDelay: '0.5s', animationDuration: '2s' }}
          />
          <circle
            cx="70"
            cy="65"
            r="3"
            fill="hsl(var(--primary))"
            className="animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '2s' }}
          />
          <circle
            cx="50"
            cy="75"
            r="3"
            fill="hsl(var(--primary))"
            className="animate-pulse"
            style={{ animationDelay: '1.5s', animationDuration: '2s' }}
          />
          
          {/* Connecting lines */}
          <line
            x1="30"
            y1="60"
            x2="50"
            y2="75"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}
          />
          <line
            x1="50"
            y1="75"
            x2="70"
            y2="65"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '2.5s' }}
          />
        </g>

        {/* Curly braces */}
        <g className="animate-float-fast">
          <text
            x="15"
            y="90"
            fill="hsl(var(--primary))"
            fontSize="20"
            fontWeight="bold"
            className="animate-pulse"
            style={{ animationDelay: '0.7s', animationDuration: '2.8s' }}
          >
            {'{'}
          </text>
          <text
            x="75"
            y="90"
            fill="hsl(var(--primary))"
            fontSize="20"
            fontWeight="bold"
            className="animate-pulse"
            style={{ animationDelay: '0.7s', animationDuration: '2.8s' }}
          >
            {'}'}
          </text>
        </g>
      </svg>
    </div>
  );
};

export default CodeGraphic;
