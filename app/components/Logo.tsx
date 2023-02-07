export default function Logo() {
  return (
    <span className="flex items-center text-3xl font-mono">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-bulb"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="2.2"
        stroke="#fbfbfb"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
        <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
        <line x1="9.7" y1="17" x2="14.3" y2="17" />
      </svg>
      StartupMate
    </span>
  );
}
