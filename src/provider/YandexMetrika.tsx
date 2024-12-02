import { Router } from 'next/router'
import { PropsWithChildren, useCallback, useEffect } from 'react'
import ym, { YMInitializer } from 'react-yandex-metrika'

export const enableYM = process.env.NODE_ENV === 'production';

export const YandexMetrika = ({ children }: PropsWithChildren) => {
  const hit = useCallback((url: string) => {
    if (enableYM) {
      ym('hit', url)
    } else {
      console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url)
    }
  }, [])

  useEffect(() => {
    hit(window.location.pathname + window.location.search)
    Router.events.on('routeChangeComplete', (url: string) => hit(url))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {enableYM && (
        <YMInitializer
          accounts={[Number(99089603)]}
          options={{ defer: true }}
          version="2"
        />
      )}
      {children}
    </>
  )
}
