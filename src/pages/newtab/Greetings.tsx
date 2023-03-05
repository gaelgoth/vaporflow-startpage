import { useState, useEffect } from "react";

export default function Greetings(): JSX.Element {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  if (quote) {
    return (
      <div className="card w-80 bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title prose">
            <code className="text-lg text-accent-focus italic">
              Hello Gaël!
            </code>
          </h2>
          <q className="text-sm">{quote}</q>- {author}
          <div className="card-actions justify-end">
            <form action="https://www.google.ch/search?q=">
              <label className="">
                <span className="text-sm">
                  &gt; cd ~/<span className="Blinking">_ </span>
                </span>
                <input type="text" className="input input-sm input-ghost" />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
}
