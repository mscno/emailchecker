import { useEffect, useState } from "preact/hooks";
import { h } from "preact";

export default function EmailIsland() {
  const [email, setEmail] = useState("user@gmail.com");
  const [result, setResult] = useState("");

  const checkEmail = async (email: string) => {
    const response = await fetch(
      `/api/check?email=${encodeURIComponent(email)}`,
    );
    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  };

  const handleCheckEmail = async (e: Event) => {
    e.preventDefault();
    await checkEmail(email);
  };

  useEffect(() => {
    checkEmail(email);
  }, [email]);

  return (
    <div className="w-full max-w-2xl p-8 bg-white rounded shadow">
      <h1 className="text-lg font-bold mb-4 text-center">Check an email:</h1>
      <form onSubmit={handleCheckEmail} className="space-y-1">
        <label
          htmlFor="input"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          id="input"
          value={email}
          onChange={(e) => {
            const element = e.target as HTMLInputElement;
            setEmail(element.value);
          }}
          onInput={(e) => {
            const element = e.target as HTMLInputElement;
            setEmail(element.value);
          }}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <div class="text-xs italic">
          result automatically fetched on input update
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Request:</h2>
        <pre className="p-2 bg-gray-100 rounded">{`GET /api/check?email=${email}`}</pre>
        <h2 className="text-lg font-bold mt-4 mb-2">Result:</h2>
        {result && <pre className="p-2 bg-gray-100 rounded">{result}</pre>}
      </div>
    </div>
  );
}
