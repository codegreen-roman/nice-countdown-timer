import React from 'react'
import { useCountDown } from '../hooks/useCountDown'
import { useAppState } from '../hooks/useAppState'
import { Layout } from '../components/Layout'
import { InnerApp } from '../components/InnerApp'

export default function Home() {
  const { state, dispatch } = useAppState()
  const { minutesLeft, secondsLeft } = useCountDown({
    durationInSeconds: state.focusDuration,
    running: state.focusing,
    paused: state.paused,
    nextRoute: '/resting',
  })

  const handleStartButton = (): void => dispatch({ type: 'start focusing' })
  const handlePauseButton = (): void => dispatch({ type: 'pause focusing' })

  return (
    <Layout title="Running">
      <InnerApp
        handlePause={handlePauseButton}
        handleStart={handleStartButton}
        minutesLeft={minutesLeft}
        secondsLeft={secondsLeft}
        running={state.focusing}
        type="focusing"
      />
    </Layout>
  )
}
