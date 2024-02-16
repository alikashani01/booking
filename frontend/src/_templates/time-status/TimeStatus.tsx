import styles from "./styles.module.css";

interface Props {
    skill: string;
    setSkill: (value: string) => void;
}

const TimeStatus = ({ skill, setSkill }: Props) => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <button
                    id={skill === "همه" ? styles.selected : ""}
                    onClick={() => setSkill("همه")}
                >
                    همه
                </button>

                <button
                    id={skill === "میکاپ" ? styles.selected : ""}
                    onClick={() => setSkill("میکاپ")}
                >
                    میکاپ
                </button>

                <button
                    id={skill === "مو" ? styles.selected : ""}
                    onClick={() => setSkill("مو")}
                >
                    مو
                </button>

                <button
                    id={skill === "ناخن" ? styles.selected : ""}
                    onClick={() => setSkill("ناخن")}
                >
                    ناخن
                </button>
            </div>
        </div>
    );
};

export default TimeStatus;
