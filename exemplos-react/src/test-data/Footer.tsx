import "./styles.css";

const Footer: React.FC = () => {

    const anoCorrente = new Date().getFullYear()

    return (
        <div>
            <p className="text"> {anoCorrente} </p>            
        </div>
    );
};

export default Footer