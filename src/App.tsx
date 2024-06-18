import React, { useState } from 'react'
import './css/App.css'
import { Card } from './components/Card'


export const App = () => {
  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaras una millora ràpidament.',
      bgColor: '#4da2a9',
      image: './src/assets/time_management.svg'
    },    
    {
      title: 'Programa projectes propies',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      bgColor: '#d3d4d9',
      image: './src/assets/programming.svg'
    },    
    {
      title: 'Procura descansar',
      description: 'Descansar bé i desconnectar són vitals. D\'aquesta manera reduiràs l\'estrès i l\'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
      bgColor: '#ffd167',
      image: './src/assets/meditation.svg'
    }
  ]

  const [step, setStep] = useState(0)

  return (
    <Card title={tutorialData[step].title} description={tutorialData[step].description} />
  )
}
