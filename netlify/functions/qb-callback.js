exports.handler = async (event) => {
  const { code, state, realmId, error } = event.queryStringParameters || {};
  
  if (error) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `<h2>Error: ${error}</h2>`
    };
  }
  
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `<!DOCTYPE html>
<html>
<head><title>ZeoX CFO - Authorization Complete</title>
<style>body{font-family:sans-serif;max-width:700px;margin:60px auto;padding:0 24px;}
code{background:#f4f4f4;padding:4px 8px;border-radius:4px;word-break:break-all;display:block;margin:8px 0;font-size:0.9rem;}
</style></head>
<body>
<h1>Authorization Received</h1>
<p>Copy the values below and paste them to ZeoX:</p>
<p><strong>Code:</strong><code>${code || 'none'}</code></p>
<p><strong>Realm ID:</strong><code>${realmId || 'none'}</code></p>
<p><strong>State:</strong><code>${state || 'none'}</code></p>
<p style="color:#666;margin-top:2em;">You can close this tab.</p>
</body>
</html>`
  };
};
