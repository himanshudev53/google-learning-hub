'use client'

import { trackEvent } from '@/app/lib/analytics'

interface TrackableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    eventName: string
    eventParams?: Record<string, any>
    children: React.ReactNode
}

export default function TrackableButton({
    eventName,
    eventParams,
    children,
    onClick,
    ...props
}: TrackableButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Track the event
        trackEvent(eventName, eventParams)

        // Call original onClick if provided
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <button onClick={handleClick} {...props}>
            {children}
        </button>
    )
}