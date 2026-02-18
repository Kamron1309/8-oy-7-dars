'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useThemeMode } from '@/context/ThemeContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, loading } = useAuth();
  const { mode, toggleTheme } = useThemeMode();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = await login(email, password);
    
    if (result.success) {
      const from = searchParams.get('from') || '/';
      router.push(from);
    } else {
      setError(result.error || 'Login xatolik');
    }
  };

  return (
    <div
      className={`
        min-h-screen flex justify-center items-center p-4 relative
        transition-all duration-300 ease-in-out
        ${mode === 'dark' ? 'bg-[#0b0b0b]' : 'bg-[#f0f4f8]'}
      `}
    >
      {/* Theme Toggle */}
      <div className="absolute top-5 right-5">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {mode === 'dark' ? (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Login Box */}
      <div
        className={`
          w-full max-w-[420px] p-10 rounded-2xl text-center
          transition-all duration-300 ease-in-out
          ${mode === 'dark' 
            ? 'bg-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.6)]' 
            : 'bg-white shadow-[0_8px_30px_rgba(0,123,255,0.15)]'
          }
        `}
      >
        <h1
          className={`text-4xl font-bold mb-2 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Xush kelibsiz 🤚🏻
        </h1>
        <p
          className={`text-sm mb-6 ${
            mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Hisobingizga kirish uchun email va parolni kiriting
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`
                w-full px-4 py-3 rounded-lg transition
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${mode === 'dark' 
                  ? 'bg-[#2a2a2a] text-white placeholder-gray-500' 
                  : 'bg-[#f9f9f9] text-black placeholder-gray-400'
                }
              `}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`
                w-full px-4 py-3 rounded-lg transition
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${mode === 'dark' 
                  ? 'bg-[#2a2a2a] text-white placeholder-gray-500' 
                  : 'bg-[#f9f9f9] text-black placeholder-gray-400'
                }
              `}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-3 rounded-lg font-bold text-base text-white
              transition-all duration-300 ease-in-out
              disabled:opacity-50 disabled:cursor-not-allowed
              ${mode === 'dark'
                ? 'bg-gradient-to-r from-[#ff8a00] to-[#e52e71] hover:scale-105 hover:shadow-[0_6px_20px_rgba(229,46,113,0.6)]'
                : 'bg-[#1976d2] hover:scale-105 hover:shadow-[0_6px_20px_rgba(25,118,210,0.5)]'
              }
            `}
          >
            {loading ? 'Yuklanmoqda...' : 'Kirish'}
          </button>
        </form>
      </div>
    </div>
  );
}
