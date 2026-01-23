'use client'

import { useState } from 'react'
import { GeminiService } from '@/lib/Geminiservice'
import VoiceView from './VoiceView'

export default function App() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showVoiceMode, setShowVoiceMode] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await GeminiService.chat(input)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, there was an error processing your request.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  if (showVoiceMode) {
    return <VoiceView onBack={() => setShowVoiceMode(false)} />
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <header style={{ 
        padding: '20px', 
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>Tech AI - Gemini Chat</h1>
        <button 
          onClick={() => setShowVoiceMode(true)}
          style={{
            padding: '10px 20px',
            background: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🎤 Voice Mode
        </button>
      </header>

      <main style={{ 
        flex: 1, 
        padding: '20px',
        overflowY: 'auto'
      }}>
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#666', marginTop: '50px' }}>
            <p>Start a conversation with Gemini AI!</p>
          </div>
        ) : (
          <div>
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                style={{
                  marginBottom: '15px',
                  padding: '15px',
                  borderRadius: '8px',
                  background: msg.role === 'user' ? '#f0f0f0' : '#e3f2fd'
                }}
              >
                <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong>
                <p style={{ marginTop: '5px' }}>{msg.content}</p>
              </div>
            ))}
          </div>
        )}
        {isLoading && (
          <div style={{ textAlign: 'center', color: '#666' }}>
            <p>AI is thinking...</p>
          </div>
        )}
      </main>

      <footer style={{ 
        padding: '20px',
        borderTop: '1px solid #eee'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            style={{
              padding: '12px 24px',
              background: isLoading || !input.trim() ? '#ccc' : '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  )
}
