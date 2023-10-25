import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.formcard}>
        <div className="p-2">
          <form className={styles.form}>
            <div className={styles.formSection}>
              <Input
                id="input-url"
                type="text"
                aria-label="Long Url"
                placeholder="Enter long link here"
                label="Shorten your URL"
              />
              <Input
                id="alias"
                type="text"
                aria-label="Custom Alias"
                placeholder="Enter your alias here"
                label="Customize your Link"
              />
            </div>
            <button className={styles.submit} type="submit">
              Shorten URL
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

function Input(props: InputProps) {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id}>
          <span className={styles.label}>{props.label}</span>
        </label>
      )}
      <input className={styles.input} {...props} />
    </div>
  );
}
