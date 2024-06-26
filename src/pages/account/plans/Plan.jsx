import { useState } from "react";
import { handleKeyPress } from "../../../utils/utils";
import doneIcon from "../../../assets/icons/done-icon.png";
import editIcon from "../../../assets/icons/edit-icon.png";
import deleteIcon from "../../../assets/icons/delete-icon.png";
import undoneIcon from "../../../assets/icons/sandglass-icon.png";

import styles from "./plans.module.css";

function Plan({ plan, index, setPlanDone, editPlan, deletePlan }) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedPlan, setEditedPlan] = useState("");
  const [modalError, setModalError] = useState(false);

  const handleEditInput = (event) => {
    setModalError(false);
    setEditedPlan(event.target.value);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditedPlan("");
    setModalError(false);
  };

  const editPlanContent = () => {
    if (editedPlan.trim().length) {
      editPlan(plan.id, editedPlan);
      closeEditModal();
    } else {
      setModalError(true);
    }
  };

  return (
    <div className={styles.plan}>
      <div className={styles.planBody}>
        <div className={styles.planBodyText}>
          <span>{index + 1}.</span>
          <span
            className={styles.planContent}
            style={{ opacity: plan.done ? "0.4" : "1" }}
          >
            {plan.content}
          </span>
          <small
            className={styles.smallTag}
            style={{ color: plan.done ? "green" : "red" }}
          >
            {plan.done ? "done" : "undone"}
          </small>
        </div>
        <div className={styles.contentBtns}>
          <button
            className={styles.planBtn}
            onClick={() => setPlanDone(plan.id)}
          >
            <img
              className={styles.planBtnImg}
              src={plan.done ? undoneIcon : doneIcon}
              alt="done"
            />
          </button>
          <button
            className={styles.planBtn}
            onClick={() => setEditModalOpen((prev) => !prev)}
          >
            <img className={styles.planBtnImg} src={editIcon} alt="edit" />
          </button>
          <button
            className={styles.planBtn}
            onClick={() => deletePlan(plan.id)}
          >
            <img className={styles.planBtnImg} src={deleteIcon} alt="delete" />
          </button>
        </div>
      </div>
      <hr className={styles.planHr} />
      <div className={styles.addedData}>
        <small>{plan.added}</small>
      </div>
      <div
        className={styles.editPlanModal}
        style={{ top: editModalOpen ? "0" : "-100%" }}
      >
        <input
          type="text"
          value={editedPlan}
          className={styles.editPlanInput}
          style={{ borderColor: modalError ? "red" : "var(--light-gray)" }}
          onChange={handleEditInput}
          onKeyDown={(e) => handleKeyPress(e, "Enter", editPlanContent)}
        />
        <div className={styles.editPlanBtns}>
          <button className={styles.editPlanBtn} onClick={closeEditModal}>
            Cancel
          </button>
          <button className={styles.editPlanBtn} onClick={editPlanContent}>
            Edit plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
