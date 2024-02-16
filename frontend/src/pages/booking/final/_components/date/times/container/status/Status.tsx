import styles from "./styles.module.css";

interface Props {
    status: string;
    setStatus: (value: string) => void;
}

const Status = ({ status, setStatus }: Props) => {
    return (
        <div className={styles.status}>
            <div className={styles.container}>
                <button
                    id={status === "صبح" ? styles.selected : ""}
                    onClick={() => setStatus("صبح")}
                >
                    صبح
                </button>

                <button
                    id={status === "عصر" ? styles.selected : ""}
                    onClick={() => setStatus("عصر")}
                >
                    عصر
                </button>

                <button
                    id={status === "شب" ? styles.selected : ""}
                    onClick={() => setStatus("شب")}
                >
                    شب
                </button>
            </div>
        </div>
    );
};

export default Status;
