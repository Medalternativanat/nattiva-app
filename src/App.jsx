import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'

// ⚠️ removido type Language
import { detectLanguage } from '@/lib/i18n'
import { BottomNav } from '@/components/BottomNav'

import HomePage from '@/pages/HomePage'
import ResultPage from '@/pages/ResultPage'
import QuizPage from '@/pages/QuizPage'
import WaterPage from '@/pages/WaterPage'
import CommunityPage from '@/pages/CommunityPage'
import StepsPage from '@/pages/StepsPage'
import GamesPage from '@/pages/GamesPage'

function AppContent() {
  const [lang, setLang] = useState('pt') // ⚠️ removido tipo

  const location = useLocation()

  useEffect(() => {
    const detected = detectLanguage()
    const saved = localStorage.getItem('nattiva_lang')

    setLang(saved || detected)
  }, [])

  const hideNav = false

  return (
    <div className="max-w-lg mx-auto min-h-screen relative">
      <Toaster richColors position="top-center" />

      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/resultado" element={<ResultPage lang={lang} />} />
        <Route path="/perfil" element={<QuizPage lang={lang} />} />
        <Route path="/agua" element={<WaterPage lang={lang} />} />
        <Route path="/comunidade" element={<CommunityPage lang={lang} />} />
        <Route path="/passos" element={<StepsPage lang={lang} />} />
        <Route path="/jogos" element={<GamesPage lang={lang} />} />
      </Routes>

      {!hideNav && <BottomNav lang={lang} />}
    </div>
  )
}

export function App() {
  return <AppContent />
}

export default App
  return <AppContent />
}

export default App
