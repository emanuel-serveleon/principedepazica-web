import Link from 'next/link';

export default function Pagination({ total, current, href }) {
  return (
    <div className="m-4 flex justify-center gap-2">
      {Array(total)
        .fill(0)
        .map((_, i) => {
          if (i !== current - 1) {
            return (
              <Link
                className="bg-white p-2 hover:bg-slate-100"
                href={href + (i + 1)}
                key={i}
              >
                {i + 1}
              </Link>
            );
          } else {
            return (
              <Link className="bg-slate-300 p-2" href={href + (i + 1)} key={i}>
                {i + 1}
              </Link>
            );
          }
        })}
    </div>
  );
}
