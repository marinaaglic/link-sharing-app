import styles from "./ProfileDetailsForm.module.css";
import Input from "../../reusable/input/Input";
import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";

export default function ProfileDetailsForm() {
  return (
    <div className={styles.customizeWrapper}>
        <div>
            <h2>Profile Details</h2>
            <p>Add your details to add personal touch to your profile.</p>
        </div>
        <form>
            <div className={styles.inputElements}>
                <Input 
                label="First name"
                id="firstName"
                type="text"
                placeholder="e.g. John"
                />
                <Input 
                label="Last name"
                id="lastName"
                type="text"
                placeholder="e.g. Appleseed"
                />
                <Input 
                label="Email"
                id="email"
                type="email"
                placeholder="e.g. email@example.com"
                />
            </div>
           <hr />
           <div className={styles.saveButton}>
            <ButtonWithLabel text="Save" variant="defaultSmall" type="submit"/>
           </div>
        </form>
    </div>
  )
}