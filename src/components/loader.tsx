const Loader = () => {
    return (
        /* From Uiverse.io by devAaus */
        <div className="flex-col gap-4 w-full h-full flex items-center justify-center opacity-90">
            <div
                className="w-16 h-16 border-4 border-transparent text-primary text-4xl animate-spin flex items-center justify-center border-t-primary rounded-full"
            >
                <div
                    className="w-12 h-12 border-4 border-transparent text-foreground text-2xl animate-spin flex items-center justify-center border-t-foreground rounded-full"
                ></div>
            </div>
        </div>

    )
}
export default Loader
