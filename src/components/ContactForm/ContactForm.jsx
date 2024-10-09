import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <Formik className={css.formBox}>
      <Form action="">
        <lable className={css.form}>
          <span>Name</span>
          <Field type="text" />
        </lable>
        <lable className={css.form}>
          <span>Number</span>
          <Field type="text" />
        </lable>
        <button>Ad contact</button>
      </Form>
    </Formik>
  );
}
