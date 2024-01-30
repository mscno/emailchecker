import { useState } from 'preact/hooks';

export default function EmailIsland() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const checkEmail = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/check?email=${encodeURIComponent(email)}`);
    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
  <div className="w-full max-w-md p-8 bg-white rounded shadow">
    <h1 className="text-lg font-bold mb-4 text-center">Check an email:</h1>
    <form onSubmit={checkEmail} className="space-y-4">
      <label htmlFor="input" className="block text-sm font-medium text-gray-700">Email:</label>
      <input id="input" value={email} onInput={(e) => setEmail(e.target.value)} required className="block w-full p-2 border border-gray-300 rounded" />
      <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">Check</button>
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