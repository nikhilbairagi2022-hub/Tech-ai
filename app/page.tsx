export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Tech AI
        </h1>
        <p className="text-center text-gray-600 mb-4">
          AI-powered application featuring:
        </p>
        <ul className="text-center space-y-2">
          <li>💬 Chat with AI (Gemini service)</li>
          <li>🎨 Image Generation</li>
          <li>🎤 Voice Mode - Talk with AI</li>
          <li>💰 Monetization Features</li>
        </ul>
      </div>
    </main>
  )
}
