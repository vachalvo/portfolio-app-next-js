import { type ReactNode } from 'react'

export interface IPageTitle {
  title: string
  subtitle?: string
}

export default function SectionTitle ({ title, subtitle }: IPageTitle): ReactNode {
  return (
        <div className="mb-4 flex flex-col gap-4">
            <h2 className="md:text-center text-4xl md:text-5xl font-bold">{title}</h2>
            {subtitle && <p className="md:text-center uppercase">{subtitle}</p>}
        </div>
  )
}
