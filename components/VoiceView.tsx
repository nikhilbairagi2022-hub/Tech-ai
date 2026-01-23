'use client'

import { useState, useEffect } from 'react'

interface VoiceViewProps {
  onBack: () => void
}

export default function VoiceView({ onBack }: VoiceViewProps) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    // Check if browser supports Web Speech API
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.warn('Speech Recognition not supported in this browser')
    }
  }, [])

  const startListening = () => {
    setIsListening(true)
    setTranscript('')
    setResponse('')
    
    // Implement speech recognition here
    // This is a placeholder - actual implementation would use Web Speech API
    setTimeout(() => {
      setTranscript('Voice input detected...')
      setIsListening(false)
      setTimeout(() => {
        setResponse('This is a voice response from Gemini AI')
      }, 1000)
    }, 2000)
  }

  const stopListening = () => {
    setIsListening(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <button
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Back to Chat
      </button>

      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Voice Mode
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9 }}>
          Speak naturally to interact with Gemini AI
        </p>

        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: isListening 
            ? 'rgba(255, 255, 255, 0.3)' 
            : 'rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 40px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isListening ? 'scale(1.1)' : 'scale(1)',
        }}
          onClick={isListening ? stopListening : startListening}
        >
          <div style={{ fontSize: '80px' }}>
            {isListening ? '🎙️' : '🎤'}
          </div>
        </div>

        <button
          onClick={isListening ? stopListening : startListening}
          style={{
            padding: '15px 40px',
            fontSize: '18px',
            background: isListening ? '#ff4444' : 'rgba(255, 255, 255, 0.9)',
            color: isListening ? 'white' : '#667eea',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '40px'
          }}
        >
          {isListening ? 'Stop Listening' : 'Start Speaking'}
        </button>

        {transcript && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            <h3 style={{ marginBottom: '10px' }}>You said:</h3>
            <p>{transcript}</p>
          </div>
        )}

        {response && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h3 style={{ marginBottom: '10px' }}>AI Response:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  )
}
