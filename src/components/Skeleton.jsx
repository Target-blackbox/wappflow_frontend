const Skeleton = ({ className, variant = 'rect' }) => {
    const baseClass = "skeleton-base skeleton-shimmer"
    const variantClass = variant === 'circle' ? 'rounded-full' : 'rounded-lg'

    return (
        <div className={`${baseClass} ${variantClass} ${className}`} />
    )
}

export default Skeleton
