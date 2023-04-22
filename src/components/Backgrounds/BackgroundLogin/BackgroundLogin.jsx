
import "./BackgroundLogin.css"
export const GlowingDiv = () => {
    return (
        <div className="body-bg min-vh-100 min-h-100">
            <div className="glowing">
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
            </div>
            <div className="glowing">
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
            </div>
            <div className="glowing">
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
            </div>
            <div className="glowing">
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
            </div>
        </div>
    );
};

