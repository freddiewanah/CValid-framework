import {useState, useEffect} from "react";

const GoTop = () : React.ReactElement => {
    const [isVisible, setIsVisible] = useState(false);

    const checkPosition = () => {
        if (!isVisible && window.pageYOffset > 300) {
            setIsVisible(true);
        } else if (isVisible && window.pageYOffset <= 300) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkPosition);
        return () => {
            window.removeEventListener('scroll', checkPosition);
        };
    }, [isVisible]);

    const onTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div className="top" onClick={() => onTop()}>
                    <i className="bi bi-chevron-up"></i>
                </div>
            )}
        </div>
    );
}

export default GoTop;