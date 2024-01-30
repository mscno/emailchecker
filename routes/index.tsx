import { useState } from 'preact/hooks';
import EmailIsland from "../islands/email.tsx";

export default function Home() {


  return (
<div className="flex flex-col items-center justify-center h-screen bg-[#86efac]">
  <h1 className="text-4xl font-bold mb-4 text-center">Email Island</h1>
  <EmailIsland />
  <div className="mt-10 max-w-2xl p-4 bg-white rounded shadow">
    <h2 className="text-lg font-bold mb-2">API Details:</h2>
    <p><strong>Host:</strong> https://emailchecker.dev</p>
    <p><strong>Path:</strong> /api/check</p>
    <h2 className="text-lg font-bold mt-4 mb-2">Example Request:</h2>
    <p>(replace email with the email you want to check)</p>
    <div className="p-2 bg-gray-100 rounded">
      <pre>curl -X GET https://emailchecker/api/check?email=user@example.com</pre>
    </div>
  </div>
  <div className="max-w-2xl my-4 text-center">
  <p>
    EmailChecker.dev is a completely free service that allows you to check if an email is valid or not and whether the email provider is a free or disposable email provider.
  </p>
  <p>
    It is built using <a href="https://deno.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:text-blue-700 underline">Deno</a> and 
    <a href="https://fresh.deno.dev/" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:text-blue-700 underline">Fresh</a> and is hosted on
    <a href="https://deno.com/deploy/" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:text-blue-700 underline">Deno Deploy</a>.
  </p>
  <div className="flex flex-row items-center justify-center">
  Source code available on 
  <a href="https://github.com/mscno/emailchecker" target="_blank" rel="noopener noreferrer" className="flex items-center mx-1">
   GitHub <img src="/github.svg" alt="GitHub" width="20" height="20" className="m-1"/>
  </a>
</div>
</div>
</div>
  );
}