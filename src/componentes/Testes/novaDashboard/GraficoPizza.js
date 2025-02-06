function GraficoPizza() {
    return(
        <div>
            <div 
            className="echart-doughnut-chart-example" 
            style={{
                minHeight: "320px",
                userSelect: "none",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                position: "relative"
            }}
            >
            <div 
                style={{
                    position: "relative",
                    width: "720px",
                    height: "320px",
                    padding: 0,
                    margin: 0,
                    borderWidth: 0,
                    cursor: "default"
                }}
                >
                <canvas 
                data-zr-dom-id="zr_0" 
                width="720" 
                height="320" 
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "720px",
                    height: "320px",
                    userSelect: "none",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    padding: 0,
                    margin: 0,
                    borderWidth: 0
                }}
                ></canvas>
            </div>
            <div></div>
            </div>
        </div>
    )
}

export default GraficoPizza;