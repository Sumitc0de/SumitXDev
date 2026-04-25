"use client";

import { useState, useEffect, useCallback } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa6";

type VoiceInputProps = {
  onTranscript: (text: string) => void;
  disabled?: boolean;
};

export default function VoiceInput({ onTranscript, disabled }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsSupported(
      typeof window !== "undefined" &&
        ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    );
  }, []);

  const toggleListening = useCallback(() => {
    if (!isSupported) return;

    if (isListening) {
      setIsListening(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) return;

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
    recognition.start();
  }, [isListening, isSupported, onTranscript]);

  if (!isSupported) return null;

  return (
    <button
      type="button"
      onClick={toggleListening}
      disabled={disabled}
      aria-label={isListening ? "Stop voice input" : "Start voice input"}
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
        isListening
          ? "bg-red-500/20 text-red-400"
          : "text-gray-500 hover:bg-white/10 hover:text-cyan-400"
      } disabled:pointer-events-none disabled:opacity-40`}
    >
      {isListening ? (
        <>
          <FaMicrophoneSlash className="h-4 w-4" />
          {/* Pulse ring */}
          <span className="absolute inset-0 animate-ping rounded-full bg-red-500/20" />
        </>
      ) : (
        <FaMicrophone className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
