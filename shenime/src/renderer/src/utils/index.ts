import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormater = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'Europe/Berlin' // IANA time zone for UTC+2 during daylight saving time
})

export const formatDateFromMS = (ms: number) => dateFormater.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
