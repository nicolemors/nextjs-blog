

export default function Hero({ children, home })  {
    return (
        <div className="hero">
            {!home && (
                <span>{children}</span>
            )}
        </div>
    )
}
