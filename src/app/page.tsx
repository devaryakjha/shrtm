import Submit from "./components/submit_form";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./page.module.css";
import submitLink from "./utils/actions/submit-link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.formcard}>
        <div className="p-2">
          <form className={styles.form} action={submitLink}>
            <div className={styles.formSection}>
              <Input
                id="url"
                name="url"
                type="text"
                aria-label="Long Url"
                placeholder="Enter long link here"
                label="Shorten your URL"
              />
              <Input
                id="title"
                name="title"
                type="text"
                aria-label="Custom Title"
                placeholder="Enter your title here"
                label="Customize your Link"
              />
              <Input
                id="description"
                name="description"
                type="text"
                aria-label="Custom Description"
                placeholder="Enter your description here"
              />
              <Input
                id="alias"
                name="alias"
                type="text"
                aria-label="Custom Alias"
                placeholder="Enter your alias here"
              />
            </div>
            <Submit className={styles.submit} />
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
