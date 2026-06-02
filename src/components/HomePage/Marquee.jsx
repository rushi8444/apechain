import { useEffect, useRef } from "react";

const css = `
  @keyframes ape-scroll-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes ape-scroll-right {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .ape-item {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    padding-right: 48px;
    font-size: 42px;
    font-weight: 900;
    letter-spacing: -1.5px;
    text-transform: uppercase;
    color: #0f172a;
    white-space: nowrap;
    font-family: 'Arial Black', Impact, sans-serif;
    cursor: pointer;
    transition: color 0.25s;
  }
  .ape-item:hover {
    color: #2563eb;
  }
  .ape-item:hover .ape-icon {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
  .ape-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    flex-shrink: 0;
    border: 1.5px solid #cbd5e1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .ape-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ROW1 = [
  {
    label: "Intellectual Property",
    img: "https://images.ctfassets.net/opj3ybl4k7mx/5sKAbZjuHKGxqJD0G0SFPW/ba45ece7ce5fd52c56a98e18da4e36d1/608x336-MBAICON.jpg",
    fallback: "#1a3a6e",
  },
  {
    label: "Collectibles",
    img: "https://images.ctfassets.net/opj3ybl4k7mx/2V7fDZwnTMxnAlvQBXSQts/3a79d7ebf4f32bdc21e7f5c2ff8b3aa5/608x336-blever.jpg",
    fallback: "#1e4a8a",
  },
  {
    label: "Finance",
    img: "https://images.ctfassets.net/opj3ybl4k7mx/3tMXbIQHx0mZf7B7Ur4OjS/a8dc35bc1eb3e1ef44aeef7c8ce5b80a/608x336-camelot.jpg",
    fallback: "#111827",
  },
  {
    label: "Infrastructure",
    img: "https://images.ctfassets.net/opj3ybl4k7mx/6nFQJiZcTmA3T3pXVlLpFJ/8a63c47ab8a7a3d6dce9bceab3f8a83e/608x336-apeportal.jpg",
    fallback: "#4c1d95",
  },
  {
    label: "Games",
    img: "https://images.ctfassets.net/opj3ybl4k7mx/7Cn10d3ErtqfrG6H7EFGg8/1942238297ed97ef14f5e9f1049389f7/apeChain-thumbnail-608x336-Otherside.jpg",
    fallback: "#0f172a",
  },
];

const ROW2 = [ROW1[3], ROW1[4], ROW1[2], ROW1[1], ROW1[0]];

function Track({ items, direction }) {
  const doubled = [...items, ...items];
  const duration = direction === "left" ? "10s" : "16s";
  const animName = direction === "left" ? "ape-scroll-left" : "ape-scroll-right";

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: `${animName} ${duration} linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="ape-item">
            <span className="ape-icon">
              <img
                src={item.img}
                alt={item.label}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.style.background = item.fallback;
                }}
              />
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const styleRef = useRef(null);

  useEffect(() => {
    if (!styleRef.current) {
      const tag = document.createElement("style");
      tag.textContent = css;
      document.head.appendChild(tag);
      styleRef.current = tag;
    }
    return () => styleRef.current?.remove();
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "2rem 0",
        background: "#eef2f8",
        userSelect: "none",
      }}
    >
      <Track items={ROW1} direction="left" />
      <div style={{ height: 10 }} />
      <Track items={ROW2} direction="right" />
    </div>
  );
}