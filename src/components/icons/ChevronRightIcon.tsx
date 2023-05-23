type Props = {
    className?: string
}

export function ChevronRightIcon({className}: Props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
            <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
